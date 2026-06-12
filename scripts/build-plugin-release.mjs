#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * `build-plugin-release.mjs` — build an UNSIGNED plugin release document from a
 * plugin `plugin.json` manifest + its published `.shplugin` artifact.
 *
 * This is the plugin sibling of `assemble-release.mjs` (which builds platform
 * core/frontend/scheduler/worker releases). It is the first half of the plugin
 * publish flow under the UNIFIED registry contract:
 *
 *     build-plugin-release.mjs  ->  sign-release.mjs  ->  validate:unified  ->  registry.json
 *     (this script)                 (adds `security`)     (schema+signature)    (add the ref)
 *
 * It maps the author-facing manifest axes onto the release axes (the resolved
 * cross-repo naming): manifest `compatibility.selfhelp` -> release
 * `compatibility.core`; manifest `pluginApiVersion` -> release
 * `compatibility.pluginApi` (a `>=x.y.0 <x.(y+1).0` range for 0.x, `>=x.y.z
 * <(x+1).0.0` for >=1.0); manifest `security.trustLevel === "official"` ->
 * release `official`. The `security` block is deliberately left to
 * `sign-release.mjs` so the canonical payload that gets signed is exactly the
 * document this script emits. The output is validated against
 * `plugin-release.schema.json` (with `security` treated as not-yet-present).
 *
 * Inputs:
 *   --manifest <path>        plugin.json (required)
 *   --archive-sha256 <hex>   sha256 of the .shplugin (required; `sha256:` ok)
 *   --base-url <https://.../> registry base URL (default: registry.json baseUrl)
 *   --archive-url <url>       override artifacts.archiveUrl (default: <base>/artifacts/<id>-<ver>.shplugin)
 *   --manifest-url <url>      override artifacts.manifestUrl (default: <base>/manifests/<id>-<ver>.json)
 *   --channel <name>         stable (default) | beta | nightly | test
 *   --released-at <iso>      publish timestamp (default: now, ISO-8601)
 *   --out <path>             write here (default: stdout)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHANNELS = ['stable', 'beta', 'nightly', 'test'];

/**
 * Derive the plugin-API compatibility RANGE from a single declared
 * `pluginApiVersion`. Pre-1.0 every MINOR is breaking (SemVer caret on 0.x),
 * so `0.1.0` -> `>=0.1.0 <0.2.0`; `1.2.3` -> `>=1.2.3 <2.0.0`.
 */
export function pluginApiRange(version) {
  const m = /^(\d+)\.(\d+)\.(\d+)/.exec(String(version));
  if (!m) throw new Error(`pluginApiVersion "${version}" is not a semver.`);
  const major = Number(m[1]);
  const minor = Number(m[2]);
  const patch = Number(m[3]);
  if (major === 0) return `>=${major}.${minor}.${patch} <${major}.${minor + 1}.0`;
  return `>=${major}.${minor}.${patch} <${major + 1}.0.0`;
}

/**
 * Map a plugin manifest -> an UNSIGNED plugin release document. Pure (no IO),
 * so a test can assert the mapping without touching the filesystem.
 */
export function buildPluginRelease(manifest, { channel = 'stable', archiveSha256, baseUrl, archiveUrl, manifestUrl, releasedAt } = {}) {
  if (!manifest || typeof manifest !== 'object') throw new Error('manifest must be an object.');
  const id = manifest.id;
  const version = manifest.version;
  if (!id || !version) throw new Error('plugin.json missing id or version.');
  if (!CHANNELS.includes(channel)) throw new Error(`channel must be one of: ${CHANNELS.join(', ')} (got ${channel}).`);
  const core = manifest?.compatibility?.selfhelp;
  if (!core) throw new Error('plugin.json missing compatibility.selfhelp.');
  if (!manifest.pluginApiVersion) throw new Error('plugin.json missing pluginApiVersion.');
  const sha = normaliseSha(archiveSha256);

  const base = normaliseBaseUrl(baseUrl);
  const resolvedArchiveUrl = archiveUrl || join(base, `artifacts/${id}-${version}.shplugin`);
  const resolvedManifestUrl = manifestUrl || join(base, `manifests/${id}-${version}.json`);

  const release = {
    kind: 'selfhelp-plugin-release',
    id,
    version,
    releasedAt: typeof releasedAt === 'string' && releasedAt !== '' ? releasedAt : new Date().toISOString(),
    channel,
    official: manifest?.security?.trustLevel === 'official',
    compatibility: {
      core,
      pluginApi: pluginApiRange(manifest.pluginApiVersion),
    },
    dependencies: {
      plugins: mapDependencies(manifest.dependencies),
    },
    artifacts: {
      manifestUrl: resolvedManifestUrl,
      archiveUrl: resolvedArchiveUrl,
      sha256: `sha256:${sha}`,
    },
  };

  validateUnsigned(release);
  return release;
}

function mapDependencies(deps) {
  if (!Array.isArray(deps)) return [];
  const out = [];
  for (const d of deps) {
    if (!d || typeof d !== 'object') continue;
    const id = d.id ?? d.pluginId;
    const range = d.range ?? d.version;
    if (typeof id === 'string' && id !== '' && typeof range === 'string' && range !== '') {
      out.push({ id, range });
    }
  }
  return out;
}

function normaliseSha(value) {
  if (typeof value !== 'string' || value === '') throw new Error('--archive-sha256 is required.');
  const hex = value.toLowerCase().replace(/^sha256:/, '');
  if (!/^[a-f0-9]{64}$/.test(hex)) throw new Error(`--archive-sha256 must be a 64-char hex digest (got "${value}").`);
  return hex;
}

function normaliseBaseUrl(baseUrl) {
  const candidate = typeof baseUrl === 'string' && baseUrl !== '' ? baseUrl : readRegistryBaseUrl();
  if (typeof candidate !== 'string' || !/^https?:\/\//i.test(candidate)) {
    throw new Error('Could not determine an absolute registry base URL. Pass --base-url <https://.../> or set baseUrl in registry.json.');
  }
  return candidate.endsWith('/') ? candidate : `${candidate}/`;
}

function readRegistryBaseUrl() {
  try {
    const registry = JSON.parse(readFileSync(path.join(ROOT, 'registry.json'), 'utf8'));
    return typeof registry.baseUrl === 'string' ? registry.baseUrl : null;
  } catch {
    return null;
  }
}

function join(base, rel) {
  return `${base.endsWith('/') ? base : `${base}/`}${rel.startsWith('/') ? rel.slice(1) : rel}`;
}

function validateUnsigned(release) {
  const schema = JSON.parse(readFileSync(path.join(ROOT, 'plugin-release.schema.json'), 'utf8'));
  // sign-release.mjs adds `security` afterwards, so validate everything else.
  if (Array.isArray(schema.required)) schema.required = schema.required.filter((r) => r !== 'security');
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  const fn = ajv.compile(schema);
  if (!fn(release)) {
    const detail = (fn.errors ?? []).map((e) => ` - ${e.instancePath || '(root)'} ${e.message}`).join('\n');
    throw new Error(`assembled plugin release failed schema validation:\n${detail}`);
  }
}

function parseArgs(rest) {
  const out = { _: [] };
  for (let i = 0; i < rest.length; i++) {
    const tok = rest[i];
    if (tok.startsWith('--')) {
      const k = tok.slice(2);
      const v = rest[i + 1] && !rest[i + 1].startsWith('--') ? rest[++i] : true;
      out[k] = v;
    } else {
      out._.push(tok);
    }
  }
  return out;
}

function str(v) {
  return typeof v === 'string' && v !== '' ? v : undefined;
}

// CLI entrypoint (skipped when imported by a test).
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  try {
    const args = parseArgs(process.argv.slice(2));
    const manifestPath = str(args.manifest);
    if (!manifestPath) throw new Error('--manifest <plugin.json> is required.');
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    const release = buildPluginRelease(manifest, {
      channel: str(args.channel) || 'stable',
      archiveSha256: str(args['archive-sha256']),
      baseUrl: str(args['base-url']),
      archiveUrl: str(args['archive-url']),
      manifestUrl: str(args['manifest-url']),
      releasedAt: str(args['released-at']),
    });
    const out = JSON.stringify(release, null, 2) + '\n';
    if (args.out) {
      writeFileSync(String(args.out), out, 'utf8');
      process.stderr.write(`assembled plugin release ${release.id} ${release.version} -> ${args.out} (unsigned; run sign-release.mjs next)\n`);
    } else {
      process.stdout.write(out);
    }
  } catch (err) {
    process.stderr.write(`build-plugin-release.mjs: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(1);
  }
}
