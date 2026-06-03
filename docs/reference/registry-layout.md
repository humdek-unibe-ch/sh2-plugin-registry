# Registry Layout and Entry Schema

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-03.
Source of truth: `registry.json`, `registry.schema.json`, `plugin-manifest.schema.json`, and the repository tree.

## Repository layout

```text
sh2-plugin-registry/
├── README.md
├── registry.json                       # the file every host downloads
├── registry.schema.json                # canonical pluginEntry schema
├── plugin-manifest.schema.json         # canonical plugin.json schema
├── manifests/
│   └── <plugin-id>-<version>.json      # canonical plugin.json snapshot
├── artifacts/
│   └── <plugin-id>-<version>/          # published runtime ESM + CSS
│       ├── plugin.esm.js
│       └── plugin.css
└── scripts/
    ├── sign.mjs                        # canonical payload + Ed25519 signer
    ├── build-registry-entry.mjs        # assembles a signed pluginEntry
    └── guard-trust-fields.mjs          # rejects fake official/reviewed trust
```

Every plugin version that ships through this registry has:

- one `manifests/<id>-<version>.json` file (the canonical plugin manifest),
- one `artifacts/<id>-<version>/` directory with the runtime ESM and optional CSS that the host frontend loads via dynamic `import()`,
- one entry in `registry.json` that pins those URLs, the `composer.{package,version}`, the SHA-256 checksums of the runtime artifacts, and an Ed25519 `signature` of the canonical signed payload.

## How a host uses the registry

When an admin opens the **Available** tab, the host calls `GET /cms-api/v1/admin/plugins/available`. The backend walks every enabled `PluginSource`, fetches `<base-url>/registry.json` for each, merges the entries with the installed-plugin list, and returns the deduplicated set to the UI.

The default `humdek-public` source is seeded by the host migration `Version20260522110723`. It is read-only via the admin UI: admins can disable it but cannot edit its URL, kind, or trust level, which prevents pointing the "official" channel at an attacker-controlled URL.

## Entry validation

`registry.json` is validated against `registry.schema.json` on every push. The pluginEntry schema requires `composer`, `runtime`, `checksums`, `signature`, `signedPayload`, and `keyId`; entries missing those fields are rejected before they reach a host.

## Entry fields

Required (non-obvious) fields:

| Field | Description |
| --- | --- |
| `composer` | `{package, version, repository?}`. The host runs `composer require` against this exactly. |
| `runtime` | `{entrypointUrl, format, stylesheetUrl?, integrity?, stylesheetIntegrity?}`. The host frontend `import()`s the entrypoint at runtime. |
| `checksums` | `{frontendEsm, frontendCss?}`. The host fetches the runtime files and verifies the hex SHA-256 before loading. |
| `signature` | Base64-encoded detached Ed25519 signature of `signedPayload`. |
| `signedPayload` | Canonical JSON document produced by `sign.mjs build-payload`; byte-identical to the PHP `SignedPayloadBuilder`. |
| `keyId` | Publisher key identifier; the host resolves it via `SELFHELP_PLUGIN_TRUSTED_KEYS`. |

Optional helpers:

| Field | Description |
| --- | --- |
| `manifestUrl` | Relative path to the full `plugin.json` snapshot under `manifests/`. |
| `changelogUrl` | URL of the release's `CHANGELOG.md`. |

## Channels

The host's `PluginSource.channel` is a free-form string. By convention the registry publishes in:

- `stable` - production-ready releases (semver MAJOR.MINOR.PATCH).
- `beta` - feature-complete pre-release.
- `alpha` - early pre-release with known gaps.
- `nightly` - bleeding edge, not for production hosts.

Multiple channels are served from a single `registry.json` by setting the `channel` field per entry; the host filters on the channel configured on its source row.
