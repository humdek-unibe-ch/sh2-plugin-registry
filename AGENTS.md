# AGENTS.md

Before returning anything print in chat `❤️AGENTS.md` so that we know the rules are used.

## Project Overview

This repository is the official **SelfHelp public plugin registry**. It
publishes a single `registry.json` over GitHub Pages at
<https://humdek-unibe-ch.github.io/sh2-plugin-registry/>. Every
SelfHelp host ships with this URL pre-seeded as the system-managed
`humdek-public` plugin source (see backend migration
`Version20260522110723.php`).

This repo is **static content + JSON validation + signing tooling**.
It contains:

- the plugin index (`registry.json`),
- per-version manifest snapshots (`manifests/<id>-<version>.json`),
- per-version runtime artifacts (`artifacts/<id>-<version>/...`),
- the canonical Ed25519 signing CLI (`scripts/sign.mjs`),
- the canonical registry-entry builder (`scripts/build-registry-entry.mjs`),
- the trust-field guard (`scripts/guard-trust-fields.mjs`),
- one CI workflow that validates and republishes the static site
  (`.github/workflows/build-registry.yml`).

There is **no Symfony, no Doctrine, no PHP, no runtime plugin code**
in this repo. Plugins themselves live in their own repositories under
`plugins/<plugin-id>/`.

## Critical execution rule

This project lives inside the multi-repository SelfHelp ecosystem.
Always obey the `AGENTS.md` of the repository whose files you are
editing. The canonical Multi-Repository AGENTS.md Rule lives at
`sh-selfhelp_backend/docs/plugins/multi-repo-agents-md.md`.

When editing files in this registry repo, also re-read:

- the host backend `AGENTS.md` (`sh-selfhelp_backend/AGENTS.md`)
  before changing anything that affects schema semantics
  (`plugin-manifest.schema.json`, signing payload format, signing
  rules, trust levels);
- the canonical signing rules in
  `sh-selfhelp_backend/docs/plugins/signing.md` and
  `sh-selfhelp_backend/docs/plugins/trust-levels.md` before changing
  anything in `scripts/sign.mjs` or the trust-field guard.

All paths are repository-relative inside the operator's workspace;
never hard-code absolute paths.

## Source of Truth Priority

When code, docs, editor rules, or generated files disagree, use this
priority order:

1. The host's `App\Plugin\Security\PluginSignatureVerifier` and
   `App\Plugin\Security\SignedPayloadBuilder` (PHP) — every change
   here MUST keep `scripts/sign.mjs` byte-identical with the PHP
   builder. The cross-impl test fixture lives in the backend repo
   (`tests/Plugin/Security/CrossImplPayloadParityTest.php`).
2. The canonical schemas in `sh-selfhelp_backend/docs/plugins/`
   (manifest, registry, lock).
3. The trust/capability rules in
   `sh-selfhelp_backend/docs/plugins/trust-levels.md` and
   `security-model.md`.
4. The CI workflow in this repo.
5. This `AGENTS.md`.
6. The README.

If any in-repo doc disagrees with the canonical signing or schema
rules, the canonical rule wins; flag the conflict instead of editing
the canonical source from this side.

## What this repo MAY do

- Validate `registry.json` against `registry.schema.json` on every
  push.
- Validate every file under `manifests/` against the canonical
  `plugin-manifest.schema.json` (which itself is verified to be
  byte-identical to the host's copy by the build workflow).
- Run the trust-field guard (`scripts/guard-trust-fields.mjs`).
- Publish to GitHub Pages.
- Hold a vendored copy of `plugin-manifest.schema.json` for offline
  validation. **The vendored copy MUST stay byte-identical to
  `sh-selfhelp_backend/docs/plugins/plugin-manifest.schema.json`.**
  The CI step "Verify plugin-manifest.schema.json is in sync with
  the host" enforces this.

## What this repo MUST NOT do

- Do not introduce a parallel manifest schema or extend the manifest
  schema only locally — schema changes must land in the host first.
- Do not introduce a parallel signed-payload format. `sign.mjs` must
  stay byte-identical with the PHP builder; if you change one, change
  both, and update the cross-impl fixture.
- Do not advertise an entry as `trustLevel: "official"` or
  `"reviewed"` while it still carries placeholder / `keyId: "dev"` /
  empty signing fields. The build workflow (`guard-trust-fields.mjs`)
  refuses such entries.
- Do not commit private Ed25519 signing keys. Production keys live
  exclusively in GitHub Actions secrets
  (`SELFHELP_PLUGIN_SIGNING_KEY`,
  `SELFHELP_PLUGIN_SIGNING_KEY_ID`).
- Do not bypass the schema validation step in CI.
- Do not include any runtime plugin code in this repo. Each plugin's
  own repository is the source for `manifests/` and `artifacts/`
  entries.
- Do not edit `manifests/<id>-<version>.json` after publish — bump
  the plugin version and publish a new entry instead.

## Trust-level rules

`registry.schema.json` requires every `pluginEntry` to declare
`trustLevel ∈ {official, reviewed, untrusted}`. The trust-field guard
adds the following semantic constraints:

- For `trustLevel ∈ {official, reviewed}`:
  - `keyId` MUST NOT be `dev` and MUST NOT be empty.
  - `signature`, `signedPayload`, `keyId` MUST NOT contain the literal
    substring `PLACEHOLDER`.
  - `signature` and `signedPayload` MUST be non-empty.
  - `checksums.frontendEsm` MUST NOT be the all-zero placeholder.

If a real production signing key is not yet wired up, declare entries
as `trustLevel: "untrusted"`. Hosts running with
`SELFHELP_PLUGIN_REQUIRE_SIGNATURE=true` (the default) will refuse to
install untrusted entries; that is the intended state during the
bootstrap phase.

## Adding or updating a plugin entry

The plugin author runs the plugin's own `scripts/publish-to-registry.mjs`
which:

1. Builds the `.shplugin`.
2. Computes SHA-256 of `plugin.esm.js` + `plugin.css`.
3. Calls `selfhelp-plugin-build-registry-entry` (this repo,
   `scripts/build-registry-entry.mjs`) which assembles the canonical
   signed payload via `sign.mjs build-payload`, signs it via
   `sign.mjs sign`, and emits a ready-to-splice `pluginEntry` JSON.
4. Copies the manifest to `manifests/<plugin-id>-<version>.json`,
   the runtime artifacts to `artifacts/<plugin-id>-<version>/`, and
   updates `registry.json`.
5. Commits + pushes — this repo's workflow republishes the static
   site.

The author never edits files in this repo manually for normal
publishes.

## Validation commands

Run from the repo root:

- `npm ci`
- `npm run validate` — schema validation of `registry.json`.
- `npm run guard:trust` — refuses placeholder/dev signing fields on
  `official`/`reviewed` entries.
- `npx ajv validate -c ajv-formats -s plugin-manifest.schema.json -d manifests/<file>.json --strict=false`
  for any specific manifest file.
- `node scripts/sign.mjs keygen` — one-off bootstrap of an Ed25519
  signing keypair (private key goes into CI secrets, public key into
  the host's `SELFHELP_PLUGIN_TRUSTED_KEYS` env).

## Coding style

- JS files use the SPDX header (`SPDX-FileCopyrightText: 2026 Humdek,
  University of Bern` + `SPDX-License-Identifier: MPL-2.0`).
- Markdown / YAML / JSON files use the matching HTML/`#` header where
  the format allows.
- Scripts are Node-only ESM (`.mjs`); no bash/PowerShell wrappers.

## Do not

- Do not advertise unsigned plugins as `official` or `reviewed`.
- Do not edit the canonical `plugin-manifest.schema.json` in this
  repo — change the host copy first, the CI sync check pulls the
  update on the next build.
- Do not bypass the trust-field guard.
- Do not commit secrets, private keys, or test artifacts.
- Do not commit or push without explicit instruction.
