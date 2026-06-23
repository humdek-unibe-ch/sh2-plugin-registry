# Registry Reference

Audience: Plugin authors and registry maintainers.
Status: active.
Applies to: `sh2-plugin-registry`.
Last verified: 2026-06-23.
Source of truth: `registry.json`, `registry.schema.json`, and `plugin-manifest.schema.json`.

- [registry-layout.md](registry-layout.md) - Repository layout, the per-version files, the `registry.json` entry schema and required/optional fields, schema validation, and publishing channels.
- [mobile-preview-release.md](mobile-preview-release.md) - The `selfhelp-mobile-preview` release kind (Expo web export image served behind the CMS for in-browser mobile preview): document fields, the `mobilePreview[]` index ref, and the auto-staging workflow. Live in the pipeline.
- [mobile-release.md](mobile-release.md) - Design notes for the future mobile-release channel (the EAS app binary) and the private HeroUI Pro UI distribution chain (private repo -> private CI -> private image -> manager pulls by digest). Not yet wired into the pipeline.
