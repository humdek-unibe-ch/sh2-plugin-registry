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
├── registry.json              ← the file every host downloads
└── manifests/
    └── <plugin-id>-<version>.json   ← copy of the plugin's plugin.json
```

`registry.json` lists every plugin we advertise. Each entry can either
embed the full manifest under `manifest`, or point at a separate file
via `manifestUrl` (used here so `registry.json` stays compact even as
the catalogue grows).

## Adding or updating a plugin

A plugin author runs the `scripts/publish-to-registry.{ps1,sh}` script
shipped with the plugin (e.g.
[`sh2-shp-survey-js/scripts/publish-to-registry.ps1`](https://github.com/humdek-unibe-ch/sh2-shp-survey-js/blob/main/scripts/publish-to-registry.ps1)).
That script:

1. Validates the plugin's `plugin.json` against the host's manifest
   schema (vendored copy at `docs/plugins/plugin-manifest.schema.json`).
2. Builds the frontend + mobile npm packages and (optionally) publishes
   them to npm.
3. Copies the manifest to
   `manifests/<plugin-id>-<version>.json` in this repo.
4. Updates `registry.json` to reference the new manifest version.
5. Commits, optionally pushes, and optionally opens a PR.

After the workflow auto-publishes via GitHub Pages, every host with
the `humdek-public` source enabled sees the new plugin in their
**Available** tab on the next refresh.

## Listing fields

Each plugin entry in `registry.json` has these fields:

| Field         | Type           | Required | Description                                                                    |
| ------------- | -------------- | -------- | ------------------------------------------------------------------------------ |
| `id`          | string         | yes      | The plugin id (matches `plugin.json` `id`).                                    |
| `name`        | string         | yes      | Human-friendly plugin name.                                                    |
| `description` | string         | no       | Short marketing-style description.                                             |
| `version`     | semver string  | yes      | Latest version we advertise.                                                   |
| `trustLevel`  | string         | yes      | `official`, `reviewed`, or `untrusted`. Drives the trust badge in the host UI. |
| `homepage`    | URL            | no       | Source repo or product page.                                                   |
| `manifest`    | object         | no       | Inline copy of `plugin.json`. Use either `manifest` or `manifestUrl`.          |
| `manifestUrl` | URL            | no       | Pointer to a versioned `<plugin-id>-<version>.json` file in this repo.         |

The host validates the merged manifest against
`docs/plugins/plugin-manifest.schema.json` before accepting it for
install, so adding a malformed entry here does NOT break running hosts —
the install simply fails fast.

## Channels

The host's `PluginSource.channel` is a free-form string. By convention
we publish in:

- `stable` — production-ready releases (semver MAJOR.MINOR.PATCH).
- `beta`   — feature-complete pre-release.
- `rc`     — release candidate.
- `dev`    — bleeding edge, not for production hosts.

Multiple channels are served from a single `registry.json` by including
a `channel` field on each entry. The host filters on the channel
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
pre-built manifest files via the `publish-to-registry` script.

## License

MPL-2.0 © Humdek, University of Bern.
