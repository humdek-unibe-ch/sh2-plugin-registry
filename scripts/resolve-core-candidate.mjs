#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * `resolve-core-candidate.mjs` — the compatibility resolver behind
 * `.github/workflows/auto-core-release.yml`.
 *
 * When a backend (`core`) or frontend image is published, this script decides
 * whether a registry release CANDIDATE can be assembled automatically from
 * already-published counterparts:
 *
 *   1. duplicate guard  — version already in registry.json, or a
 *                         `publish/<kind>-<version>` branch already exists;
 *   2. manifest fetch   — `release-manifest.json` at the component's git tag
 *                         declares which counterpart versions it supports;
 *   3. digest check     — every image digest is resolved from GHCR by tag;
 *                         digests supplied by the trigger payload must MATCH;
 *   4. compatibility    — BIDIRECTIONAL semver check against the latest stable
 *                         counterpart release (core ⇄ frontend); during a
 *                         coordinated wave where the published counterpart is
 *                         still the old incompatible version, falls back to the
 *                         newest mutually-compatible counterpart git TAG so both
 *                         new sides stage together (no deadlock);
 *   5. output           — the PUBLISH_* inputs for `publish-release.mjs`.
 *
 * It never signs, commits, or publishes anything itself, and the resulting
 * release only becomes installable after a human reviews + merges the PR —
 * exactly like the manual `publish-core-release` flow it feeds into.
 *
 * Modes (RESOLVE_MODE):
 *   plan       read the GitHub event (repository_dispatch / workflow_dispatch /
 *              schedule) and emit the normalized candidate list;
 *   candidate  fully resolve one candidate (CANDIDATE_JSON) and emit the
 *              publish inputs.
 */
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import semver from 'semver';

const SCRIPTS = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(SCRIPTS, '..');

/** Component repositories by release kind. */
export const COMPONENT_REPOS = {
  core: 'sh-selfhelp_backend',
  frontend: 'sh-selfhelp_frontend',
};

const SEMVER_OPTS = { includePrerelease: true };

// ---------------------------------------------------------------------------
// Pure resolution logic (ctx-injected IO so tests run fully offline)
// ---------------------------------------------------------------------------

/**
 * Resolve one candidate into a publishable input set.
 *
 * @param {object} candidate { kind, version, channel?, digests?, metadata? }
 * @param {object} ctx injected IO:
 *   registry                       parsed registry.json
 *   owner                          GH org for repos + ghcr images
 *   loadRelease(releaseUrl)        parsed release doc for a registry ref
 *   branchExists(branch)           true when the publish branch already exists
 *   resolveImageDigest(image)      'sha256:...' for a tag, null when missing
 *   fetchComponentJson(repo, ref, file)  parsed JSON file at a git ref (null when missing)
 *   listMigrationClasses(repo, ref)      sorted Doctrine Version class names (core only)
 * @returns {Promise<{status: string, reasons: string[], publish?: object}>}
 */
export async function resolveCandidate(candidate, ctx) {
  const reasons = [];
  const kind = candidate.kind;
  const version = String(candidate.version ?? '').replace(/^v/, '');
  const channel = candidate.channel || 'stable';

  if (kind !== 'core' && kind !== 'frontend') {
    return { status: 'error', reasons: [`Unsupported kind "${kind}" (auto flow covers core + frontend).`] };
  }
  if (!semver.valid(version)) {
    return { status: 'error', reasons: [`"${candidate.version}" is not a valid semver version.`] };
  }

  // 1. Duplicate guard — same version already referenced or already staged.
  const refs = ctx.registry[kind] ?? [];
  if (refs.some((r) => r.version === version)) {
    return { status: 'duplicate', reasons: [`${kind} ${version} is already referenced by registry.json.`] };
  }
  const branch = `publish/${kind}-${version}`;
  if (await ctx.branchExists(branch)) {
    return { status: 'duplicate', reasons: [`Branch ${branch} already exists (candidate already staged for review).`] };
  }

  // 2. The component's own declaration of what it supports, at the tag.
  const repo = COMPONENT_REPOS[kind];
  const manifest = await ctx.fetchComponentJson(repo, `v${version}`, 'release-manifest.json');
  if (!manifest) {
    return {
      status: 'error',
      reasons: [`${repo}@v${version} has no release-manifest.json; cannot auto-resolve (use the manual publish-core-release workflow).`],
    };
  }

  // 3. Image digests: GHCR (by tag) is the source of truth; digests supplied
  //    by the trigger payload are cross-checked, never trusted blindly.
  const services = kind === 'core' ? ['backend', 'worker', 'scheduler'] : ['frontend'];
  const resolved = {};
  for (const svc of services) {
    const image = `ghcr.io/${ctx.owner}/selfhelp-${svc}:${version}`;
    const digest = await ctx.resolveImageDigest(image);
    if (!digest) {
      return { status: 'error', reasons: [`Image ${image} is not published on GHCR (did the image workflow succeed?).`] };
    }
    const claimed = candidate.digests?.[svc === 'frontend' ? 'image' : svc];
    if (claimed && claimed !== digest) {
      return {
        status: 'digest-mismatch',
        reasons: [`Digest mismatch for ${image}: payload says ${claimed}, GHCR says ${digest}.`],
      };
    }
    resolved[svc === 'frontend' ? 'image' : svc] = digest;
  }

  // 4. Bidirectional compatibility.
  //
  // The happy path matches against the latest ALREADY-PUBLISHED counterpart in
  // the registry. During a coordinated (breaking) wave both sides advance
  // together, so the published counterpart is briefly the old, now-incompatible
  // version and a strict "must match the latest published counterpart" check
  // would deadlock (each side waits for the other). When that happens we fall
  // back to the newest counterpart REPO tag that is MUTUALLY compatible: it just
  // hasn't been published to the registry yet and lands in the same wave. Each
  // side still stages its own reviewed + signed PR, and the manager only ever
  // installs a mutually-compatible set, so a registry that briefly holds one
  // side before the other is safe.
  const counterpartKind = kind === 'core' ? 'frontend' : 'core';
  const supportField = kind === 'core' ? 'supports.frontend' : 'supports.core';
  const ourSupportRange = kind === 'core' ? manifest.supports?.frontend : manifest.supports?.core;
  if (!ourSupportRange) {
    return { status: 'error', reasons: [`release-manifest.json of ${repo}@v${version} lacks ${supportField}.`] };
  }

  const counterpartRef = latestStableRef(ctx.registry[counterpartKind] ?? []);
  let matched = null; // { version, via: 'published' | 'tag' }
  let blockStatus = 'missing-component';
  let blockReason = `No stable ${counterpartKind} release exists in the registry yet; a full ${kind} candidate cannot be matched.`;

  if (counterpartRef) {
    const counterpart = await ctx.loadRelease(counterpartRef.releaseUrl);
    const counterpartRange =
      kind === 'core'
        ? counterpart.backendCompatibility?.requiredCoreRange
        : counterpart.frontendCompatibility?.requiredFrontendRange;
    const forwardOk = semver.satisfies(counterpartRef.version, ourSupportRange, SEMVER_OPTS);
    const reverseOk = !counterpartRange || semver.satisfies(version, counterpartRange, SEMVER_OPTS);
    if (forwardOk && reverseOk) {
      matched = { version: counterpartRef.version, via: 'published' };
    } else {
      blockStatus = 'incompatible';
      blockReason = !forwardOk
        ? kind === 'core'
          ? `core ${version} supports frontend ${ourSupportRange}, but the latest stable frontend is ${counterpartRef.version}.`
          : `frontend ${version} requires core ${ourSupportRange}, but the latest stable core is ${counterpartRef.version}.`
        : kind === 'core'
          ? `frontend ${counterpartRef.version} requires core ${counterpartRange}, which excludes core ${version}.`
          : `core ${counterpartRef.version} accepts frontend ${counterpartRange}, which excludes frontend ${version}.`;
    }
  }

  if (!matched) {
    const tagMatch = await newestCompatibleCounterpartTag(ctx, counterpartKind, ourSupportRange, kind, version);
    if (tagMatch) matched = { version: tagMatch.version, via: 'tag' };
  }

  if (!matched) {
    return { status: blockStatus, reasons: [blockReason] };
  }

  reasons.push(
    matched.via === 'published'
      ? `${counterpartKind} ${matched.version} ⇄ ${kind} ${version}: both ranges satisfied.`
      : `${counterpartKind} ${matched.version} ⇄ ${kind} ${version}: both ranges satisfied against an unpublished counterpart tag (coordinated wave — the ${counterpartKind} release stages alongside this one).`,
  );

  if (kind === 'core') {
    const migrationRange =
      candidate.metadata?.migrationRange ?? (await migrationRangeFromRepo(ctx, repo, `v${version}`));
    if (!migrationRange) {
      return { status: 'error', reasons: [`Could not determine the Doctrine migration range for ${repo}@v${version}.`] };
    }

    return {
      status: 'ready',
      reasons,
      publish: {
        kind,
        version,
        channel,
        digests: resolved,
        metadata: prune({
          minUpgradeFrom: manifest.minimumDirectUpgradeFrom,
          pluginApi: manifest.pluginApiVersion,
          frontendRange: ourSupportRange,
          migrationRange,
          php: manifest.php,
          destructive: candidate.metadata?.destructive,
          requiresBackup: candidate.metadata?.requiresBackup,
          manualConfirm: candidate.metadata?.manualConfirm,
        }),
        seedFrom: seedPath(kind, refs),
      },
    };
  }

  // kind === 'frontend'
  const sharedPackageVersion =
    candidate.metadata?.sharedPackageVersion ?? (await sharedVersionFromLock(ctx, repo, `v${version}`));

  return {
    status: 'ready',
    reasons,
    publish: {
      kind,
      version,
      channel,
      digests: resolved,
      metadata: prune({
        requiredCoreRange: ourSupportRange,
        requiredApiVersion: manifest.requiredApiVersion,
        sharedPackageVersion,
      }),
      seedFrom: seedPath(kind, refs),
    },
  };
}

/**
 * Reconcile plan: the latest published git tag of each component repo that is
 * missing from the registry becomes a candidate (cron catch-up; instant
 * repository_dispatch is the fast path).
 */
export async function planReconcile(ctx) {
  const candidates = [];
  for (const [kind, repo] of Object.entries(COMPONENT_REPOS)) {
    const tags = await ctx.listTags(repo);
    const versions = tags
      .map((t) => t.replace(/^v/, ''))
      .filter((v) => semver.valid(v))
      .sort(semver.rcompare);
    const latest = versions[0];
    if (!latest) continue;
    const refs = ctx.registry[kind] ?? [];
    if (refs.some((r) => r.version === latest)) continue;
    if (await ctx.branchExists(`publish/${kind}-${latest}`)) continue;
    candidates.push({ kind, version: latest, channel: 'stable' });
  }
  return candidates;
}

/** Normalize the triggering GitHub event into a candidate list. */
export function planFromEvent(eventName, event) {
  if (eventName === 'repository_dispatch') {
    const p = event.client_payload ?? {};
    const kind = p.kind ?? (event.action === 'core-image-published' ? 'core' : 'frontend');
    return [prune({ kind, version: p.version, channel: p.channel || 'stable', digests: p.digests, metadata: p.metadata })];
  }
  if (eventName === 'workflow_dispatch') {
    const i = event.inputs ?? {};
    return [
      prune({
        kind: i.kind,
        version: i.version,
        channel: i.channel || 'stable',
        digests: parseMaybeJson(i.digests, 'digests'),
        metadata: parseMaybeJson(i.metadata, 'metadata'),
      }),
    ];
  }
  return null; // schedule → caller runs planReconcile
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function latestStableRef(refs) {
  return refs
    .filter((r) => r.channel === 'stable' && semver.valid(r.version))
    .sort((a, b) => semver.rcompare(a.version, b.version))[0];
}

function seedPath(kind, refs) {
  const latest = latestStableRef(refs);
  return latest ? latest.releaseUrl : undefined;
}

/**
 * Coordinated-wave fallback: the newest tag in the counterpart repo that is
 * MUTUALLY compatible with this candidate, even though it is not (yet) published
 * to the registry. "Mutually compatible" means the counterpart tag satisfies OUR
 * supported range AND the tag's own `release-manifest.json` supports OUR version.
 * Tags are scanned newest-first and the first qualifying one wins, so an
 * in-flight breaking-wave counterpart is matched while an older pre-wave tag is
 * skipped. Returns { version, manifest } or null when no counterpart tag
 * qualifies.
 *
 * @param {object} ctx injected IO (listTags + fetchComponentJson)
 * @param {'core'|'frontend'} counterpartKind the OTHER component's kind
 * @param {string} ourSupportRange the semver range THIS candidate supports for the counterpart
 * @param {'core'|'frontend'} ourKind this candidate's kind
 * @param {string} ourVersion this candidate's version
 */
async function newestCompatibleCounterpartTag(ctx, counterpartKind, ourSupportRange, ourKind, ourVersion) {
  const repo = COMPONENT_REPOS[counterpartKind];
  const tags = (await ctx.listTags(repo)) ?? [];
  const candidates = tags
    .map((t) => t.replace(/^v/, ''))
    .filter((v) => semver.valid(v) && semver.satisfies(v, ourSupportRange, SEMVER_OPTS))
    .sort(semver.rcompare);
  for (const v of candidates) {
    const m = await ctx.fetchComponentJson(repo, `v${v}`, 'release-manifest.json');
    if (!m) continue;
    const reverseRange = ourKind === 'core' ? m.supports?.core : m.supports?.frontend;
    if (!reverseRange || semver.satisfies(ourVersion, reverseRange, SEMVER_OPTS)) {
      return { version: v, manifest: m };
    }
  }
  return null;
}

async function migrationRangeFromRepo(ctx, repo, ref) {
  const classes = await ctx.listMigrationClasses(repo, ref);
  if (!classes || classes.length === 0) return undefined;
  const sorted = [...classes].sort();
  return `${sorted[0]}..${sorted[sorted.length - 1]}`;
}

async function sharedVersionFromLock(ctx, repo, ref) {
  const lock = await ctx.fetchComponentJson(repo, ref, 'package-lock.json');
  return lock?.packages?.['node_modules/@selfhelp/shared']?.version;
}

function parseMaybeJson(raw, label) {
  if (!raw) return undefined;
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`Input "${label}" is not valid JSON.`);
  }
}

function prune(obj) {
  for (const k of Object.keys(obj)) if (obj[k] === undefined) delete obj[k];
  return obj;
}

// ---------------------------------------------------------------------------
// Real IO context (GitHub API + GHCR; anonymous-friendly, token-aware)
// ---------------------------------------------------------------------------

export function realCtx({ owner = 'humdek-unibe-ch', token = process.env.GITHUB_TOKEN } = {}) {
  const apiHeaders = {
    'user-agent': 'selfhelp-registry-resolver',
    accept: 'application/vnd.github+json',
    ...(token ? { authorization: `Bearer ${token}` } : {}),
  };
  return {
    owner,
    registry: JSON.parse(readFileSync(path.join(ROOT, 'registry.json'), 'utf8')),

    async loadRelease(releaseUrl) {
      return JSON.parse(readFileSync(path.join(ROOT, releaseUrl), 'utf8'));
    },

    async branchExists(branch) {
      // The local checkout exists in CI; prefer the API so the answer covers
      // remote branches even on a shallow clone.
      const res = await fetch(
        `https://api.github.com/repos/${owner}/sh2-plugin-registry/branches/${encodeURIComponent(branch)}`,
        { headers: apiHeaders },
      );
      return res.status === 200;
    },

    async resolveImageDigest(image) {
      const m = /^ghcr\.io\/([^:]+):(.+)$/.exec(image);
      if (!m) throw new Error(`Unsupported image ref: ${image}`);
      const [, repoPath, tag] = m;
      const tokenRes = await fetch(`https://ghcr.io/token?scope=repository:${repoPath}:pull`);
      if (!tokenRes.ok) return null;
      const { token: pull } = await tokenRes.json();
      const res = await fetch(`https://ghcr.io/v2/${repoPath}/manifests/${tag}`, {
        method: 'HEAD',
        headers: {
          authorization: `Bearer ${pull}`,
          accept:
            'application/vnd.oci.image.index.v1+json, application/vnd.docker.distribution.manifest.list.v2+json, application/vnd.docker.distribution.manifest.v2+json, application/vnd.oci.image.manifest.v1+json',
        },
      });
      if (!res.ok) return null;
      return res.headers.get('docker-content-digest');
    },

    async fetchComponentJson(repo, ref, file) {
      const res = await fetch(
        `https://raw.githubusercontent.com/${owner}/${repo}/${encodeURIComponent(ref)}/${file}`,
        { headers: token ? { authorization: `Bearer ${token}` } : {} },
      );
      if (!res.ok) return null;
      return res.json();
    },

    async listMigrationClasses(repo, ref) {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/migrations?ref=${encodeURIComponent(ref)}`,
        { headers: apiHeaders },
      );
      if (!res.ok) return null;
      const entries = await res.json();
      return entries
        .map((e) => e.name)
        .filter((n) => /^Version\d+\.php$/.test(n))
        .map((n) => n.replace(/\.php$/, ''));
    },

    async listTags(repo) {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/tags?per_page=20`, {
        headers: apiHeaders,
      });
      if (!res.ok) return [];
      const tags = await res.json();
      return tags.map((t) => t.name);
    },
  };
}

// ---------------------------------------------------------------------------
// CLI entry
// ---------------------------------------------------------------------------

function setOutput(name, value) {
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}\n`);
  process.stdout.write(`${name}=${value}\n`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const mode = process.env.RESOLVE_MODE || 'candidate';
  const ctx = realCtx({ owner: process.env.RESOLVE_IMAGE_OWNER || 'humdek-unibe-ch' });
  try {
    if (mode === 'plan') {
      const eventName = process.env.GITHUB_EVENT_NAME || 'schedule';
      const event =
        process.env.GITHUB_EVENT_PATH && existsSync(process.env.GITHUB_EVENT_PATH)
          ? JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'))
          : {};
      const candidates = planFromEvent(eventName, event) ?? (await planReconcile(ctx));
      process.stderr.write(`planned ${candidates.length} candidate(s): ${JSON.stringify(candidates)}\n`);
      setOutput('candidates', JSON.stringify(candidates));
      setOutput('count', String(candidates.length));
    } else {
      const candidate = JSON.parse(process.env.CANDIDATE_JSON || '{}');
      const result = await resolveCandidate(candidate, ctx);
      for (const r of result.reasons) process.stderr.write(`${result.status}: ${r}\n`);
      setOutput('status', result.status);
      if (result.status === 'ready') {
        setOutput('publish_kind', result.publish.kind);
        setOutput('publish_version', result.publish.version);
        setOutput('publish_channel', result.publish.channel);
        setOutput('publish_digests', JSON.stringify(result.publish.digests));
        setOutput('publish_metadata', JSON.stringify(result.publish.metadata));
        setOutput('publish_seed_from', result.publish.seedFrom ?? '');
      } else if (result.status === 'duplicate') {
        process.stderr.write('Nothing to do — candidate already published or staged.\n');
      } else {
        process.exitCode = 1; // visible failure: incompatible / missing / digest mismatch / error
      }
    }
  } catch (err) {
    process.stderr.write(`resolve-core-candidate.mjs: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(1);
  }
}
