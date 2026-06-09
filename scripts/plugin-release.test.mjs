/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * Unit coverage for the plugin-release publish helper (the unified registry's
 * plugin half, mirroring registry-publish.test.mjs for the platform half):
 *   - pluginApiRange: 0.x caret semantics (every pre-1.0 minor is breaking).
 *   - buildPluginRelease: maps a plugin.json manifest onto a schema-valid,
 *     UNSIGNED plugin release document with the resolved cross-repo axis names
 *     (manifest compatibility.selfhelp -> release compatibility.core, manifest
 *     pluginApiVersion -> release compatibility.pluginApi, official from
 *     security.trustLevel), throwing on a bad checksum.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildPluginRelease, pluginApiRange } from './build-plugin-release.mjs';

const SHA = 'a'.repeat(64);
const BASE = 'https://registry.example.test/';

function manifest(overrides = {}) {
  return {
    id: 'sh2-shp-survey-js',
    name: 'SurveyJS',
    version: '0.1.0',
    pluginApiVersion: '0.1.0',
    compatibility: { selfhelp: '>=0.1.0 <0.2.0' },
    security: { trustLevel: 'official' },
    dependencies: [],
    ...overrides,
  };
}

test('pluginApiRange applies 0.x caret semantics (pre-1.0 minor is breaking)', () => {
  assert.equal(pluginApiRange('0.1.0'), '>=0.1.0 <0.2.0');
  assert.equal(pluginApiRange('0.2.5'), '>=0.2.5 <0.3.0');
  assert.equal(pluginApiRange('1.2.3'), '>=1.2.3 <2.0.0');
});

test('buildPluginRelease maps the manifest onto a schema-valid release document', () => {
  const release = buildPluginRelease(manifest(), { channel: 'stable', archiveSha256: SHA, baseUrl: BASE });
  assert.equal(release.kind, 'selfhelp-plugin-release');
  assert.equal(release.id, 'sh2-shp-survey-js');
  assert.equal(release.version, '0.1.0');
  assert.equal(release.channel, 'stable');
  assert.equal(release.official, true);
  // Resolved cross-repo axis names: manifest.compatibility.selfhelp -> core,
  // manifest.pluginApiVersion -> compatibility.pluginApi (range).
  assert.equal(release.compatibility.core, '>=0.1.0 <0.2.0');
  assert.equal(release.compatibility.pluginApi, '>=0.1.0 <0.2.0');
  assert.equal(release.artifacts.sha256, `sha256:${SHA}`);
  assert.equal(release.artifacts.archiveUrl, `${BASE}artifacts/sh2-shp-survey-js-0.1.0.shplugin`);
  assert.equal(release.artifacts.manifestUrl, `${BASE}manifests/sh2-shp-survey-js-0.1.0.json`);
  // sign-release.mjs adds `security` afterwards; the assembled doc has none yet.
  assert.equal(release.security, undefined);
});

test('buildPluginRelease marks a non-official manifest as official:false', () => {
  const release = buildPluginRelease(manifest({ security: { trustLevel: 'reviewed' } }), { archiveSha256: SHA, baseUrl: BASE });
  assert.equal(release.official, false);
});

test('buildPluginRelease rejects a malformed checksum', () => {
  assert.throws(() => buildPluginRelease(manifest(), { archiveSha256: 'not-a-sha', baseUrl: BASE }), /64-char hex digest/);
});
