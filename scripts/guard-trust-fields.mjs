#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * Registry trust-field guard (unified release-document contract).
 *
 * Under the unified registry, `plugins[]` is a list of release REFS pointing at
 * signed `plugin-release.schema.json` documents. This guard follows each ref and
 * rejects a release that is `official` (trusted) while still carrying
 * placeholder / dev / empty signing fields. It complements `validate:unified`
 * (which checks schema + verifies the Ed25519 signature): this guard catches the
 * "accidentally shipped a dev/placeholder signature on a trusted release"
 * mistake before it reaches GitHub Pages. Run from the repo root or via
 * `npm run guard:trust`.
 *
 * Rules enforced (matches the host's `PluginSignatureVerifier` + `AGENTS.md`):
 *
 *   - For an `official` plugin release:
 *     - `security.keyId` MUST NOT be `dev` or empty.
 *     - `security.signature` / `security.keyId` MUST NOT contain `PLACEHOLDER`.
 *     - `security.signature` MUST be non-empty.
 *     - `artifacts.sha256` MUST NOT be the all-zero placeholder.
 *
 * The script exits 0 on success and 1 on any violation. The build workflow runs
 * it after the schema/signature validation step.
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { exit, stderr, stdout } from 'node:process';

const REGISTRY_PATH = process.argv[2] || 'registry.json';
const ROOT = path.dirname(path.resolve(REGISTRY_PATH));

const ZERO_HASH = '0'.repeat(64);

function isPlaceholder(value) {
    return typeof value === 'string' && value.includes('PLACEHOLDER');
}

function loadJson(rel) {
    let raw = readFileSync(path.join(ROOT, rel), 'utf8');
    if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
    return JSON.parse(raw);
}

function violationsFor(release, where) {
    const out = [];
    // Only trusted (official) releases must carry real signing material. A
    // reviewed/untrusted plugin can ship without the strict guarantees.
    if (release.official !== true) {
        return out;
    }
    const security = release.security ?? {};

    if (!security.keyId || security.keyId === 'dev') {
        out.push(`${where}: official release but security.keyId="${security.keyId ?? ''}". Use a real publisher keyId (not "dev" / empty).`);
    }
    for (const field of ['signature', 'keyId']) {
        if (isPlaceholder(security[field])) {
            out.push(`${where}: official release but security.${field} contains "PLACEHOLDER".`);
        }
    }
    if (typeof security.signature !== 'string' || security.signature === '') {
        out.push(`${where}: official release but security.signature is empty.`);
    }
    const sha = String(release.artifacts?.sha256 ?? '').replace(/^sha256:/i, '');
    if (sha === ZERO_HASH) {
        out.push(`${where}: official release but artifacts.sha256 is the all-zero placeholder.`);
    }
    return out;
}

function main() {
    const registry = loadJson(path.basename(REGISTRY_PATH));
    if (!Array.isArray(registry.plugins)) {
        stderr.write(`guard-trust-fields: ${REGISTRY_PATH} has no "plugins" array.\n`);
        exit(1);
    }
    const violations = [];
    for (const ref of registry.plugins) {
        if (!ref || typeof ref.releaseUrl !== 'string') {
            violations.push(`plugins[]: entry is not a release ref ({id,version,channel,releaseUrl}).`);
            continue;
        }
        let release;
        try {
            release = loadJson(ref.releaseUrl);
        } catch (err) {
            violations.push(`${ref.releaseUrl}: cannot read release document (${err instanceof Error ? err.message : String(err)}).`);
            continue;
        }
        violations.push(...violationsFor(release, `${ref.id ?? release.id}@${ref.version ?? release.version}`));
    }
    if (violations.length > 0) {
        stderr.write('Trust-field violations:\n');
        for (const v of violations) stderr.write(`  - ${v}\n`);
        exit(1);
    }
    stdout.write(`OK: no trust-field violations across ${registry.plugins.length} plugin release(s).\n`);
}

main();
