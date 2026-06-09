#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * `add-release-ref.mjs` — insert (or replace) a platform release reference in
 * `registry.json` so the manager can discover the new core/frontend/scheduler/
 * worker release and `validate:unified` validates + re-verifies it.
 *
 * Idempotent: a ref with the same `id` is replaced in place; otherwise the ref
 * is appended to the matching top-level array (`core` / `frontend` /
 * `scheduler` / `worker`). The array is created if missing.
 *
 * Usage:
 *   node scripts/add-release-ref.mjs --kind core --id selfhelp-core-8.1.0 \
 *     --version 8.1.0 --channel stable --release-url releases/core/selfhelp-core-8.1.0.json
 *   node scripts/add-release-ref.mjs ... --registry registry.json   # default registry.json
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const VALID_KINDS = ['core', 'frontend', 'scheduler', 'worker', 'plugins'];

/**
 * Insert or replace `ref` in the `registry[kind]` array.
 *
 * Platform kinds (core/frontend/scheduler/worker) carry the version IN the id
 * (`selfhelp-core-8.1.0`) and publish one ref per version, so they match by id.
 * `plugins` is MULTI-VERSION: a plugin id (`sh2-shp-survey-js`) appears once per
 * published version, so it matches by id + version (a new version is appended,
 * an existing id+version is replaced in place). Mutates and returns the registry.
 */
export function addReleaseRef(registry, kind, ref) {
  if (!VALID_KINDS.includes(kind)) throw new Error(`kind must be one of: ${VALID_KINDS.join(', ')}`);
  for (const field of ['id', 'version', 'channel', 'releaseUrl']) {
    if (!ref[field]) throw new Error(`ref.${field} is required.`);
  }
  if (!Array.isArray(registry[kind])) registry[kind] = [];
  const arr = registry[kind];
  const next = { id: ref.id, version: ref.version, channel: ref.channel, releaseUrl: ref.releaseUrl };
  if (ref.blocked !== undefined) next.blocked = ref.blocked;
  const idx = kind === 'plugins'
    ? arr.findIndex((r) => r.id === ref.id && r.version === ref.version)
    : arr.findIndex((r) => r.id === ref.id);
  if (idx >= 0) arr[idx] = next;
  else arr.push(next);
  return registry;
}

function parseArgs(rest) {
  const out = { _: [] };
  for (let i = 0; i < rest.length; i++) {
    const tok = rest[i];
    if (tok.startsWith('--')) {
      const k = tok.slice(2);
      const v = rest[i + 1] && !rest[i + 1].startsWith('--') ? rest[++i] : true;
      out[k] = v;
    } else out._.push(tok);
  }
  return out;
}

function required(args, key) {
  const v = args[key];
  if (typeof v !== 'string' || v === '') throw new Error(`--${key} is required.`);
  return v;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  try {
    const args = parseArgs(process.argv.slice(2));
    const kind = required(args, 'kind');
    const registryPath = typeof args.registry === 'string' ? args.registry : path.join(ROOT, 'registry.json');
    const registry = JSON.parse(readFileSync(registryPath, 'utf8'));
    addReleaseRef(registry, kind, {
      id: required(args, 'id'),
      version: required(args, 'version'),
      channel: required(args, 'channel'),
      releaseUrl: required(args, 'release-url'),
    });
    writeFileSync(registryPath, JSON.stringify(registry, null, 4) + '\n', 'utf8');
    process.stderr.write(`registry.json updated: ${kind} ${args.id}\n`);
  } catch (err) {
    process.stderr.write(`add-release-ref.mjs: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(1);
  }
}
