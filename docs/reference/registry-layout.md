# Registry Layout and Entry Schema

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-23.
Source of truth: `registry.json`, `registry.schema.json`, `plugin-release.schema.json`, `core-release.schema.json`, `frontend-release.schema.json`, `scheduler-release.schema.json`, `worker-release.schema.json`, `mobile-preview-release.schema.json`, `compatibility.schema.json`, `trusted-keys.schema.json`, `advisory-feed.schema.json`, `plugin-manifest.schema.json`, and the repository tree.

## Unified registry (core + frontend + plugins)

This repository is the **one official SelfHelp registry**. In addition to the
plugin catalogue, it serves the signed **core**, **frontend**, **scheduler**,
**worker**, and **mobile-preview** release metadata consumed by the SelfHelp
Manager (`sh-manager`). There is no second registry.

`registry.json` is a unified index of **release refs** — every kind (plugins and
platform components alike) is `{id, version, channel, releaseUrl}` pointing at a
standalone signed release document:

| Field | Description |
| --- | --- |
| `requiresManager` | Minimum `sh-manager` semver range that may consume this registry. |
| `plugins[]` | **Multi-version** plugin release refs `{id, version, channel, releaseUrl}` → `releases/plugins/<id>-<version>.json`. One ref per published version of a plugin. |
| `core[]` | Release refs `{id, version, channel, releaseUrl}` → `releases/core/<id>.json`. |
| `frontend[]` | Release refs → `releases/frontend/<id>.json`. |
| `scheduler[]` | First-class scheduled-jobs-runner release refs → `releases/scheduler/<id>.json`. |
| `worker[]` | First-class Messenger-worker release refs → `releases/worker/<id>.json`. |
| `mobilePreview[]` | **Multi-version** `selfhelp-mobile-preview` image release refs → `releases/mobile-preview/<id>.json`. Optional (additive, `registry.schemaVersion` `1.1`). |
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

The **mobile-preview** image (`selfhelp-mobile-preview`) is the Expo **web
export** of the mobile app, served behind the CMS so an admin can preview the
mobile rendering of a page in-browser. It is **not** the EAS app binary (that is
the design-only `selfhelp-mobile-release` kind — see
[mobile-release.md](mobile-release.md)). Its release doc mirrors the frontend
shape (`image` + `digest` + `backendCompatibility`) and additionally carries
`mobileRendererVersion` (the mobile renderer contract the image is built against,
mirroring `@selfhelp/shared` `MOBILE_RENDERER_VERSION`) and `bundledPlugins[]`
(the curated official-plugin packages baked into the image). The full field
reference is in [mobile-preview-release.md](mobile-preview-release.md).

Each `releases/**/*.json` file is a fully signed release: it carries a
`security` block `{signature, keyId, signedPayloadSha256}`. The signature is an
Ed25519 detached signature over the canonical JSON of the release **without** its
`security` block — the same canonical form produced by `scripts/sign-release.mjs`
and consumed by the manager's `@shm/registry` and the host's
`PluginSignatureVerifier`. `scripts/validate-unified.mjs` re-verifies every signed
plugin, core, frontend, scheduler, and worker release against
`keys/trusted-keys.json` on every push.

Re-sign a release document after editing it with
`node scripts/sign-release.mjs --input releases/<kind>/<id>.json`. With no
signing key in the environment it uses the deterministic dev fixture key
(keyId `selfhelp-dev-fixture`, the manager fixtures' key) — that key is NOT in
`keys/trusted-keys.json`, so `validate:unified` rejects such documents;
production signing passes `--key`/`SELFHELP_SIGNING_KEY` + `--key-id`. Every
committed release document is signed with the production `prod` key.

## Repository layout

```text
sh2-plugin-registry/
├── README.md
├── registry.json                       # the unified index every host + manager downloads
├── registry.schema.json                # index schema (release refs for plugins + core/frontend/scheduler/worker)
├── plugin-release.schema.json          # signed plugin release schema
├── core-release.schema.json            # signed core release schema
├── frontend-release.schema.json        # signed frontend release schema
├── scheduler-release.schema.json       # signed scheduler release schema
├── worker-release.schema.json          # signed worker release schema
├── mobile-preview-release.schema.json  # signed selfhelp-mobile-preview release schema
├── compatibility.schema.json           # reusable backendCompatibility descriptor
├── trusted-keys.schema.json            # public Ed25519 trusted-keys schema
├── advisory-feed.schema.json           # security advisory feed schema
├── plugin-manifest.schema.json         # canonical plugin.json schema
├── advisories.json                     # security advisory feed
├── keys/
│   └── trusted-keys.json               # public Ed25519 keys (no private material)
├── releases/
│   ├── plugins/<id>-<version>.json     # signed plugin releases (one per version)
│   ├── core/<id>.json                  # signed SelfHelp core releases
│   ├── frontend/<id>.json              # signed SelfHelp frontend releases
│   ├── scheduler/<id>.json             # signed SelfHelp scheduler releases
│   ├── worker/<id>.json                # signed SelfHelp worker releases
│   └── mobile-preview/<id>.json        # signed selfhelp-mobile-preview releases
├── manifests/
│   └── <plugin-id>-<version>.json      # canonical plugin.json snapshot
├── artifacts/
│   └── <plugin-id>-<version>.shplugin  # signed .shplugin install artifact
└── scripts/
    ├── sign.mjs                        # canonical .shplugin payload + Ed25519 signer
    ├── sign-release.mjs                # signs any release doc (plugin/core/frontend/scheduler/worker)
    ├── build-plugin-release.mjs        # assembles an unsigned plugin release doc from a manifest
    ├── validate-unified.mjs            # validates index + releases + verifies signatures
    └── guard-trust-fields.mjs          # rejects fake official/reviewed trust
```

Every plugin version that ships through this registry has:

- one `manifests/<id>-<version>.json` file (the canonical plugin manifest),
- one `artifacts/<id>-<version>.shplugin` install artifact (the backend downloads + checksum-verifies it, then extracts + self-hosts the runtime),
- one signed `releases/plugins/<id>-<version>.json` document that pins the archive URL + SHA-256 and declares `compatibility.{core,pluginApi}`, plus an Ed25519 `security` block,
- one ref in `registry.json` `plugins[]` (`{id, version, channel, releaseUrl}`).

## How a host uses the registry

When an admin opens the **Available** tab, the host calls `GET /cms-api/v1/admin/plugins/available`. The backend walks every enabled `PluginSource`, fetches `<base-url>/registry.json` for each, merges the entries with the installed-plugin list, and returns the deduplicated set to the UI.

The default `humdek-public` source is seeded by the host migration `Version20260522110723`. It is read-only via the admin UI: admins can disable it but cannot edit its URL, kind, or trust level, which prevents pointing the "official" channel at an attacker-controlled URL.

## Release validation

`registry.json` is validated against `registry.schema.json` on every push (each
`plugins[]` item is a release ref `{id, version, channel, releaseUrl}`). Each
referenced `releases/plugins/<id>-<version>.json` is then validated against
`plugin-release.schema.json` and Ed25519-verified by `scripts/validate-unified.mjs`
against `keys/trusted-keys.json`; mismatched id/version between the ref and the
document is rejected.

## Plugin release document fields

A `releases/plugins/<id>-<version>.json` document carries:

| Field | Description |
| --- | --- |
| `kind` | Always `selfhelp-plugin-release`. |
| `id`, `version`, `channel` | Match the ref in `registry.json`. |
| `official` | `true` when the manifest `security.trustLevel` is `official`. |
| `compatibility` | `{core, pluginApi}` semver ranges the host must satisfy (mapped from the manifest `compatibility.selfhelp` + `pluginApiVersion`). The CMS resolves the newest version whose `core` range the host satisfies. |
| `dependencies` | Optional other-plugin requirements `{id, range}`. |
| `artifacts` | `{manifestUrl, archiveUrl, sha256}`. The host fetches `manifestUrl` for the Available list and downloads + checksum-verifies `archiveUrl` (the `.shplugin`) at install. |
| `security` | `{signature, keyId, signedPayloadSha256}` — Ed25519 over the canonical JSON of the document **without** `security` (byte-identical to the PHP `CanonicalJson`/`PluginSignatureVerifier`). |

## Channels

The host's `PluginSource.channel` is a free-form string. By convention the registry publishes in:

- `stable` - production-ready releases (semver MAJOR.MINOR.PATCH).
- `beta` - feature-complete pre-release.
- `nightly` - bleeding edge, not for production hosts.
- `test` - rehearsal/staging channel served from a non-public registry, never `stable` without a real production key.

Multiple channels are served from a single `registry.json` by setting the `channel` field per ref; the host filters on the channel configured on its source row.
