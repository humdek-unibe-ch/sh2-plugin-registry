# Signing and Trust

Audience: Plugin authors, platform release engineers, and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-09.
Source of truth: `scripts/sign.mjs`, `scripts/sign-release.mjs`, `scripts/validate-unified.mjs`, `scripts/guard-trust-fields.mjs`, `.github/workflows/publish-core-release.yml`, and the host `PluginSignatureVerifier`.

The same Ed25519 trust model covers both kinds of registry content: **plugin
entries** (signed with `sign.mjs`, below) and **platform releases** —
core/frontend/scheduler/worker — signed with `sign-release.mjs`
(see [Signing platform releases](#signing-platform-releases)). Both verify against
the public keys in `keys/trusted-keys.json`.

## Generating an Ed25519 keypair

```bash
cd sh2-plugin-registry
npm install
npm run keygen
```

`npm run keygen` runs `node scripts/sign.mjs keygen` and prints the base64-encoded public and private keys plus where to store each:

- `privateKey` -> CI secret `SELFHELP_PLUGIN_SIGNING_KEY` (and `SELFHELP_PLUGIN_SIGNING_KEY_ID` for the matching key id).
- `publicKey` -> seeded into the host environment as `SELFHELP_PLUGIN_TRUSTED_KEYS=<keyId>;<base64-public-key>`.

`SELFHELP_PLUGIN_DEV_SIGNING_KEY` is the local-dev fallback (its key id defaults to `dev`); CI rejects releases signed with `dev` for the `official` channel.

Never commit a private key or paste it into docs. Store keys only in CI secrets and the host environment.

## How signing works

`scripts/sign.mjs` has three sub-commands:

- `build-payload --input <json>` - normalizes and sorts the entry fields and emits the canonical signed payload. The output is byte-identical to the PHP `SignedPayloadBuilder` in `sh-selfhelp_backend`, so the host can verify exactly what CI signed.
- `sign --payload <path>` - signs the canonical payload with an Ed25519 private key and writes `{keyId, signature, signedPayload}`.
- `keygen` - generates a fresh keypair for bootstrapping.

`scripts/build-registry-entry.mjs` chains `build-payload` and `sign` to produce a complete `pluginEntry`.

## Trust-field guard

`scripts/guard-trust-fields.mjs` (run by the `build-registry` workflow and via `npm run guard:trust`) rejects any entry that claims `trustLevel: "official"` or `trustLevel: "reviewed"` while still carrying placeholder, empty, or `dev` signing fields, or the all-zero checksum. Specifically, for `official`/`reviewed` entries it requires:

- `keyId` is not `dev` and not empty.
- `signature`, `signedPayload`, and `keyId` contain no `PLACEHOLDER` substring.
- `signature` and `signedPayload` are non-empty.
- `checksums.frontendEsm` is not the all-zero placeholder.

Until the publishing pipeline is wired with a real production Ed25519 key, every entry must declare `trustLevel: "untrusted"`. Hosts running with `SELFHELP_PLUGIN_REQUIRE_SIGNATURE=true` (the default) refuse to install untrusted entries, which is the intended state during this bootstrap phase.

## Signing platform releases

Core, frontend, scheduler, and worker releases are signed documents under
`releases/<kind>/<id>.json`. They are signed with `scripts/sign-release.mjs`:

```bash
node scripts/sign-release.mjs --input releases/<kind>/<id>.json \
  --key "$SELFHELP_PLUGIN_SIGNING_KEY" --key-id "$SELFHELP_PLUGIN_SIGNING_KEY_ID"
```

- The signature is an Ed25519 detached signature over the **canonical JSON of the
  release without its `security` block** — the same canonical form the manager's
  `@shm/registry` re-computes and the PHP `SignedPayloadBuilder` produces.
- It writes the `security` block `{signature, keyId, signedPayloadSha256}` back
  into the release document.
- With no key in the environment it falls back to the deterministic **dev** key
  (the committed fixtures' key). The manager refuses `dev`-keyed releases in
  production, so use a real key for any `stable` release.

`scripts/validate-unified.mjs` (`npm run validate:unified`, and the CI
`build-registry` workflow) re-verifies every signed release against
`keys/trusted-keys.json` on every push — a broken or untrusted signature fails the
build before it can reach a manager.

### Production signing via the publish workflow

For a real public release you do not run `sign-release.mjs` by hand. The
**`publish-core-release`** workflow (`.github/workflows/publish-core-release.yml`,
`workflow_dispatch`) signs with the production key read from the repo secrets
`SELFHELP_PLUGIN_SIGNING_KEY` + `SELFHELP_PLUGIN_SIGNING_KEY_ID`, then opens a
**reviewed pull request** — it never pushes to `main` or publishes Pages by
itself. The workflow **refuses to dev-sign** any channel other than `test`, so a
missing production secret fails fast instead of shipping a `dev`-keyed `stable`
release the manager would reject. The end-to-end runbook is in
[publishing.md](publishing.md) ("Real public release: end-to-end runbook").

## Trusted keys and key rotation

`keys/trusted-keys.json` (schema `trusted-keys.schema.json`) holds only **public**
Ed25519 keys, each with a `keyId`. To rotate or add a publisher key: add the new
public key, re-sign the affected releases/entries with the new private key, and
publish the updated trusted-keys file. Hosts and the manager resolve `keyId`
against this file (hosts via `SELFHELP_PLUGIN_TRUSTED_KEYS`, the manager via its
trusted-keys path). Never commit private keys.
