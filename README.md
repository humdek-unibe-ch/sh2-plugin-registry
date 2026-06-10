<!--
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
-->

# sh2-plugin-registry

The **one official SelfHelp v2 registry**. It serves both the **plugin catalogue**
(every SelfHelp host ships with this URL as the seeded `humdek-public` plugin
source, so admins see the catalogue the moment they open
`Admin -> Plugins -> Available`) and the signed **platform release** metadata —
**core**, **frontend**, **scheduler**, and **worker** — consumed by the SelfHelp
Manager (`sh-manager`). There is no second registry.

> **Site URL:** <https://humdek-unibe-ch.github.io/sh2-plugin-registry/>
>
> **Source repository:** <https://github.com/humdek-unibe-ch/sh2-plugin-registry>

## How a host uses this repo

When an admin opens the **Available** tab, the host calls `GET /cms-api/v1/admin/plugins/available`, fetches `<base-url>/registry.json` for every enabled plugin source, merges the entries with the installed list, and returns the deduplicated set to the UI. The default `humdek-public` source is seeded by the host migration `Version20260522110723` and is read-only via the admin UI.

## Repository layout

```text
sh2-plugin-registry/
├── registry.json                  # the file every host downloads
├── registry.schema.json           # canonical pluginEntry schema
├── plugin-manifest.schema.json    # canonical plugin.json schema
├── manifests/<id>-<version>.json  # canonical plugin.json snapshots
├── artifacts/<id>-<version>/      # published runtime ESM + CSS
└── scripts/                       # signing + registry-entry tooling
```

`registry.json` is validated against `registry.schema.json` on every push, and `scripts/guard-trust-fields.mjs` rejects any `official`/`reviewed` entry that still carries placeholder or `dev` signing fields. Until the pipeline is wired with a real production key, entries must declare `trustLevel: "untrusted"`.

## Local scripts

```bash
npm install
npm run validate         # validate registry.json against the schema
npm run validate:unified # validate the index + signed core/frontend/scheduler/worker releases and re-verify signatures
npm run guard:trust      # enforce trust-field rules
npm run keygen           # generate an Ed25519 keypair (bootstrapping)
```

Platform release docs under `releases/<kind>/<id>.json` are signed with
`node scripts/sign-release.mjs --input <file>` (see the signing guide).

## Documentation

Full documentation lives in [docs/](docs/README.md):

- **Start here — step-by-step release runbook** (tags, order, keys, troubleshooting): [docs/operations/release-runbook.md](docs/operations/release-runbook.md)
- Registry layout and entry schema (plugins + core/frontend/scheduler/worker): [docs/reference/registry-layout.md](docs/reference/registry-layout.md)
- Publishing plugins and platform releases: [docs/operations/publishing.md](docs/operations/publishing.md)
- Signing keys, release signing, and trust levels: [docs/operations/signing.md](docs/operations/signing.md)
- Changelog: [CHANGELOG.md](CHANGELOG.md)

## License

MPL-2.0 © Humdek, University of Bern.
