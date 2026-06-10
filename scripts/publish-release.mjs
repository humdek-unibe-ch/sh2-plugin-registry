#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * `publish-release.mjs` — the orchestrator behind `.github/workflows/publish-core-release.yml`.
 *
 * Reads grouped inputs from the environment (so workflow_dispatch stays within
 * GitHub's input cap), then runs the full local publish chain:
 *
 *   1. assemble    -> releases/<kind>/selfhelp-<kind>-<version>.json (unsigned)
 *   2. sign        -> sign-release.mjs with the PRODUCTION key from env
 *   3. add ref     -> registry.json (so validate:unified covers the new release)
 *
 * It NEVER commits, pushes, or publishes. The workflow opens a reviewed PR; a
 * human merges it, and only then does GitHub Pages republish. Run
 * `validate:unified` + `guard:trust` after this script (the workflow does).
 *
 * Environment inputs:
 *   PUBLISH_KIND          core | frontend | scheduler | worker   (required)
 *   PUBLISH_VERSION       semver                                  (required)
 *   PUBLISH_CHANNEL       stable | beta | nightly | test          (default stable)
 *   PUBLISH_SEED_FROM     release file to seed unchanged fields   (optional)
 *   PUBLISH_DIGESTS       JSON; core: {"backend","worker","scheduler"};
 *                         others: {"image"}                       (required)
 *   PUBLISH_METADATA      JSON; core: {minUpgradeFrom, pluginApi, frontendRange,
 *                         migrationRange, destructive, requiresBackup,
 *                         manualConfirm, php}; services: {requiredCoreRange,
 *                         requiredApiVersion}                      (optional)
 *   PUBLISH_IMAGE_OWNER   ghcr owner for image tags               (default humdek-unibe-ch)
 *   SELFHELP_PLUGIN_SIGNING_KEY / _ID   production Ed25519 key + id (set by CI secret)
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { assembleRelease } from './assemble-release.mjs';
import { addReleaseRef } from './add-release-ref.mjs';

const SCRIPTS = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(SCRIPTS, '..');

/**
 * Pure: translate the grouped publish inputs into the flag map that
 * assemble-release.mjs consumes. Exported so a dry-run test can prove the
 * workflow produces a schema-valid release without any file IO or signing.
 */
export function buildPublishArgs({ kind, version, channel, digests = {}, metadata = {}, owner = 'humdek-unibe-ch' }) {
  if (!version) throw new Error('version is required.');
  const tag = (svc) => `ghcr.io/${owner}/selfhelp-${svc}:${version}`;
  const base = { kind, version, ...(channel ? { channel } : {}) };
  if (kind === 'core') {
    return prune({
      ...base,
      'backend-image': tag('backend'),
      'backend-digest': digests.backend,
      'worker-image': tag('worker'),
      'worker-digest': digests.worker,
      'scheduler-image': tag('scheduler'),
      'scheduler-digest': digests.scheduler,
      'min-upgrade-from': metadata.minUpgradeFrom,
      'plugin-api': metadata.pluginApi,
      'frontend-range': metadata.frontendRange,
      'migration-range': metadata.migrationRange,
      php: metadata.php,
      destructive: boolStr(metadata.destructive),
      'requires-backup': boolStr(metadata.requiresBackup),
      'manual-confirm': boolStr(metadata.manualConfirm),
    });
  }
  if (kind === 'frontend' || kind === 'scheduler' || kind === 'worker') {
    return prune({
      ...base,
      image: tag(kind),
      digest: digests.image,
      'required-core-range': metadata.requiredCoreRange,
      'required-api-version': metadata.requiredApiVersion,
    });
  }
  throw new Error('PUBLISH_KIND must be one of: core, frontend, scheduler, worker');
}

function boolStr(v) {
  return v === undefined ? undefined : String(!!v);
}

function prune(obj) {
  for (const k of Object.keys(obj)) if (obj[k] === undefined) delete obj[k];
  return obj;
}

function envJson(name) {
  const raw = process.env[name];
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`${name} is not valid JSON.`);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  try {
    const kind = req('PUBLISH_KIND');
    const version = req('PUBLISH_VERSION');
    const channel = process.env.PUBLISH_CHANNEL || 'stable';
    const seedFrom = process.env.PUBLISH_SEED_FROM || '';
    const owner = process.env.PUBLISH_IMAGE_OWNER || 'humdek-unibe-ch';
    const digests = envJson('PUBLISH_DIGESTS');
    const metadata = envJson('PUBLISH_METADATA');

    const args = buildPublishArgs({ kind, version, channel, digests, metadata, owner });
    const seed = seedFrom ? JSON.parse(readFileSync(seedFrom, 'utf8')) : {};
    const body = assembleRelease(kind, args, seed);

    const releaseUrl = `releases/${kind}/selfhelp-${kind}-${version}.json`;
    const outPath = path.join(ROOT, releaseUrl);
    writeFileSync(outPath, JSON.stringify(body, null, 2) + '\n', 'utf8');
    process.stderr.write(`assembled ${releaseUrl}\n`);

    // Sign with the production key (sign-release.mjs reads SELFHELP_PLUGIN_SIGNING_KEY/_ID from env).
    execFileSync('node', [path.join(SCRIPTS, 'sign-release.mjs'), '--input', outPath], {
      stdio: 'inherit',
      env: process.env,
    });

    const registryPath = path.join(ROOT, 'registry.json');
    const registry = JSON.parse(readFileSync(registryPath, 'utf8'));
    addReleaseRef(registry, kind, { id: body.id, version, channel: body.channel, releaseUrl });
    writeFileSync(registryPath, JSON.stringify(registry, null, 4) + '\n', 'utf8');
    process.stderr.write(`registry.json updated with ${body.id}\n`);
  } catch (err) {
    process.stderr.write(`publish-release.mjs: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(1);
  }
}

function req(name) {
  const v = process.env[name];
  if (!v) throw new Error(`${name} is required.`);
  return v;
}
