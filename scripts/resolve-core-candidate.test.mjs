/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * Offline tests for the auto core-release resolver: exact match, semver range
 * match, missing component, incompatible component, duplicate release, digest
 * mismatch, and the cron reconcile plan. All IO is injected — no network.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveCandidate, planReconcile, planFromEvent } from './resolve-core-candidate.mjs';

const DIGESTS = {
  'ghcr.io/acme/selfhelp-backend:0.2.0': 'sha256:backend-2',
  'ghcr.io/acme/selfhelp-worker:0.2.0': 'sha256:worker-2',
  'ghcr.io/acme/selfhelp-scheduler:0.2.0': 'sha256:scheduler-2',
  'ghcr.io/acme/selfhelp-frontend:0.1.4': 'sha256:frontend-4',
  'ghcr.io/acme/selfhelp-frontend:0.2.0': 'sha256:frontend-20',
};

/** A registry with stable core 0.1.1 + frontend 0.1.3 already published. */
function fakeCtx(overrides = {}) {
  return {
    owner: 'acme',
    registry: {
      core: [
        { id: 'selfhelp-core-0.1.1', version: '0.1.1', channel: 'stable', releaseUrl: 'releases/core/selfhelp-core-0.1.1.json' },
      ],
      frontend: [
        { id: 'selfhelp-frontend-0.1.3', version: '0.1.3', channel: 'stable', releaseUrl: 'releases/frontend/selfhelp-frontend-0.1.3.json' },
      ],
      ...overrides.registry,
    },
    async loadRelease(url) {
      if (url.includes('core')) {
        return { version: '0.1.1', frontendCompatibility: { requiredFrontendRange: '>=0.1.0 <0.2.0' } };
      }
      return { version: '0.1.3', backendCompatibility: { requiredCoreRange: '>=0.1.0 <0.3.0' } };
    },
    async branchExists() {
      return false;
    },
    async resolveImageDigest(image) {
      return DIGESTS[image] ?? null;
    },
    async fetchComponentJson(repo, ref, file) {
      if (file === 'release-manifest.json' && repo === 'sh-selfhelp_backend') {
        return { kind: 'core', supports: { frontend: '>=0.1.0 <0.2.0' }, minimumDirectUpgradeFrom: '0.1.0', pluginApiVersion: '0.1.0', php: '8.4' };
      }
      if (file === 'release-manifest.json' && repo === 'sh-selfhelp_frontend') {
        return { kind: 'frontend', supports: { core: '^0.1.0' }, requiredApiVersion: '0.1.0' };
      }
      if (file === 'package-lock.json') {
        return { packages: { 'node_modules/@selfhelp/shared': { version: '1.5.0' } } };
      }
      return null;
    },
    async listMigrationClasses() {
      return ['Version20260501000000', 'Version20260610124237', 'Version20260501000300'];
    },
    async listTags() {
      return [];
    },
    ...overrides.fns,
  };
}

const WAVE_DIGESTS = {
  'ghcr.io/acme/selfhelp-backend:0.1.12': 'sha256:backend-112',
  'ghcr.io/acme/selfhelp-worker:0.1.12': 'sha256:worker-112',
  'ghcr.io/acme/selfhelp-scheduler:0.1.12': 'sha256:scheduler-112',
  'ghcr.io/acme/selfhelp-frontend:0.1.19': 'sha256:frontend-119',
};

/**
 * A registry mid-coordinated-wave: the PUBLISHED counterparts are the pre-wave
 * core 0.1.11 + frontend 0.1.17 (both still declaring the old loose ranges),
 * while the NEW, mutually-incompatible-with-the-old core 0.1.12 + frontend
 * 0.1.19 are already TAGGED in their repos but not yet published here. This is
 * exactly the deadlock the counterpart-tag fallback resolves.
 */
function waveCtx(overrides = {}) {
  return {
    owner: 'acme',
    registry: {
      core: [
        { id: 'selfhelp-core-0.1.11', version: '0.1.11', channel: 'stable', releaseUrl: 'releases/core/selfhelp-core-0.1.11.json' },
      ],
      frontend: [
        { id: 'selfhelp-frontend-0.1.17', version: '0.1.17', channel: 'stable', releaseUrl: 'releases/frontend/selfhelp-frontend-0.1.17.json' },
      ],
      ...overrides.registry,
    },
    async loadRelease(url) {
      if (url.includes('core')) {
        return { version: '0.1.11', frontendCompatibility: { requiredFrontendRange: '>=0.1.0 <0.2.0' } };
      }
      return { version: '0.1.17', backendCompatibility: { requiredCoreRange: '>=0.1.0 <0.2.0' } };
    },
    async branchExists() {
      return false;
    },
    async resolveImageDigest(image) {
      return WAVE_DIGESTS[image] ?? null;
    },
    async fetchComponentJson(repo, ref, file) {
      if (file === 'release-manifest.json' && repo === 'sh-selfhelp_backend') {
        return { kind: 'core', supports: { frontend: '>=0.1.18 <0.2.0' }, minimumDirectUpgradeFrom: '0.1.0', pluginApiVersion: '0.1.0', php: '8.4' };
      }
      if (file === 'release-manifest.json' && repo === 'sh-selfhelp_frontend') {
        return { kind: 'frontend', supports: { core: '>=0.1.12 <0.2.0' }, requiredApiVersion: '0.1.0' };
      }
      if (file === 'package-lock.json') {
        return { packages: { 'node_modules/@selfhelp/shared': { version: '1.7.0' } } };
      }
      return null;
    },
    async listMigrationClasses() {
      return ['Version20260501000000', 'Version20260617093424'];
    },
    async listTags(repo) {
      if (repo === 'sh-selfhelp_backend') return ['v0.1.12', 'v0.1.11'];
      if (repo === 'sh-selfhelp_frontend') return ['v0.1.19', 'v0.1.18', 'v0.1.17'];
      return [];
    },
    ...overrides.fns,
  };
}

test('core candidate: exact-version counterpart inside both ranges resolves ready', async () => {
  const res = await resolveCandidate({ kind: 'core', version: '0.2.0' }, fakeCtx());
  assert.equal(res.status, 'ready');
  assert.equal(res.publish.kind, 'core');
  assert.equal(res.publish.version, '0.2.0');
  assert.deepEqual(res.publish.digests, {
    backend: 'sha256:backend-2',
    worker: 'sha256:worker-2',
    scheduler: 'sha256:scheduler-2',
  });
  // metadata comes from the component's own release-manifest at the tag,
  // migration range sorted across the migrations dir
  assert.equal(res.publish.metadata.frontendRange, '>=0.1.0 <0.2.0');
  assert.equal(res.publish.metadata.migrationRange, 'Version20260501000000..Version20260610124237');
  assert.equal(res.publish.metadata.pluginApi, '0.1.0');
  assert.equal(res.publish.seedFrom, 'releases/core/selfhelp-core-0.1.1.json');
});

test('frontend candidate: caret range match against existing core resolves ready', async () => {
  const res = await resolveCandidate({ kind: 'frontend', version: '0.1.4' }, fakeCtx());
  assert.equal(res.status, 'ready');
  assert.deepEqual(res.publish.digests, { image: 'sha256:frontend-4' });
  assert.equal(res.publish.metadata.requiredCoreRange, '^0.1.0');
  // sharedPackageVersion is pulled from the component's lockfile at the tag
  assert.equal(res.publish.metadata.sharedPackageVersion, '1.5.0');
  assert.equal(res.publish.seedFrom, 'releases/frontend/selfhelp-frontend-0.1.3.json');
});

test('missing component: no stable counterpart blocks the candidate', async () => {
  const ctx = fakeCtx({ registry: { frontend: [] } });
  const res = await resolveCandidate({ kind: 'core', version: '0.2.0' }, ctx);
  assert.equal(res.status, 'missing-component');
});

test('incompatible component: counterpart range excludes the new version', async () => {
  // core 0.1.1 accepts frontend >=0.1.0 <0.2.0 — frontend 0.2.0 falls outside
  const res = await resolveCandidate({ kind: 'frontend', version: '0.2.0' }, fakeCtx());
  assert.equal(res.status, 'incompatible');
  assert.match(res.reasons.join(' '), /excludes frontend 0\.2\.0/);
});

test('duplicate release: version already in registry.json is skipped', async () => {
  const res = await resolveCandidate({ kind: 'frontend', version: '0.1.3' }, fakeCtx());
  assert.equal(res.status, 'duplicate');
});

test('duplicate release: an already-staged publish branch is skipped', async () => {
  const ctx = fakeCtx({ fns: { branchExists: async (b) => b === 'publish/core-0.2.0' } });
  const res = await resolveCandidate({ kind: 'core', version: '0.2.0' }, ctx);
  assert.equal(res.status, 'duplicate');
  assert.match(res.reasons.join(' '), /already exists/);
});

test('digest mismatch: payload digest differing from GHCR fails loudly', async () => {
  const res = await resolveCandidate(
    { kind: 'core', version: '0.2.0', digests: { backend: 'sha256:evil' } },
    fakeCtx(),
  );
  assert.equal(res.status, 'digest-mismatch');
  assert.match(res.reasons.join(' '), /payload says sha256:evil, GHCR says sha256:backend-2/);
});

test('unpublished image: missing GHCR tag is an error, not a release', async () => {
  const res = await resolveCandidate({ kind: 'core', version: '0.3.0' }, fakeCtx());
  assert.equal(res.status, 'error');
  assert.match(res.reasons.join(' '), /not published on GHCR/);
});

test('reconcile plan: latest repo tag missing from the registry becomes a candidate', async () => {
  const ctx = fakeCtx({
    fns: {
      listTags: async (repo) => (repo === 'sh-selfhelp_backend' ? ['v0.2.0', 'v0.1.1'] : ['v0.1.3']),
    },
  });
  const plan = await planReconcile(ctx);
  // backend v0.2.0 is new -> candidate; frontend v0.1.3 already published -> skipped
  assert.deepEqual(plan, [{ kind: 'core', version: '0.2.0', channel: 'stable' }]);
});

test('event plan: repository_dispatch payload normalizes into one candidate', () => {
  const plan = planFromEvent('repository_dispatch', {
    action: 'core-image-published',
    client_payload: { version: '0.2.0', digests: { backend: 'sha256:x' } },
  });
  assert.deepEqual(plan, [
    { kind: 'core', version: '0.2.0', channel: 'stable', digests: { backend: 'sha256:x' } },
  ]);
});

test('coordinated wave: core matches an unpublished but compatible frontend TAG (no deadlock)', async () => {
  // Published frontend is the pre-wave 0.1.17, which core 0.1.12 no longer
  // supports — the strict check alone would deadlock. The fallback finds the
  // newest mutually-compatible frontend tag (0.1.19) and stages anyway.
  const res = await resolveCandidate({ kind: 'core', version: '0.1.12' }, waveCtx());
  assert.equal(res.status, 'ready');
  assert.equal(res.publish.version, '0.1.12');
  assert.equal(res.publish.metadata.frontendRange, '>=0.1.18 <0.2.0');
  assert.deepEqual(res.publish.digests, {
    backend: 'sha256:backend-112',
    worker: 'sha256:worker-112',
    scheduler: 'sha256:scheduler-112',
  });
  assert.match(res.reasons.join(' '), /unpublished counterpart tag/);
  assert.match(res.reasons.join(' '), /frontend 0\.1\.19 ⇄ core 0\.1\.12/);
});

test('coordinated wave: frontend matches an unpublished but compatible core TAG (no deadlock)', async () => {
  const res = await resolveCandidate({ kind: 'frontend', version: '0.1.19' }, waveCtx());
  assert.equal(res.status, 'ready');
  assert.deepEqual(res.publish.digests, { image: 'sha256:frontend-119' });
  assert.equal(res.publish.metadata.requiredCoreRange, '>=0.1.12 <0.2.0');
  assert.equal(res.publish.metadata.sharedPackageVersion, '1.7.0');
  assert.match(res.reasons.join(' '), /unpublished counterpart tag/);
  assert.match(res.reasons.join(' '), /core 0\.1\.12 ⇄ frontend 0\.1\.19/);
});

test('coordinated wave: still blocks when no compatible counterpart tag exists yet', async () => {
  // Frontend 0.1.18+ has not been tagged yet, so there is genuinely nothing to
  // pair core 0.1.12 with — the resolver must keep failing loudly.
  const ctx = waveCtx({
    fns: { listTags: async (repo) => (repo === 'sh-selfhelp_frontend' ? ['v0.1.17'] : ['v0.1.12', 'v0.1.11']) },
  });
  const res = await resolveCandidate({ kind: 'core', version: '0.1.12' }, ctx);
  assert.equal(res.status, 'incompatible');
  assert.match(res.reasons.join(' '), /the latest stable frontend is 0\.1\.17/);
});

test('coordinated wave: skips a counterpart tag whose own range excludes us, takes the next compatible one', async () => {
  // Frontend 0.1.20 (newest) dropped support for core 0.1.12; 0.1.18 still
  // supports it. Newest-first scan skips 0.1.20 and matches 0.1.18.
  const ctx = waveCtx({
    fns: {
      listTags: async (repo) =>
        repo === 'sh-selfhelp_frontend' ? ['v0.1.20', 'v0.1.18', 'v0.1.17'] : ['v0.1.12', 'v0.1.11'],
      fetchComponentJson: async (repo, ref, file) => {
        if (file === 'release-manifest.json' && repo === 'sh-selfhelp_backend') {
          return { kind: 'core', supports: { frontend: '>=0.1.18 <0.2.0' }, minimumDirectUpgradeFrom: '0.1.0', pluginApiVersion: '0.1.0', php: '8.4' };
        }
        if (file === 'release-manifest.json' && repo === 'sh-selfhelp_frontend') {
          if (ref === 'v0.1.20') return { kind: 'frontend', supports: { core: '>=0.1.13 <0.2.0' } };
          return { kind: 'frontend', supports: { core: '>=0.1.12 <0.2.0' } };
        }
        return null;
      },
    },
  });
  const res = await resolveCandidate({ kind: 'core', version: '0.1.12' }, ctx);
  assert.equal(res.status, 'ready');
  assert.match(res.reasons.join(' '), /frontend 0\.1\.18 ⇄ core 0\.1\.12/);
});
