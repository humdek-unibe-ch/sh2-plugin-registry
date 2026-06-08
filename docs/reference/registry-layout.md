# Registry Layout and Entry Schema

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-08.
Source of truth: `registry.json`, `registry.schema.json`, `core-release.schema.json`, `frontend-release.schema.json`, `scheduler-release.schema.json`, `worker-release.schema.json`, `compatibility.schema.json`, `trusted-keys.schema.json`, `advisory-feed.schema.json`, `plugin-manifest.schema.json`, and the repository tree.

## Unified registry (core + frontend + plugins)

This repository is the **one official SelfHelp registry**. In addition to the
plugin catalogue, it serves the signed **core**, **frontend**, **scheduler**,
and **worker** release metadata consumed by the SelfHelp Manager (`sh-manager`).
There is no second registry.

`registry.json` gained these top-level keys (all additive; the existing
`plugins[]` contract is unchanged):

| Field | Description |
| --- | --- |
| `requiresManager` | Minimum `sh-manager` semver range that may consume this registry. |
| `core[]` | Release refs `{id, version, channel, releaseUrl}` → `releases/core/<id>.json`. |
| `frontend[]` | Release refs → `releases/frontend/<id>.json`. |
| `scheduler[]` | First-class scheduled-jobs-runner release refs → `releases/scheduler/<id>.json`. |
| `worker[]` | First-class Messenger-worker release refs → `releases/worker/<id>.json`. |
| `trustedKeysUrl` | Path to `keys/trusted-keys.json` (public Ed25519 keys). |
| `advisoriesUrl` | Path to `advisories.json` (security advisory feed). |

The **scheduler** and **worker** are built from the same core source as the
backend, but they are published as **independently versioned, separately
pinnable artifacts** so an instance can run a distinct scheduler/worker version
(invariant: every instance owns its own backend/frontend/scheduler/worker
versions). Their release docs mirror the frontend release shape with a
`backendCompatibility.requiredCoreRange` (and optional `requiredApiVersion`);
the manager resolves the newest non-blocked scheduler/worker whose
`requiredCoreRange` the chosen core version satisfies (`@shm/resolver`
`pickSchedulerForCore` / `pickWorkerForCore`).

Each `releases/**/*.json` file is a fully signed release: it carries a
`security` block `{signature, keyId, signedPayloadSha256}`. The signature is an
Ed25519 detached signature over the canonical JSON of the release **without** its
`security` block — the same canonical form produced by `scripts/sign-release.mjs`
and consumed by the manager's `@shm/registry`. `scripts/validate-unified.mjs`
re-verifies every signed core/frontend/scheduler/worker release against
`keys/trusted-keys.json` on every push.

Re-sign a release document after editing it with
`node scripts/sign-release.mjs --input releases/<kind>/<id>.json`. With no
signing key in the environment it uses the deterministic dev key (the committed
fixtures' key); production signing passes `--key`/`SELFHELP_PLUGIN_SIGNING_KEY`
+ `--key-id`.

## Repository layout

```text
sh2-plugin-registry/
├── README.md
├── registry.json                       # the file every host + manager downloads
├── registry.schema.json                # registry index schema (plugins + core/frontend refs)
├── core-release.schema.json            # signed core release schema
├── frontend-release.schema.json        # signed frontend release schema
├── scheduler-release.schema.json       # signed scheduler release schema
├── worker-release.schema.json          # signed worker release schema
├── compatibility.schema.json           # reusable backendCompatibility descriptor
├── trusted-keys.schema.json            # public Ed25519 trusted-keys schema
├── advisory-feed.schema.json           # security advisory feed schema
├── plugin-manifest.schema.json         # canonical plugin.json schema
├── advisories.json                     # security advisory feed
├── keys/
│   └── trusted-keys.json               # public Ed25519 keys (no private material)
├── releases/
│   ├── core/<id>.json                  # signed SelfHelp core releases
│   ├── frontend/<id>.json              # signed SelfHelp frontend releases
│   ├── scheduler/<id>.json             # signed SelfHelp scheduler releases
│   └── worker/<id>.json                # signed SelfHelp worker releases
├── manifests/
│   └── <plugin-id>-<version>.json      # canonical plugin.json snapshot
├── artifacts/
│   └── <plugin-id>-<version>/          # published runtime ESM + CSS
│       ├── plugin.esm.js
│       └── plugin.css
└── scripts/
    ├── sign.mjs                        # canonical plugin payload + Ed25519 signer
    ├── sign-release.mjs                # signs a core/frontend/scheduler/worker release doc
    ├── validate-unified.mjs            # validates index + releases + verifies signatures
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
