#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * Registry trust-field guard.
 *
 * Reads `registry.json` and rejects entries that claim
 * `trustLevel: "official"` or `trustLevel: "reviewed"` while still
 * carrying placeholder / dev / empty signing fields. Run from the
 * repo root or via `npm run guard:trust`.
 *
 * Rules enforced (matches the host's `PluginSignatureVerifier` and
 * `AGENTS.md`):
 *
 *   - For `trustLevel ∈ {official, reviewed}`:
 *     - `keyId` MUST NOT be `dev` or empty.
 *     - `signature`, `signedPayload`, `keyId` MUST NOT contain the
 *       literal substring `PLACEHOLDER`.
 *     - `signature` and `signedPayload` MUST be non-empty.
 *     - `checksums.frontendEsm` MUST NOT be the all-zero placeholder.
 *
 * The script exits 0 on success and 1 on any violation. The build
 * workflow runs it after the schema validation step.
 */

import { readFileSync } from 'node:fs';
import { exit, stderr, stdout } from 'node:process';

const REGISTRY_PATH = process.argv[2] || 'registry.json';

const ZERO_HASH = '0'.repeat(64);

function isPlaceholder(value) {
    if (typeof value !== 'string') return false;
    return value.includes('PLACEHOLDER');
}

function violationsFor(entry) {
    const out = [];
    const trust = entry.trustLevel;
    if (trust !== 'official' && trust !== 'reviewed') {
        return out;
    }
    const id = entry.id || '<unknown>';
    const v = entry.version || '<unknown>';
    const where = `${id}@${v}`;

    if (!entry.keyId || entry.keyId === 'dev') {
        out.push(
            `${where}: trustLevel="${trust}" but keyId="${entry.keyId ?? ''}". ` +
                `Use a real publisher keyId (not "dev" / empty).`,
        );
    }
    for (const field of ['signature', 'signedPayload', 'keyId']) {
        if (isPlaceholder(entry[field])) {
            out.push(
                `${where}: trustLevel="${trust}" but ${field} contains "PLACEHOLDER".`,
            );
        }
    }
    for (const field of ['signature', 'signedPayload']) {
        if (typeof entry[field] !== 'string' || entry[field] === '') {
            out.push(
                `${where}: trustLevel="${trust}" but ${field} is empty.`,
            );
        }
    }
    const esmHash = entry.checksums?.frontendEsm;
    if (esmHash === ZERO_HASH) {
        out.push(
            `${where}: trustLevel="${trust}" but checksums.frontendEsm is all-zero placeholder.`,
        );
    }
    return out;
}

function main() {
    let raw = readFileSync(REGISTRY_PATH, 'utf8');
    if (raw.charCodeAt(0) === 0xfeff) {
        raw = raw.slice(1);
    }
    const registry = JSON.parse(raw);
    if (!Array.isArray(registry.plugins)) {
        stderr.write(`guard-trust-fields: ${REGISTRY_PATH} has no "plugins" array.\n`);
        exit(1);
    }
    const violations = registry.plugins.flatMap(violationsFor);
    if (violations.length > 0) {
        stderr.write('Trust-field violations:\n');
        for (const v of violations) stderr.write(`  - ${v}\n`);
        exit(1);
    }
    stdout.write(
        `OK: no trust-field violations across ${registry.plugins.length} entries.\n`,
    );
}

main();
