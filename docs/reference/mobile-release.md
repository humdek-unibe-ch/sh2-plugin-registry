# Mobile release channel and distribution (design)

Audience: Registry maintainers and SelfHelp Manager developers.
Status: design / not yet wired into the pipeline.
Applies to: `sh2-registry`, `sh-manager`, `sh-selfhelp_mobile`, `sh-selfhelp_mobile_pro_ui`.
Last verified: 2026-06-18.
Source of truth: `sh-selfhelp_mobile/docs/developer/mobile-ui-tiers-and-distribution.md` (code-level), `sh-manager/docs/release-publishing.md` (manager-side).

This document records how SelfHelp **mobile** distribution is intended to work so
a future registry/manager feature can target it. None of it is implemented in the
registry pipeline yet (no `selfhelp-mobile-release` kind exists in
`registry.schema.json` / `scripts/assemble-release.mjs`); do not add one until a
real channel is needed.

> Not to be confused with the **`selfhelp-mobile-preview`** kind, which **is**
> live in the pipeline. That is the Expo **web export** image served behind the
> CMS for in-browser mobile preview — a Docker image pinned by digest, not the
> EAS app binary described here. See
> [mobile-preview-release.md](mobile-preview-release.md).

## Why mobile is different

The Dockerised web artifacts (`core` / `frontend` / `scheduler` / `worker`) are
images pinned by digest and resolved by the manager. Mobile cannot work this way:
React Native cannot safely load arbitrary JS at runtime, so both the per-instance
**plugin set** and the private **HeroUI Pro UI tier** are bundled **per EAS
profile** — each CMS instance produces its own mobile binary.

Two tiers exist (see the mobile repo's `mobile-ui-tiers-and-distribution.md`):

- **OSS** (default): in-repo adapters on open `heroui-native`; shipped via Expo
  EAS build + `eas update` (store + OTA).
- **Pro**: the private `@selfhelp/mobile-pro-ui` package, aliased in at build time
  (`SELFHELP_MOBILE_UI_TIER=pro`).

## Private Pro UI distribution chain (out of this public registry)

The Pro tier is private and **never** appears in this public registry:

```text
private GitHub repo (sh-selfhelp_mobile_pro_ui)
  -> private CI            (HeroUI Pro license token injected ONLY here)
  -> private Docker image  (per EAS profile; immutable sha256 digest)
  -> sh-manager pulls      (BY DIGEST, using a Docker/registry pull credential)
```

Credential boundary:

- HeroUI Pro token: **private CI only**. Never in the manager, the registry, this
  repo, or any committed file/doc.
- The manager holds **only** a private Docker/registry pull credential and pulls
  the image **by digest** — it does not build the Pro UI and never sees the token.
- **No npm publishing**: `@selfhelp/mobile-pro-ui` is build-time-aliased, consumed
  only inside the private CI build.

## Proposed public OSS mobile-release shape (mirrors `frontend`)

If public OSS mobile builds are ever tracked here, model them on the existing
`frontend` kind: a signed release document referenced by a `registry.json` ref.
Sketch only (not a live schema — do NOT add `mobile-release.schema.json` to the
validate/assemble pipeline until used):

```jsonc
{
  "kind": "selfhelp-mobile-release",
  "id": "selfhelp-mobile",
  "version": "1.4.0",
  "channel": "stable",            // stable | beta | nightly | test
  "runtime": "expo",              // distinguishes EAS/OTA from Docker images
  "easProfile": "production",
  "updateChannel": "production",  // `eas update --branch`
  "backendCompatibility": { "requiredApiVersion": "v1" },
  "security": { "signature": "<ed25519>", "keyId": "<key>" }
}
```

Note there is **no `image`/`digest`** here (mobile is EAS/OTA, not a Docker
image) and **no Pro field** (the Pro image stays in the private chain above).
