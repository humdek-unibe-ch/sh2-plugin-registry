#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * Unified registry validation.
 *
 * 1. Validates registry.json + every referenced core/frontend release file +
 *    trusted-keys.json + advisories.json against their JSON Schemas.
 * 2. Verifies each signed core/frontend release's Ed25519 signature against the
 *    trusted keys, using the SAME canonical-JSON form as sign.mjs / the host
 *    SignedPayloadBuilder / the manager's @shm/registry.
 *
 * This is the registry half of the "schema validation / signature / checksum"
 * gate. Run via `npm run validate:unified`.
 */
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const require = createRequire(import.meta.url);
const sodium = require('libsodium-wrappers');
await sodium.ready;

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const errors = [];

function loadJson(rel) {
  return JSON.parse(readFileSync(path.join(root, rel), 'utf8'));
}

// Compile each schema at most once: the multi-version plugins[] reuses
// plugin-release.schema.json for every version, and ajv refuses to register the
// same $id twice.
const compiledByFile = new Map();
function validate(schemaFile, dataFile, data) {
  let fn = compiledByFile.get(schemaFile);
  if (!fn) {
    fn = ajv.compile(loadJson(schemaFile));
    compiledByFile.set(schemaFile, fn);
  }
  if (!fn(data ?? loadJson(dataFile))) {
    for (const e of fn.errors ?? []) errors.push(`${dataFile}: ${e.instancePath || '(root)'} ${e.message}`);
    return false;
  }
  console.log(`schema ok    ${dataFile}`);
  return true;
}

// ---- canonical form (byte-identical to sign.mjs / @shm/registry) ----
function canonicalStringify(value) {
  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number') return JSON.stringify(value);
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (Array.isArray(value)) return '[' + value.map(canonicalStringify).join(',') + ']';
  if (typeof value === 'object') {
    const keys = Object.keys(value).sort();
    return '{' + keys.map((k) => JSON.stringify(k) + ':' + canonicalStringify(value[k])).join(',') + '}';
  }
  throw new Error(`Unsupported value: ${typeof value}`);
}

function sha256Hex(s) {
  return createHash('sha256').update(Buffer.from(s, 'utf8')).digest('hex');
}

function verifyRelease(release, dataFile, trustedKeys) {
  const security = release.security ?? {};
  const key = trustedKeys.keys.find((k) => k.keyId === security.keyId && k.status === 'active');
  if (!key) {
    errors.push(`${dataFile}: no active trusted key for keyId "${security.keyId}"`);
    return;
  }
  const clone = { ...release };
  delete clone.security;
  const payload = security.signedPayload && security.signedPayload !== '' ? security.signedPayload : canonicalStringify(clone);

  if (security.signedPayloadSha256) {
    const want = String(security.signedPayloadSha256).toLowerCase().replace(/^sha256:/, '');
    if (want !== sha256Hex(payload)) {
      errors.push(`${dataFile}: signedPayloadSha256 does not match canonical payload`);
      return;
    }
  }
  const ok = sodium.crypto_sign_verify_detached(
    new Uint8Array(Buffer.from(security.signature, 'base64')),
    new Uint8Array(Buffer.from(payload, 'utf8')),
    new Uint8Array(Buffer.from(key.publicKey, 'base64')),
  );
  if (!ok) errors.push(`${dataFile}: Ed25519 signature verification failed`);
  else console.log(`signature ok ${dataFile} (${security.keyId})`);
}

const registry = loadJson('registry.json');
validate('registry.schema.json', 'registry.json', registry);

const trustedKeys = loadJson('keys/trusted-keys.json');
validate('trusted-keys.schema.json', 'keys/trusted-keys.json', trustedKeys);
validate('advisory-feed.schema.json', 'advisories.json');

for (const ref of registry.core ?? []) {
  const release = loadJson(ref.releaseUrl);
  if (validate('core-release.schema.json', ref.releaseUrl, release)) verifyRelease(release, ref.releaseUrl, trustedKeys);
}
for (const ref of registry.frontend ?? []) {
  const release = loadJson(ref.releaseUrl);
  if (validate('frontend-release.schema.json', ref.releaseUrl, release)) verifyRelease(release, ref.releaseUrl, trustedKeys);
}
for (const ref of registry.scheduler ?? []) {
  const release = loadJson(ref.releaseUrl);
  if (validate('scheduler-release.schema.json', ref.releaseUrl, release)) verifyRelease(release, ref.releaseUrl, trustedKeys);
}
for (const ref of registry.worker ?? []) {
  const release = loadJson(ref.releaseUrl);
  if (validate('worker-release.schema.json', ref.releaseUrl, release)) verifyRelease(release, ref.releaseUrl, trustedKeys);
}
// Plugin releases use the SAME release-ref -> signed-document contract as the
// platform components, so the backend/CMS installer consumes one registry.json.
// A plugin with several versions appears as several refs; each is validated
// against plugin-release.schema.json and Ed25519-verified here.
for (const ref of registry.plugins ?? []) {
  const release = loadJson(ref.releaseUrl);
  if (ref.id !== release.id || ref.version !== release.version) {
    errors.push(`${ref.releaseUrl}: index ref ${ref.id}@${ref.version} points at a release document for ${release.id}@${release.version}`);
    continue;
  }
  if (validate('plugin-release.schema.json', ref.releaseUrl, release)) verifyRelease(release, ref.releaseUrl, trustedKeys);
}

if (errors.length > 0) {
  console.error('\nUnified registry validation FAILED:');
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}
console.log('\nUnified registry validates and all signed releases verify.');
