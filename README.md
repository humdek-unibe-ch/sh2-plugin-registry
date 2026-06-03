<!--
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
-->

# sh2-plugin-registry

Official public registry of SelfHelp v2 plugins. Every SelfHelp host ships with this URL as the seeded `humdek-public` plugin source, so admins see the catalogue the moment they open `Admin -> Plugins -> Available`.

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
npm run validate      # validate registry.json against the schema
npm run guard:trust   # enforce trust-field rules
npm run keygen        # generate an Ed25519 keypair (bootstrapping)
```

## Documentation

Full documentation lives in [docs/](docs/README.md):

- Registry layout and entry schema: [docs/reference/registry-layout.md](docs/reference/registry-layout.md)
- Publishing a plugin and releasing a build: [docs/operations/publishing.md](docs/operations/publishing.md)
- Signing keys and trust levels: [docs/operations/signing.md](docs/operations/signing.md)

## License

MPL-2.0 © Humdek, University of Bern.
