# Registry Operations

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-03.
Source of truth: `scripts/`, `.github/workflows/build-registry.yml`, and `package.json`.

- [publishing.md](publishing.md) - Adding or updating a plugin, and how the `build-registry` workflow publishes the site.
- [signing.md](signing.md) - Generating an Ed25519 keypair, signing entries, key storage, and the trust-field guard.
