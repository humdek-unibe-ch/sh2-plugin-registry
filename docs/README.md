<!--
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
-->
# SelfHelp Plugin Registry Documentation

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry` (the official SelfHelp v2 plugin registry).
Last verified: 2026-06-10.
Source of truth: `registry.json`, `registry.schema.json`, `plugin-manifest.schema.json`, `scripts/`, and `.github/workflows/build-registry.yml`.

Navigation entrypoint for the registry documentation, organized by audience and purpose per the Documentation Rules in `AGENTS.md`. The root [../README.md](../README.md) is the short overview.

## Documentation map

| Folder | Use for |
| --- | --- |
| [reference/](reference/index.md) | Registry layout, the `registry.json` entry schema and required fields, and publishing channels. |
| [operations/](operations/index.md) | Publishing a plugin, releasing a registry build, and the Ed25519 signing/trust workflow. |

## Start here

| Need | Read |
| --- | --- |
| Step-by-step: release backend/frontend/plugins end to end (tags, digests, keys, order) | [operations/release-runbook.md](operations/release-runbook.md) |
| How the registry repo is laid out and what each entry must contain | [reference/registry-layout.md](reference/registry-layout.md) |
| The `selfhelp-mobile-preview` release kind (fields, index ref, auto-staging) | [reference/mobile-preview-release.md](reference/mobile-preview-release.md) |
| How a plugin author publishes or updates a plugin | [operations/publishing.md](operations/publishing.md) |
| How signing keys, signatures, and trust levels work | [operations/signing.md](operations/signing.md) |

## Conventions

- Every active doc starts with the metadata block (`Audience`, `Status`, `Applies to`, `Last verified`, `Source of truth`).
- Filenames use lowercase kebab-case; this file (`README.md`) is the only uppercase docs entrypoint, and subfolder indexes are `index.md`.
- The schemas, scripts, `registry.json`, and the build workflow are the source of truth. When a doc conflicts with them, the code wins and the doc is corrected.
