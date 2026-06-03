# Signing and Trust

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-03.
Source of truth: `scripts/sign.mjs`, `scripts/guard-trust-fields.mjs`, and the host `PluginSignatureVerifier`.

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
