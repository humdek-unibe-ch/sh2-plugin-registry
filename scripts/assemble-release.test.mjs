/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * Unit coverage for assemble-release.mjs: every kind must assemble into a
 * document that, once signed with sign-release.mjs (dev fixture key), passes
 * its full release schema AND Ed25519-verifies — the exact canonical chain the
 * real publish flow uses (assemble -> sign -> validate:unified). The dev
 * fixture key is intentionally NOT in keys/trusted-keys.json (only `prod` is),
 * so the test re-derives its public half from the deterministic seed and also
 * locks in that fixture-signed documents are never production-trusted.
 */
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { createRequire } from 'node:module';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { assembleRelease, parseArgs } from './assemble-release.mjs';

const require = createRequire(import.meta.url);
const sodium = require('libsodium-wrappers');

const SCRIPTS = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(SCRIPTS, '..');
const trustedKeys = JSON.parse(readFileSync(path.join(ROOT, 'keys', 'trusted-keys.json'), 'utf8'));

// The deterministic dev fixture key sign-release.mjs falls back to (tweetnacl
// derivation, same as the signer). Public half only; nothing secret.
const nacl = require('tweetnacl');
const DEV_KEY_ID = 'selfhelp-dev-fixture';
const devSeed = createHash('sha256').update('selfhelp-dev-registry-signing-key-v1').digest();
const devPublicKeyB64 = Buffer.from(nacl.sign.keyPair.fromSeed(new Uint8Array(devSeed)).publicKey).toString('base64');

function canonicalStringify(value) {
  if (value === null) return 'null';
  if (typeof value === 'string' || typeof value === 'number') return JSON.stringify(value);
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (Array.isArray(value)) return '[' + value.map(canonicalStringify).join(',') + ']';
  if (typeof value === 'object') {
    const keys = Object.keys(value).sort();
    return '{' + keys.map((k) => JSON.stringify(k) + ':' + canonicalStringify(value[k])).join(',') + '}';
  }
  throw new Error(`Unsupported value: ${typeof value}`);
}

function schemaFor(kind) {
  const file = {
    'selfhelp-core-release': 'core-release.schema.json',
    'selfhelp-frontend-release': 'frontend-release.schema.json',
    'selfhelp-scheduler-release': 'scheduler-release.schema.json',
    'selfhelp-worker-release': 'worker-release.schema.json',
    'selfhelp-mobile-preview-release': 'mobile-preview-release.schema.json',
  }[kind];
  return JSON.parse(readFileSync(path.join(ROOT, file), 'utf8'));
}

/** Sign an unsigned release with the deterministic dev key + validate + verify. */
function signValidateVerify(body) {
  const tmp = mkdtempSync(path.join(tmpdir(), 'assemble-rel-'));
  try {
    const file = path.join(tmp, 'release.json');
    writeFileSync(file, JSON.stringify(body, null, 2) + '\n', 'utf8');
    // sign-release.mjs with no key env uses the committed deterministic dev key.
    execFileSync('node', [path.join(SCRIPTS, 'sign-release.mjs'), '--input', file], { stdio: 'pipe' });
    const signed = JSON.parse(readFileSync(file, 'utf8'));

    const ajv = new Ajv({ allErrors: true, strict: false });
    addFormats(ajv);
    const ok = ajv.compile(schemaFor(signed.kind))(signed);
    assert.ok(ok, `signed ${signed.kind} should pass its full schema: ${JSON.stringify(ajv.errors)}`);

    assert.equal(signed.security.keyId, DEV_KEY_ID, 'keyless signing must stamp the dev fixture keyId');
    assert.ok(
      !trustedKeys.keys.some((k) => k.keyId === signed.security.keyId),
      'the dev fixture key must NEVER be listed in keys/trusted-keys.json',
    );
    const clone = { ...signed };
    delete clone.security;
    const payload = canonicalStringify(clone);
    assert.equal(
      signed.security.signedPayloadSha256,
      `sha256:${createHash('sha256').update(payload, 'utf8').digest('hex')}`,
      'signedPayloadSha256 must match the canonical payload',
    );
    const verified = sodium.crypto_sign_verify_detached(
      new Uint8Array(Buffer.from(signed.security.signature, 'base64')),
      new Uint8Array(Buffer.from(payload, 'utf8')),
      new Uint8Array(Buffer.from(devPublicKeyB64, 'base64')),
    );
    assert.ok(verified, 'Ed25519 signature must verify against the dev fixture public key');
    return signed;
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

const seed = (kind) =>
  JSON.parse(readFileSync(path.join(ROOT, 'releases', kind, `selfhelp-${kind}-0.1.0.json`), 'utf8'));

test('assembles + signs + verifies a core 0.2.0 release seeded from 0.1.0', async () => {
  await sodium.ready;
  const args = parseArgs([
    '--kind', 'core', '--version', '0.2.0', '--channel', 'test', '--min-upgrade-from', '0.1.0',
    '--backend-image', 'ghcr.io/humdek-unibe-ch/selfhelp-backend:0.2.0', '--backend-digest', `sha256:${'a'.repeat(64)}`,
    '--worker-image', 'ghcr.io/humdek-unibe-ch/selfhelp-worker:0.2.0', '--worker-digest', `sha256:${'b'.repeat(64)}`,
    '--scheduler-image', 'ghcr.io/humdek-unibe-ch/selfhelp-scheduler:0.2.0', '--scheduler-digest', `sha256:${'c'.repeat(64)}`,
    '--frontend-range', '>=0.2.0 <0.3.0', '--migration-range', 'VersionA..VersionB',
  ]);
  const body = assembleRelease('core', args, seed('core'));

  assert.equal(body.kind, 'selfhelp-core-release');
  assert.equal(body.id, 'selfhelp-core-0.2.0');
  assert.equal(body.version, '0.2.0');
  assert.equal(body.channel, 'test');
  assert.equal(body.backend.image, 'ghcr.io/humdek-unibe-ch/selfhelp-backend:0.2.0');
  assert.equal(body.backend.digest, `sha256:${'a'.repeat(64)}`);
  assert.equal(body.backend.phpVersion, '8.4', 'backend phpVersion inherited from --from seed');
  assert.ok(body.runtime, 'runtime policy block carried forward from the seed');
  assert.equal(body.security, undefined, 'assemble never emits a security block');

  signValidateVerify(body);
});

test('assembles + signs + verifies frontend/scheduler/worker releases', async () => {
  await sodium.ready;
  const fe = assembleRelease(
    'frontend',
    parseArgs([
      '--kind', 'frontend', '--version', '0.2.0', '--channel', 'test',
      '--image', 'ghcr.io/humdek-unibe-ch/selfhelp-frontend:0.2.0', '--digest', `sha256:${'d'.repeat(64)}`,
      '--required-core-range', '>=0.2.0 <0.3.0', '--required-api-version', '0.1.0',
      '--shared-package-version', '9.9.9',
    ]),
    seed('frontend'),
  );
  assert.equal(fe.kind, 'selfhelp-frontend-release');
  assert.equal(fe.backendCompatibility.requiredApiVersion, '0.1.0');
  assert.equal(
    fe.builtFrom.sharedPackageVersion,
    '9.9.9',
    'a seeded sharedPackageVersion must not survive an explicit override',
  );
  assert.equal(fe.builtFrom.nextStandalone, true, 'other seeded builtFrom fields are carried forward');
  signValidateVerify(fe);

  for (const kind of ['scheduler', 'worker']) {
    const body = assembleRelease(
      kind,
      parseArgs([
        '--kind', kind, '--version', '0.2.0', '--channel', 'test',
        '--image', `ghcr.io/humdek-unibe-ch/selfhelp-${kind}:0.2.0`, '--digest', `sha256:${'e'.repeat(64)}`,
        '--required-core-range', '>=0.2.0 <0.3.0',
      ]),
      seed(kind),
    );
    assert.equal(body.kind, `selfhelp-${kind}-release`);
    assert.equal(body.id, `selfhelp-${kind}-0.2.0`);
    signValidateVerify(body);
  }
});

test('assembles + signs + verifies a mobile-preview release seeded from the emitted descriptor', async () => {
  await sodium.ready;
  // The mobile repo emits an unsigned descriptor (mobile-preview-release.json);
  // the registry seeds from it and overrides the image-derived fields. The
  // renderer contract + curated bundled set come from the seed.
  const emitted = {
    kind: 'selfhelp-mobile-preview-release',
    id: 'selfhelp-mobile-preview-0.2.0',
    version: '0.2.0',
    channel: 'stable',
    image: 'ghcr.io/humdek-unibe-ch/selfhelp-mobile-preview:0.2.0',
    digest: `sha256:${'f'.repeat(64)}`,
    builtFrom: { expoWebExport: true, sharedPackageVersion: '1.15.0', expoSdk: '~55.0.23', reactNative: '0.83.6' },
    backendCompatibility: { requiredCoreRange: '>=0.1.19 <0.2.0', requiredApiVersion: '0.1.0' },
    mobileRendererVersion: '0.1.0',
    reactNativeVersion: '0.83.6',
    expoSdkVersion: '55.0.0',
    bundledPlugins: [
      { id: 'sh2-shp-survey-js', version: '0.2.23', mobilePackage: '@humdek/sh2-shp-survey-js-mobile', mobilePackageVersion: '0.2.23' },
    ],
  };
  const body = assembleRelease(
    'mobile-preview',
    parseArgs([
      '--kind', 'mobile-preview', '--version', '0.2.0', '--channel', 'test',
      '--image', 'ghcr.io/humdek-unibe-ch/selfhelp-mobile-preview:0.2.0', '--digest', `sha256:${'f'.repeat(64)}`,
      '--required-core-range', '>=0.1.19 <0.2.0', '--required-api-version', '0.1.0',
    ]),
    emitted,
  );

  assert.equal(body.kind, 'selfhelp-mobile-preview-release');
  assert.equal(body.id, 'selfhelp-mobile-preview-0.2.0');
  assert.equal(body.channel, 'test', 'an explicit channel overrides the seed');
  assert.equal(body.mobileRendererVersion, '0.1.0', 'renderer contract carried from the seed');
  assert.equal(body.reactNativeVersion, '0.83.6', 'React Native version carried from the seed');
  assert.equal(body.expoSdkVersion, '55.0.0', 'Expo SDK version carried from the seed');
  assert.equal(body.bundledPlugins.length, 1);
  assert.equal(body.bundledPlugins[0].mobilePackage, '@humdek/sh2-shp-survey-js-mobile');
  assert.equal(body.backendCompatibility.requiredCoreRange, '>=0.1.19 <0.2.0');
  assert.equal(body.security, undefined, 'assemble never emits a security block');

  signValidateVerify(body);
});

test('rejects an unknown kind and missing required inputs', () => {
  assert.throws(() => assembleRelease('plugin', parseArgs(['--version', '1.0.0'])), /--kind must be one of/);
  assert.throws(() => assembleRelease('core', parseArgs(['--kind', 'core'])), /--version is required/);
  // No --from and no image/digest -> schema validation fails on the missing image ref.
  assert.throws(
    () => assembleRelease('frontend', parseArgs(['--kind', 'frontend', '--version', '0.2.0'])),
    /failed schema validation/,
  );
});
