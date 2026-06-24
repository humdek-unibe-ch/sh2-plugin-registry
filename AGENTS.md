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

- the unified index (`registry.json`) — release refs for plugins AND platform
  components (`core`/`frontend`/`scheduler`/`worker`), one ref per version,
- per-version signed release docs
  (`releases/{plugins,core,frontend,scheduler,worker}/<id>-<version>.json`),
- per-version manifest snapshots (`manifests/<id>-<version>.json`),
- per-version `.shplugin` install artifacts (`artifacts/<id>-<version>.shplugin`),
- the canonical Ed25519 signing CLIs (`scripts/sign.mjs` for the `.shplugin`
  payload, `scripts/sign-release.mjs` for release docs),
- the plugin-release builder (`scripts/build-plugin-release.mjs`),
- the trust-field guard (`scripts/guard-trust-fields.mjs`),
- CI workflows for validation/Pages publishing and staged core/frontend
  releases (`build-registry.yml`, `auto-core-release.yml`, and
  `publish-core-release.yml`).

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

## Documentation Rules

These rules apply to every documentation change in active SelfHelp2 repositories. Copy this section unchanged across repository `AGENTS.md` files so agents get the same documentation contract without following a central link.

- Organize documentation by audience and purpose, not by implementation history: `docs/developer/` for technical architecture/workflow docs, `docs/user/` for non-technical feature/admin/operator guides, `docs/reference/` for exact contracts/tables/schemas/API details, `docs/cookbook/` for task recipes, `docs/operations/` for install/deploy/publish/runbooks, and `docs/archive/` for historical notes.
- Every docs root should have `docs/README.md` as the navigation entrypoint. Tiny repos may keep documentation in the root `README.md` until they need more than one doc. Preserve canonical exceptions such as backend `docs/plugins/` when moving files would break important links; add indexes/status notes first, migrate only after references are updated.
- New or substantially rewritten docs must begin with this metadata block: `Audience`, `Status`, `Applies to`, `Last verified`, `Source of truth`.
- Documentation filenames should use lowercase kebab-case, one `#` title, ASCII punctuation, no emoji headings, repo-relative links, concrete dates instead of "latest/current" when time-sensitive, and no local absolute paths.
- Write developer docs for engineers/technical operators with architecture, contracts, commands, and tradeoffs. Write user docs for non-technical users/operators as task-based steps with expected results and minimal implementation jargon.
- Update documentation in the same change when behavior changes affect user-visible behavior, API contracts, schemas/types, permissions/auth, database/migrations, config/env vars, build/deploy/publish flow, plugin capabilities, or testing commands.
- Do not expose secrets, tokens, private keys, database URLs, Mercure/JWT secrets, or real credentials in docs, examples, logs, or screenshots. Use redacted examples and documented env var names only.
- When docs conflict with runtime behavior, treat runtime behavior as source of truth, flag the stale doc, and update or archive it instead of copying the conflict.

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
  (`SELFHELP_SIGNING_KEY`,
  `SELFHELP_SIGNING_KEY_ID`).
- Do not bypass the schema validation step in CI.
- Do not include any runtime plugin code in this repo. Each plugin's
  own repository is the source for `manifests/` and `artifacts/`
  entries.
- Do not edit `manifests/<id>-<version>.json` after publish — bump
  the plugin version and publish a new entry instead.

## Core/frontend release resolver rules

`scripts/resolve-core-candidate.mjs` is the bidirectional compatibility gate for
auto-staged `core`/`frontend` releases (`.github/workflows/auto-core-release.yml`).
Keep these invariants when changing it:

- The gate is **bidirectional**: a candidate must satisfy the counterpart's
  required range AND the counterpart must satisfy the candidate's
  `release-manifest.json` `supports.*` range.
- A **coordinated breaking wave** (core + frontend bump together) must NOT
  deadlock. When the latest *published* counterpart is the old, incompatible
  version, the resolver falls back to the newest *mutually compatible*
  counterpart **git tag** (read from the counterpart repo's
  `release-manifest.json`) and stages anyway. Each side still stages its own
  reviewed, signed PR, and the manager only ever installs a mutually-compatible
  set, so a registry that briefly holds one side first is safe.
- It must still fail loudly (`incompatible` / `missing-component`) when *neither*
  a published release *nor* any counterpart tag satisfies the ranges.
- Every behavior change here ships with a matching case in
  `scripts/resolve-core-candidate.test.mjs` (`npm test`, fully offline).

## Trust-level rules

Each plugin release document (`releases/plugins/<id>-<version>.json`) declares
`official: true|false`, derived from the manifest `security.trustLevel`. The
trust-field guard (`scripts/guard-trust-fields.mjs`) follows every `plugins[]`
ref and adds the following semantic constraints to an `official` release:

- `security.keyId` MUST NOT be `dev` and MUST NOT be empty.
- `security.signature` and `security.keyId` MUST NOT contain the literal
  substring `PLACEHOLDER`.
- `security.signature` MUST be non-empty.
- `artifacts.sha256` MUST NOT be the all-zero placeholder.

If a real production signing key is not yet wired up, declare entries
as `trustLevel: "untrusted"`. Hosts running with
`SELFHELP_PLUGIN_REQUIRE_SIGNATURE=true` (the default) will refuse to
install untrusted entries; that is the intended state during the
bootstrap phase.

## Adding or updating a plugin entry

The plugin author runs the plugin's own `scripts/publish-to-registry.mjs`
which:

1. Builds the `.shplugin` (the install artifact the backend downloads + extracts;
   the backend self-hosts the runtime, so loose ESM bundles are no longer
   published here).
2. Computes SHA-256 of the `.shplugin`.
3. Calls this repo's `scripts/build-plugin-release.mjs` to map the manifest onto
   a `plugin-release.schema.json` document (pinning the archive sha256), then
   `scripts/sign-release.mjs` to Ed25519-sign it into
   `releases/plugins/<plugin-id>-<version>.json`.
4. Copies the manifest to `manifests/<plugin-id>-<version>.json`, the `.shplugin`
   to `artifacts/<plugin-id>-<version>.shplugin`, and adds the release **ref**
   (`{id, version, channel, releaseUrl}`) to `registry.json` `plugins[]`
   (multi-version: keeps every other version, replaces only the same id+version).
5. Commits + pushes — this repo's workflow republishes the static
   site.

The author never edits files in this repo manually for normal
publishes. A plugin with several published versions has several
`plugins[]` refs; the CMS resolves the newest version compatible with each host.

## Validation commands

Run from the repo root:

- `npm ci`
- `npm run validate` — schema validation of `registry.json`.
- `npm run validate:unified` — cross-check refs and verify signed release docs.
- `npm test` — offline unit tests for release assembly, publishing, and resolver behavior.
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
