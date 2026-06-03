# Publishing a Plugin

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-03.
Source of truth: `scripts/build-registry-entry.mjs`, `scripts/sign.mjs`, and `.github/workflows/build-registry.yml`.

## Adding or updating a plugin

A plugin author runs the `scripts/publish-to-registry.{ps1,sh}` script shipped with the plugin (for example the SurveyJS plugin's `scripts/publish-to-registry.ps1` at <https://github.com/humdek-unibe-ch/sh2-shp-survey-js>). That script:

1. Builds the plugin's `.shplugin` archive locally (`scripts/build-shplugin`).
2. Validates the embedded `plugin.json` against the canonical manifest schema vendored in this repo (`plugin-manifest.schema.json`).
3. Computes SHA-256 checksums of the runtime ESM + CSS shipped inside the archive.
4. Calls the shared `selfhelp-plugin-build-registry-entry` script (this repo's `scripts/build-registry-entry.mjs`), which constructs the canonical signed payload via `sign.mjs build-payload`, signs it with `sign.mjs sign`, and emits a `pluginEntry` JSON ready to splice into `registry.json`.
5. Copies the manifest to `manifests/<plugin-id>-<version>.json`, copies the runtime artifacts under `artifacts/<plugin-id>-<version>/`, and updates `registry.json`.
6. Commits and pushes the registry change (the workflow on this repo republishes GitHub Pages) and runs `gh release create v<version> dist/<plugin-id>-<version>.shplugin --notes-file CHANGELOG.md` so the `.shplugin` is also attached as a release asset for offline installs.

After the GitHub Pages job finishes, every host with the `humdek-public` source enabled sees the new plugin in its **Available** tab on the next refresh.

## Releasing a registry build (maintainer notes)

Every push to `main` (and every PR against it) triggers `.github/workflows/build-registry.yml`, which:

1. Validates `registry.json` against `registry.schema.json` (`ajv validate`).
2. Runs `scripts/guard-trust-fields.mjs` against `registry.json` (see [signing.md](signing.md)).
3. Verifies `plugin-manifest.schema.json` is byte-identical to the canonical host copy (fetched from `sh-selfhelp_backend`); a drift fails the build.
4. Validates each manifest under `manifests/` against `plugin-manifest.schema.json`.
5. On `main` only: publishes the repository contents (excluding `.git` and `.github`) to GitHub Pages.

Plugins do not run their own build step inside this repo; they push pre-built `.shplugin` artifacts, manifest files, and the signed registry entry via the `publish-to-registry` script.

Local equivalents of the validation steps are available through `package.json` scripts: `npm run validate` (registry schema) and `npm run guard:trust`.
