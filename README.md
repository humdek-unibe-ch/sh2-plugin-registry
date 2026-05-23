<!--
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
-->

# sh2-plugin-registry

Official public registry of SelfHelp v2 plugins. Every SelfHelp host
ships with this URL as the seeded `humdek-public` plugin source, so
admins see the catalogue listed below the moment they open
`Admin → Plugins → Available`.

> **Site URL:** <https://humdek-unibe-ch.github.io/sh2-plugin-registry/>
>
> **Source repository:** <https://github.com/humdek-unibe-ch/sh2-plugin-registry>

## How a SelfHelp host uses this repo

When the admin opens the **Available** tab, the host calls
`GET /cms-api/v1/admin/plugins/available`. The backend walks every
enabled `PluginSource` and, for each one, fetches `<base-url>/registry.json`.
It then merges the entries with the installed-plugin list and returns
the deduplicated set to the UI.

The default `humdek-public` source is seeded by the host migration
`Version20260522110723`. It is **read-only via the admin UI** — admins
can disable it if they prefer their own registry, but they cannot edit
its URL, kind, or trust level. This prevents accidentally pointing the
"official" channel at an attacker-controlled URL.

## Repository layout

```text
sh2-plugin-registry/
├── README.md
├── registry.json                       ← the file every host downloads
├── registry.schema.json                ← canonical pluginEntry schema
├── plugin-manifest.schema.json         ← canonical plugin.json schema
├── manifests/
│   └── <plugin-id>-<version>.json      ← canonical plugin.json snapshot
├── artifacts/
│   └── <plugin-id>-<version>/          ← published runtime ESM + CSS
│       ├── plugin.esm.js
│       └── plugin.css
└── scripts/
    ├── sign.mjs                        ← canonical payload + Ed25519 signer
    └── build-registry-entry.mjs        ← assembles a signed pluginEntry
```

Every plugin version that ships through this registry has:

* one `manifests/<id>-<version>.json` file (the canonical plugin manifest),
* one `artifacts/<id>-<version>/` directory with the runtime ESM and
  optional CSS that the host frontend loads via dynamic `import()`,
* one entry in `registry.json` that pins those URLs, the
  `composer.{package,version}`, the SHA-256 checksums of the runtime
  artifacts, and an Ed25519 `signature` of the canonical signed payload.

`registry.json` is validated against `registry.schema.json` on every push.
The pluginEntry schema **requires** `composer`, `runtime`, `checksums`,
`signature`, `signedPayload`, and `keyId` — entries without those fields
are rejected before they reach a host.

## Adding or updating a plugin

A plugin author runs the `scripts/publish-to-registry.{ps1,sh}` script
shipped with the plugin (e.g.
[`sh2-shp-survey-js/scripts/publish-to-registry.ps1`](https://github.com/humdek-unibe-ch/sh2-shp-survey-js/blob/main/scripts/publish-to-registry.ps1)).
That script:

1. Builds the plugin's `.shplugin` archive locally (`scripts/build-shplugin`).
2. Validates the embedded `plugin.json` against the canonical manifest
   schema vendored in this repo.
3. Computes SHA-256 checksums of the runtime ESM + CSS shipped inside
   the archive.
4. Calls the shared `selfhelp-plugin-build-registry-entry` script
   (this repo, `scripts/build-registry-entry.mjs`) which constructs the
   canonical signed payload via `sign.mjs build-payload`, signs it with
   `sign.mjs sign`, and emits a `pluginEntry` JSON ready to splice into
   `registry.json`.
5. Copies the manifest to `manifests/<plugin-id>-<version>.json`,
   copies the runtime artifacts under
   `artifacts/<plugin-id>-<version>/`, and updates `registry.json`.
6. Commits + pushes the registry change (the workflow on this repo
   republishes GitHub Pages) and runs `gh release create v<version>
   dist/<plugin-id>-<version>.shplugin --notes-file CHANGELOG.md` so
   the `.shplugin` is also attached as a release asset for offline
   installs.

After the GitHub Pages job finishes every host with the
`humdek-public` source enabled sees the new plugin in their
**Available** tab on the next refresh.

## Generating an Ed25519 keypair

```bash
cd sh2-plugin-registry
npm install
npm run keygen
```

The output prints the base64-encoded public + private key plus a
reminder of where to store each:

* `privateKey` → CI secret `SELFHELP_PLUGIN_SIGNING_KEY`
  (and `SELFHELP_PLUGIN_SIGNING_KEY_ID` for the matching key id).
* `publicKey`  → seeded into the host environment as
  `SELFHELP_PLUGIN_TRUSTED_KEYS=<keyId>;<base64-public-key>`.

`SELFHELP_PLUGIN_DEV_SIGNING_KEY` is the local-dev fallback (keyId
defaults to `dev`); CI rejects releases signed with `dev` for the
`official` channel.

## Listing fields

Each plugin entry in `registry.json` is validated by
`registry.schema.json`. The non-obvious required fields are:

| Field           | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| `composer`      | `{package, version, repository?}`. The host runs `composer require` against this exactly. |
| `runtime`       | `{entrypointUrl, format, stylesheetUrl?, integrity?, stylesheetIntegrity?}`. The host frontend `import()`s the entrypoint at runtime. |
| `checksums`     | `{frontendEsm, frontendCss?}`. Host fetches the runtime files and verifies the hex SHA-256 before loading. |
| `signature`     | Base64-encoded detached Ed25519 signature of `signedPayload`.               |
| `signedPayload` | Canonical JSON document produced by `sign.mjs build-payload`. Byte-identical to the PHP `SignedPayloadBuilder`. |
| `keyId`         | Publisher key identifier; host resolves it via `SELFHELP_PLUGIN_TRUSTED_KEYS`. |

Optional helpers:

| Field          | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `manifestUrl`  | Relative path to the full `plugin.json` snapshot under `manifests/`.        |
| `changelogUrl` | URL of the release's CHANGELOG.md.                                          |

## Channels

The host's `PluginSource.channel` is a free-form string. By convention
we publish in:

- `stable`  — production-ready releases (semver MAJOR.MINOR.PATCH).
- `beta`    — feature-complete pre-release.
- `alpha`   — early pre-release with known gaps.
- `nightly` — bleeding edge, not for production hosts.

Multiple channels are served from a single `registry.json` by setting
the `channel` field per entry. The host filters on the channel
configured on its source row.

## Releasing a new registry build (maintainer notes)

Every push to `main` triggers the
`.github/workflows/build-registry.yml` job which:

1. Validates `registry.json` against `registry.schema.json`.
2. Validates each manifest under `manifests/` against
   `plugin-manifest.schema.json`.
3. Publishes the contents of the repo (excluding the workflows
   directory) to GitHub Pages.

Plugins do not run their own build step inside this repo; they push
pre-built `.shplugin` artifacts + manifest files + the signed
registry entry via the `publish-to-registry` script.

## License

MPL-2.0 © Humdek, University of Bern.
