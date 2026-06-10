# Registry Operations

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-10.
Source of truth: `scripts/`, `.github/workflows/build-registry.yml`, and `package.json`.

- [release-runbook.md](release-runbook.md) - Step-by-step release guide: when to tag backend/frontend/plugins, what runs automatically, how to publish a signed platform release, and which keys/secrets go where.
- [publishing.md](publishing.md) - Adding or updating a plugin, and how the `build-registry` workflow publishes the site.
- [signing.md](signing.md) - Generating an Ed25519 keypair, signing entries, key storage, and the trust-field guard.
