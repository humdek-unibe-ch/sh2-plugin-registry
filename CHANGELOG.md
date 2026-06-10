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

- **Catalog page shows platform releases, descriptions, and requirements.**
  `index.html` now renders two sections: **Platform releases** (core /
  frontend / scheduler / worker cards with image refs + digests, database
  migration info, and the runtime requirements from each signed release
  document — frontend range, plugin API, MySQL/Redis/Mercure/PHP) and
  **Plugins** (name + description resolved from the manifest snapshot, the
  SelfHelp core / plugin API / PHP ranges each version requires, and
  homepage / manifest / `.shplugin` / release-document links). Cards degrade
  to ref-only when a linked document cannot be fetched; advisory-blocked
  refs get a red `blocked by advisory` tag.

- **Step-by-step release runbook** (`docs/operations/release-runbook.md`):
  the beginner-friendly, ordered guide covering when to tag
  backend/frontend/plugin repos, what each tag triggers, how image digests
  flow into the `publish-core-release` workflow, the one-time
  keys/secrets setup (`SELFHELP_SIGNING_KEY`,
  `SELFHELP_SIGNING_KEY_ID`, `REGISTRY_PUSH_TOKEN`, cosign,
  `keys/trusted-keys.json`, host `SELFHELP_PLUGIN_TRUSTED_KEYS`), and a
  troubleshooting table. Linked from `README.md`, `docs/README.md`,
  `docs/operations/index.md`, and `docs/operations/publishing.md`.
- **Production publisher key `prod` added to `keys/trusted-keys.json`.**
  Its public half is the same key hosts already trust by default
  (backend `.env.default` `SELFHELP_PLUGIN_TRUSTED_KEYS`). Releases signed
  by CI with `SELFHELP_SIGNING_KEY_ID=prod` now verify in
  `validate:unified`.

### Removed

- **Deterministic bootstrap key `selfhelp-official-2026` retired.** Every
  committed release document (core/frontend/scheduler/worker 0.1.0 and the
  `sh2-shp-survey-js` 0.1.0/0.2.0 plugin releases) is re-signed with the
  production `prod` key, and the bootstrap entry is gone from
  `keys/trusted-keys.json` — `prod` is now the only trusted publisher key.
  The offline fallback in `scripts/sign-release.mjs` keeps deriving the same
  deterministic dev keypair but under the honest keyId
  `selfhelp-dev-fixture`, which is intentionally NOT trusted: fixture-signed
  documents fail `validate:unified` instead of masquerading as official.

### Fixed

- **`publish-core-release` failed every non-`test` run even with the signing
  secrets configured.** The "Refuse to dev-sign" guard read
  `secrets.SELFHELP_SIGNING_KEY` inside a step-level `if:`, but the
  `secrets` context is not available there (GitHub Actions contexts
  availability), so the check always saw an empty string and exited 1. The
  secrets are now mapped to job-scoped env and the guard checks `env.*`,
  matching the documented workaround.

### Changed

- **Plugins are now multi-version release refs** (BREAKING, pre-release). `plugins[]`
  in `registry.json` is no longer an array of inline `pluginEntry` objects; it is
  now an array of release refs (`{id, version, channel, releaseUrl}`), the SAME
  contract as `core`/`frontend`/`scheduler`/`worker`. A plugin appears as **one
  ref per published version**, each pointing at a standalone signed
  `releases/plugins/<id>-<version>.json` document (schema:
  `plugin-release.schema.json`). This lets a host resolve the **newest version
  compatible with itself** instead of only the latest overall, and unifies the
  whole registry on one "release ref → signed document" model consumed by both
  installers (Manager = platform, CMS = plugins).
  - New schema `plugin-release.schema.json` (mirrors `@selfhelp/shared`
    `PluginRelease` + the backend `config/schemas/registry/plugin-release.schema.json`);
    `registry.schema.json` `plugins[]` now references `releaseRef` and the inline
    `pluginEntry` definition was removed.
  - `scripts/validate-unified.mjs` now validates + Ed25519-verifies every plugin
    release; `scripts/guard-trust-fields.mjs` now guards the plugin release
    **documents** (rejecting `dev`/placeholder signing on an `official` release);
    `scripts/add-release-ref.mjs` accepts the `plugins` kind (multi-version,
    matched by id+version).
  - New `scripts/build-plugin-release.mjs` assembles an unsigned plugin-release
    document from a `plugin.json` manifest; it replaces the inline
    `scripts/build-registry-entry.mjs` (removed) and the
    `selfhelp-plugin-build-registry-entry` bin (renamed to
    `selfhelp-plugin-build-release`).
  - Migrated `sh2-shp-survey-js` to two signed release refs (`0.1.0` compatible
    with core `>=0.1.0 <0.2.0`; `0.2.0` requiring `>=0.2.0 <0.3.0`), replacing the
    stale `0.2.7`–`0.2.20` inline entries/manifests.

### Added

- **Unified registry**: in addition to the plugin catalogue, `registry.json` now
  serves signed **core**, **frontend**, **scheduler**, and **worker** release
  metadata consumed by the SelfHelp Manager (`sh-manager`). There is no second
  registry.
  - New top-level fields: `requiresManager`, `core[]`, `frontend[]`,
    `scheduler[]`, `worker[]`, `trustedKeysUrl`, `advisoriesUrl`. Plugins use the
    same release-ref contract (see **Changed** above).
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
