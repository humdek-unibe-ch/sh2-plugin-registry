#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * `assemble-release.mjs` — build an UNSIGNED platform release document
 * (`core` / `frontend` / `scheduler` / `worker`) from image references,
 * digests, and compatibility inputs.
 *
 * This is the first half of the platform-release publish flow:
 *
 *     assemble-release.mjs  ->  sign-release.mjs  ->  validate:unified  ->  registry.json
 *     (this script)             (adds `security`)     (full schema +        (add the ref)
 *                                                       signature gate)
 *
 * It deliberately leaves the `security` block to `sign-release.mjs`, so the
 * canonical-JSON payload that gets signed is exactly the document this script
 * emits. The output is validated against the matching release schema (with
 * `security` treated as not-yet-present), so structural mistakes fail here
 * rather than at sign/verify time.
 *
 * Inputs (common):
 *   --kind core|frontend|scheduler|worker|mobile-preview   release kind (required)
 *   --version <semver>                       release version (required)
 *   --channel stable|beta|nightly|test       default: inherited / `stable`
 *   --id <id>                                default: selfhelp-<kind>-<version>
 *   --released-at <iso8601>                  default: now (every kind). A seeded
 *                                            releasedAt is inherited ONLY when
 *                                            re-assembling the SAME version —
 *                                            a new version always gets a fresh
 *                                            timestamp so the registry shows
 *                                            real publish dates.
 *   --from <release.json>                    seed unchanged fields from an
 *                                            existing release (its `security`
 *                                            block is dropped); flags override
 *   --out <path>                             write here (default: stdout)
 *
 * Core inputs:
 *   --backend-image / --backend-digest
 *   --worker-image  / --worker-digest
 *   --scheduler-image / --scheduler-digest
 *   --php <version>                          backend image PHP version
 *   --min-upgrade-from <semver>
 *   --plugin-api <version>
 *   --frontend-range <range>                 frontendCompatibility.requiredFrontendRange
 *   --migration-range <range>
 *   --destructive [true|false]               default: inherited / false
 *   --requires-backup [true|false]           default: inherited / true
 *   --manual-confirm [true|false]            default: inherited / false
 *   (the optional `runtime` block is carried forward verbatim from --from)
 *
 * Frontend / scheduler / worker / mobile-preview inputs:
 *   --image / --digest
 *   --required-core-range <range>
 *   --required-api-version <version>         (frontend: required; services: optional)
 *   --shared-package-version <version>       (frontend + mobile-preview: the
 *                                            @selfhelp/shared version the image was
 *                                            built with; overrides seeded builtFrom)
 *
 * Mobile-preview-only inputs (NOT image-derivable — normally seeded via --from
 * the descriptor the mobile repo emits):
 *   --mobile-renderer-version <semver>       mobile renderer contract version
 *   --react-native-version <semver>          React Native version in the image
 *   --expo-sdk-version <semver>              Expo SDK version in the image
 *   --bundled-plugins-file <json>            curated bundled-plugin set (array or
 *                                            {bundledPlugins:[...]}); overrides seed
 *
 * Example (a 0.2.0 core that mirrors 0.1.0 but with new images + migrations):
 *   node scripts/assemble-release.mjs --kind core --from releases/core/selfhelp-core-0.1.0.json \
 *     --version 0.2.0 --channel stable --min-upgrade-from 0.1.0 \
 *     --backend-image ghcr.io/humdek-unibe-ch/selfhelp-backend:0.2.0 --backend-digest sha256:... \
 *     --worker-image ghcr.io/humdek-unibe-ch/selfhelp-worker:0.2.0 --worker-digest sha256:... \
 *     --scheduler-image ghcr.io/humdek-unibe-ch/selfhelp-scheduler:0.2.0 --scheduler-digest sha256:... \
 *     --frontend-range ">=0.2.0 <0.3.0" --migration-range "Version...A..Version...B" \
 *     --out releases/core/selfhelp-core-0.2.0.json
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const KIND_MAP = {
  core: 'selfhelp-core-release',
  frontend: 'selfhelp-frontend-release',
  scheduler: 'selfhelp-scheduler-release',
  worker: 'selfhelp-worker-release',
  'mobile-preview': 'selfhelp-mobile-preview-release',
};

const SCHEMA_FILE = {
  'selfhelp-core-release': 'core-release.schema.json',
  'selfhelp-frontend-release': 'frontend-release.schema.json',
  'selfhelp-scheduler-release': 'scheduler-release.schema.json',
  'selfhelp-worker-release': 'worker-release.schema.json',
  'selfhelp-mobile-preview-release': 'mobile-preview-release.schema.json',
};

export function assembleRelease(kindArg, args, seedRaw = {}) {
  const kind = KIND_MAP[kindArg];
  if (!kind) throw new Error(`--kind must be one of: ${Object.keys(KIND_MAP).join(', ')}`);
  const seed = { ...seedRaw };
  delete seed.security; // never inherit a signature; sign-release.mjs re-signs.

  let body;
  if (kind === 'selfhelp-core-release') body = buildCore(args, seed);
  else if (kind === 'selfhelp-frontend-release') body = buildFrontend(args, seed);
  else if (kind === 'selfhelp-mobile-preview-release') body = buildMobilePreview(args, seed);
  else body = buildService(kind, args, seed);

  validateUnsigned(kind, body);
  return body;
}

/**
 * Publish timestamp for the assembled document. Explicit flag wins; a seeded
 * value is honoured only when the seed IS the same version being re-assembled
 * (re-sign / repair). Seeding a NEW version from an old release must NOT carry
 * the old date forward — that is how every 0.1.x core release ended up showing
 * the 0.1.0 publish date in the registry UI.
 */
function releasedAt(args, seed, version) {
  const explicit = str(args['released-at']);
  if (explicit) return explicit;
  if (seed.version === version && typeof seed.releasedAt === 'string' && seed.releasedAt !== '') {
    return seed.releasedAt;
  }
  return new Date().toISOString();
}

function buildCore(args, seed) {
  const version = required(args, 'version');
  return prune({
    kind: 'selfhelp-core-release',
    id: str(args.id) || `selfhelp-core-${version}`,
    version,
    channel: str(args.channel) || seed.channel || 'stable',
    releasedAt: releasedAt(args, seed, version),
    minimumDirectUpgradeFrom: str(args['min-upgrade-from']) || seed.minimumDirectUpgradeFrom,
    pluginApiVersion: str(args['plugin-api']) || seed.pluginApiVersion,
    backend: imageRef(args, 'backend', seed.backend, str(args.php) || seed.backend?.phpVersion),
    worker: imageRef(args, 'worker', seed.worker),
    scheduler: imageRef(args, 'scheduler', seed.scheduler),
    frontendCompatibility: {
      requiredFrontendRange: str(args['frontend-range']) || seed.frontendCompatibility?.requiredFrontendRange,
    },
    database: {
      migrationRange: str(args['migration-range']) || seed.database?.migrationRange,
      destructive: boolArg(args, 'destructive', seed.database?.destructive ?? false),
      requiresBackup: boolArg(args, 'requires-backup', seed.database?.requiresBackup ?? true),
      manualConfirmationRequired: boolArg(args, 'manual-confirm', seed.database?.manualConfirmationRequired ?? false),
      ...(seed.database?.minimumSafeRollbackPoint ? { minimumSafeRollbackPoint: seed.database.minimumSafeRollbackPoint } : {}),
      ...(seed.database?.automaticRollback ? { automaticRollback: seed.database.automaticRollback } : {}),
    },
    ...(seed.runtime ? { runtime: seed.runtime } : {}),
    ...(seed.artifacts ? { artifacts: seed.artifacts } : {}),
  });
}

function buildFrontend(args, seed) {
  const version = required(args, 'version');
  // builtFrom is informational build provenance; a seeded value must not
  // survive when the new image was built with a different @selfhelp/shared.
  const builtFrom = { ...(seed.builtFrom ?? {}) };
  const sharedPackageVersion = str(args['shared-package-version']);
  if (sharedPackageVersion) builtFrom.sharedPackageVersion = sharedPackageVersion;
  return prune({
    kind: 'selfhelp-frontend-release',
    id: str(args.id) || `selfhelp-frontend-${version}`,
    version,
    channel: str(args.channel) || seed.channel || 'stable',
    releasedAt: releasedAt(args, seed, version),
    image: str(args.image) || seed.image,
    digest: str(args.digest) || seed.digest,
    ...(Object.keys(builtFrom).length ? { builtFrom } : {}),
    backendCompatibility: {
      requiredCoreRange: str(args['required-core-range']) || seed.backendCompatibility?.requiredCoreRange,
      requiredApiVersion: str(args['required-api-version']) || seed.backendCompatibility?.requiredApiVersion,
    },
  });
}

/**
 * Mobile-preview release: the frontend image shape PLUS the mobile renderer
 * contract version + the curated bundled-plugin set. `mobileRendererVersion`
 * and `bundledPlugins` are NOT image-derivable, so the normal flow seeds them
 * from the descriptor the mobile repo emits (`--from mobile-preview-release.json`);
 * `--mobile-renderer-version` and `--bundled-plugins-file <json>` override.
 */
function buildMobilePreview(args, seed) {
  const version = required(args, 'version');
  const builtFrom = { ...(seed.builtFrom ?? {}) };
  const sharedPackageVersion = str(args['shared-package-version']);
  if (sharedPackageVersion) builtFrom.sharedPackageVersion = sharedPackageVersion;

  let bundledPlugins = Array.isArray(seed.bundledPlugins) ? seed.bundledPlugins : [];
  const bundledFile = str(args['bundled-plugins-file']);
  if (bundledFile) {
    const parsed = JSON.parse(readFileSync(bundledFile, 'utf8'));
    bundledPlugins = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.bundledPlugins) ? parsed.bundledPlugins : bundledPlugins);
  }

  return prune({
    kind: 'selfhelp-mobile-preview-release',
    id: str(args.id) || `selfhelp-mobile-preview-${version}`,
    version,
    channel: str(args.channel) || seed.channel || 'stable',
    releasedAt: releasedAt(args, seed, version),
    image: str(args.image) || seed.image,
    digest: str(args.digest) || seed.digest,
    ...(Object.keys(builtFrom).length ? { builtFrom } : {}),
    backendCompatibility: {
      requiredCoreRange: str(args['required-core-range']) || seed.backendCompatibility?.requiredCoreRange,
      requiredApiVersion: str(args['required-api-version']) || seed.backendCompatibility?.requiredApiVersion,
    },
    mobileRendererVersion: str(args['mobile-renderer-version']) || seed.mobileRendererVersion,
    // RN/Expo are canonical TOP-LEVEL fields, but tolerate a seed descriptor
    // that only carried them under `builtFrom` (older mobile-repo emitters): the
    // flag wins, then the seed's top-level value, then the builtFrom provenance.
    // Without this fallback the MANUAL `--from <descriptor>` publish path would
    // silently drop them and the manager's plugin gate would falsely block any
    // plugin declaring compatibility.reactNative / compatibility.expoSdk.
    reactNativeVersion:
      str(args['react-native-version']) || seed.reactNativeVersion || str(seed.builtFrom?.reactNative),
    expoSdkVersion: str(args['expo-sdk-version']) || seed.expoSdkVersion || str(seed.builtFrom?.expoSdk),
    bundledPlugins,
  });
}

function buildService(kind, args, seed) {
  const version = required(args, 'version');
  const idPrefix = kind === 'selfhelp-scheduler-release' ? 'scheduler' : 'worker';
  const requiredApiVersion = str(args['required-api-version']) || seed.backendCompatibility?.requiredApiVersion;
  return prune({
    kind,
    id: str(args.id) || `selfhelp-${idPrefix}-${version}`,
    version,
    channel: str(args.channel) || seed.channel || 'stable',
    releasedAt: releasedAt(args, seed, version),
    image: str(args.image) || seed.image,
    digest: str(args.digest) || seed.digest,
    ...(seed.builtFrom ? { builtFrom: seed.builtFrom } : {}),
    backendCompatibility: prune({
      requiredCoreRange: str(args['required-core-range']) || seed.backendCompatibility?.requiredCoreRange,
      requiredApiVersion,
    }),
  });
}

function imageRef(args, prefix, seedRef = {}, phpVersion) {
  const image = str(args[`${prefix}-image`]) || seedRef.image;
  const digest = str(args[`${prefix}-digest`]) || seedRef.digest;
  const ref = { image, digest };
  if (prefix === 'backend' && (phpVersion || seedRef.phpVersion)) ref.phpVersion = phpVersion || seedRef.phpVersion;
  return prune(ref);
}

function validateUnsigned(kind, body) {
  const schema = JSON.parse(readFileSync(path.join(ROOT, SCHEMA_FILE[kind]), 'utf8'));
  // The unsigned document has no `security` block yet (sign-release.mjs adds it),
  // so validate everything else against the canonical schema.
  if (Array.isArray(schema.required)) schema.required = schema.required.filter((r) => r !== 'security');
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  const fn = ajv.compile(schema);
  if (!fn(body)) {
    const detail = (fn.errors ?? []).map((e) => ` - ${e.instancePath || '(root)'} ${e.message}`).join('\n');
    throw new Error(`assembled ${kind} failed schema validation:\n${detail}`);
  }
}

/** Drops keys whose value is undefined so JSON output stays clean + deterministic. */
function prune(obj) {
  for (const k of Object.keys(obj)) if (obj[k] === undefined) delete obj[k];
  return obj;
}

function str(v) {
  return typeof v === 'string' && v !== '' ? v : undefined;
}

function boolArg(args, key, fallback) {
  const v = args[key];
  if (v === undefined) return fallback;
  if (v === true) return true;
  if (typeof v === 'string') return v.toLowerCase() === 'true';
  return fallback;
}

function required(args, key) {
  const v = str(args[key]);
  if (!v) throw new Error(`--${key} is required.`);
  return v;
}

export function parseArgs(rest) {
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

// CLI entrypoint (skipped when imported by a test).
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  try {
    const args = parseArgs(process.argv.slice(2));
    const kindArg = required(args, 'kind');
    const seed = args.from ? JSON.parse(readFileSync(String(args.from), 'utf8')) : {};
    const body = assembleRelease(kindArg, args, seed);
    const out = JSON.stringify(body, null, 2) + '\n';
    if (args.out) {
      writeFileSync(String(args.out), out, 'utf8');
      process.stderr.write(`assembled ${body.kind} ${body.version} -> ${args.out} (unsigned; run sign-release.mjs next)\n`);
    } else {
      process.stdout.write(out);
    }
  } catch (err) {
    process.stderr.write(`assemble-release.mjs: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(1);
  }
}
