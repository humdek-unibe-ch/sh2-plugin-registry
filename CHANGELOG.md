<!--
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
-->
# Changelog

All notable changes to the **SelfHelp plugin & platform registry** are documented
here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

This file tracks the **registry content and tooling** (schemas, scripts, layout,
trust model), not the versions of the individual plugins or platform releases it
serves — those are versioned in their own repositories and pinned per entry.

## [Unreleased]

### Added

- **Unified registry**: in addition to the plugin catalogue, `registry.json` now
  serves signed **core**, **frontend**, **scheduler**, and **worker** release
  metadata consumed by the SelfHelp Manager (`sh-manager`). There is no second
  registry.
  - New top-level fields: `requiresManager`, `core[]`, `frontend[]`,
    `scheduler[]`, `worker[]`, `trustedKeysUrl`, `advisoriesUrl` (all additive;
    the existing `plugins[]` contract is unchanged).
  - New signed release documents under `releases/{core,frontend,scheduler,worker}/<id>.json`,
    each carrying a `security` block `{signature, keyId, signedPayloadSha256}`.
  - New schemas: `core-release.schema.json`, `frontend-release.schema.json`,
    `scheduler-release.schema.json`, `worker-release.schema.json`,
    `compatibility.schema.json`, `trusted-keys.schema.json`,
    `advisory-feed.schema.json`.
  - Scheduler and worker are independently versioned and separately pinnable;
    their `backendCompatibility.requiredCoreRange` drives the manager's
    `pickSchedulerForCore` / `pickWorkerForCore` resolution.
- **Release signing**: `scripts/sign-release.mjs` signs a core/frontend/scheduler/
  worker release document with Ed25519 over its canonical JSON (without the
  `security` block) — byte-compatible with the manager's `@shm/registry` and the
  host PHP `SignedPayloadBuilder`.
- **Unified validation**: `scripts/validate-unified.mjs` (`npm run validate:unified`,
  also run in CI) validates the index and every signed release and re-verifies its
  signature against `keys/trusted-keys.json` on every push.
- **Security advisories**: `advisories.json` feed (honoured by the manager's
  resolver to block/warn on affected versions).
- **Documentation**: extended `docs/operations/publishing.md` and
  `docs/operations/signing.md` to cover platform releases, checksums, signatures,
  trusted keys, advisories, and `requiresManager`; full layout in
  `docs/reference/registry-layout.md`. Added this changelog.

## [1.0.0] - 2026-05-22

### Added

- Initial public **plugin** registry served at
  <https://humdek-unibe-ch.github.io/sh2-plugin-registry/>, seeded into every
  SelfHelp host as the read-only `humdek-public` source.
- Canonical signed-payload builder + Ed25519 signer (`scripts/sign.mjs`),
  registry-entry assembler (`scripts/build-registry-entry.mjs`), trust-field guard
  (`scripts/guard-trust-fields.mjs`), and registry-schema validation.
- `registry.json` + `registry.schema.json` + `plugin-manifest.schema.json`, with
  `manifests/` and `artifacts/` for published plugin runtime bundles.
