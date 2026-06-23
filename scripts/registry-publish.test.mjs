/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * Unit coverage for the publish helpers used by publish-core-release.yml:
 *   - addReleaseRef: idempotent insert/replace into registry.json arrays.
 *   - buildPublishArgs + assembleRelease: a "publish dry-run" that proves the
 *     workflow's grouped inputs produce a schema-valid release with no file IO
 *     and no signing key.
 *
 * Versions follow the pre-release 0.x contract (the registry publishes
 * selfhelp-core 0.1.0); a "next release" is modelled as 0.2.0 since pre-1.0
 * every minor is breaking.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { assembleRelease } from './assemble-release.mjs';
import { addReleaseRef } from './add-release-ref.mjs';
import { buildPublishArgs } from './publish-release.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const seed = (kind) =>
  JSON.parse(readFileSync(path.join(ROOT, 'releases', kind, `selfhelp-${kind}-0.1.0.json`), 'utf8'));

test('addReleaseRef appends a new ref and replaces by id', () => {
  const registry = { core: [{ id: 'selfhelp-core-0.1.0', version: '0.1.0', channel: 'stable', releaseUrl: 'releases/core/selfhelp-core-0.1.0.json' }] };
  addReleaseRef(registry, 'core', { id: 'selfhelp-core-0.2.0', version: '0.2.0', channel: 'test', releaseUrl: 'releases/core/selfhelp-core-0.2.0.json' });
  assert.equal(registry.core.length, 2);
  assert.equal(registry.core[1].id, 'selfhelp-core-0.2.0');

  // Replacing the same id updates in place (no duplicate).
  addReleaseRef(registry, 'core', { id: 'selfhelp-core-0.2.0', version: '0.2.0', channel: 'stable', releaseUrl: 'releases/core/selfhelp-core-0.2.0.json' });
  assert.equal(registry.core.length, 2);
  assert.equal(registry.core[1].channel, 'stable');
});

test('addReleaseRef creates the array when missing and validates input', () => {
  const registry = {};
  addReleaseRef(registry, 'scheduler', { id: 's', version: '0.2.0', channel: 'test', releaseUrl: 'u' });
  assert.equal(registry.scheduler.length, 1);
  assert.throws(() => addReleaseRef(registry, 'nope', { id: 'x', version: '1', channel: 'stable', releaseUrl: 'u' }), /kind must be one of/);
  assert.throws(() => addReleaseRef(registry, 'core', { id: 'x', version: '1', channel: 'stable' }), /releaseUrl is required/);
});

test('addReleaseRef keeps plugins multi-version (matches by id + version)', () => {
  const registry = { plugins: [] };
  addReleaseRef(registry, 'plugins', { id: 'sh2-shp-survey-js', version: '0.1.0', channel: 'stable', releaseUrl: 'releases/plugins/sh2-shp-survey-js-0.1.0.json' });
  addReleaseRef(registry, 'plugins', { id: 'sh2-shp-survey-js', version: '0.2.0', channel: 'stable', releaseUrl: 'releases/plugins/sh2-shp-survey-js-0.2.0.json' });
  // Two versions of the SAME plugin id coexist (multi-version registry).
  assert.equal(registry.plugins.length, 2);

  // Re-publishing the same id+version replaces in place (no duplicate).
  addReleaseRef(registry, 'plugins', { id: 'sh2-shp-survey-js', version: '0.2.0', channel: 'beta', releaseUrl: 'releases/plugins/sh2-shp-survey-js-0.2.0.json' });
  assert.equal(registry.plugins.length, 2);
  assert.equal(registry.plugins[1].channel, 'beta');
});

test('buildPublishArgs + assembleRelease produce a schema-valid core release (dry run)', () => {
  const args = buildPublishArgs({
    kind: 'core',
    version: '0.2.0',
    channel: 'test',
    digests: { backend: `sha256:${'a'.repeat(64)}`, worker: `sha256:${'b'.repeat(64)}`, scheduler: `sha256:${'c'.repeat(64)}` },
    metadata: { minUpgradeFrom: '0.1.0', frontendRange: '>=0.2.0 <0.3.0', migrationRange: 'A..B', destructive: false },
    owner: 'humdek-unibe-ch',
  });
  assert.equal(args['backend-image'], 'ghcr.io/humdek-unibe-ch/selfhelp-backend:0.2.0');
  assert.equal(args.destructive, 'false');

  const body = assembleRelease('core', args, seed('core')); // throws if schema-invalid
  assert.equal(body.version, '0.2.0');
  assert.equal(body.backend.digest, `sha256:${'a'.repeat(64)}`);
  assert.equal(body.security, undefined);
});

test('buildPublishArgs + assembleRelease produce a schema-valid mobile-preview release (seeded dry run)', () => {
  // The mobile repo emits the descriptor; the publish step seeds bundledPlugins +
  // renderer contract from it and overrides the image-derived axes from inputs.
  const seedDescriptor = {
    kind: 'selfhelp-mobile-preview-release',
    version: '0.1.0',
    channel: 'stable',
    image: 'ghcr.io/humdek-unibe-ch/selfhelp-mobile-preview:0.1.0',
    digest: `sha256:${'e'.repeat(64)}`,
    backendCompatibility: { requiredCoreRange: '>=0.1.0 <0.2.0', requiredApiVersion: '0.1.0' },
    mobileRendererVersion: '0.1.0',
    bundledPlugins: [
      { id: 'sh2-shp-survey-js', version: '0.2.23', mobilePackage: '@humdek/sh2-shp-survey-js-mobile', mobilePackageVersion: '0.2.23' },
    ],
  };
  const args = buildPublishArgs({
    kind: 'mobile-preview',
    version: '0.2.0',
    channel: 'test',
    digests: { image: `sha256:${'f'.repeat(64)}` },
    metadata: { requiredCoreRange: '>=0.1.19 <0.2.0', requiredApiVersion: '0.1.0', mobileRendererVersion: '0.1.0', sharedPackageVersion: '1.15.0' },
  });
  assert.equal(args.image, 'ghcr.io/humdek-unibe-ch/selfhelp-mobile-preview:0.2.0');
  assert.equal(args['mobile-renderer-version'], '0.1.0');

  const body = assembleRelease('mobile-preview', args, seedDescriptor);
  assert.equal(body.kind, 'selfhelp-mobile-preview-release');
  assert.equal(body.id, 'selfhelp-mobile-preview-0.2.0');
  assert.equal(body.digest, `sha256:${'f'.repeat(64)}`, 'image digest from inputs overrides the seed');
  assert.equal(body.backendCompatibility.requiredCoreRange, '>=0.1.19 <0.2.0');
  assert.equal(body.bundledPlugins.length, 1, 'bundled set carried from the emitted descriptor');
  assert.equal(body.bundledPlugins[0].mobilePackage, '@humdek/sh2-shp-survey-js-mobile');
  assert.equal(body.security, undefined);
});

test('buildPublishArgs builds frontend/scheduler/worker args from version + owner', () => {
  for (const kind of ['frontend', 'scheduler', 'worker']) {
    const args = buildPublishArgs({
      kind,
      version: '0.2.0',
      channel: 'test',
      digests: { image: `sha256:${'d'.repeat(64)}` },
      metadata: { requiredCoreRange: '>=0.2.0 <0.3.0', requiredApiVersion: '0.1.0', sharedPackageVersion: '9.9.9' },
    });
    assert.equal(args.image, `ghcr.io/humdek-unibe-ch/selfhelp-${kind}:0.2.0`);
    const body = assembleRelease(kind, args, seed(kind));
    assert.equal(body.kind, `selfhelp-${kind}-release`);
    if (kind === 'frontend') {
      assert.equal(body.builtFrom.sharedPackageVersion, '9.9.9', 'frontend metadata.sharedPackageVersion lands in builtFrom');
    } else {
      assert.equal(args['shared-package-version'], undefined, `${kind} must not receive the frontend-only flag`);
    }
  }
});
