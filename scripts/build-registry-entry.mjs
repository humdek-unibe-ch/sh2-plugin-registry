#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * `build-registry-entry.mjs` — produces the canonical signed registry
 * entry for one published plugin version.
 *
 * Inputs:
 *   --manifest <path>   plugin.json
 *   --esm <path>        built dist/plugin.esm.js
 *   --css <path>        built dist/plugin.css (optional)
 *   --entrypoint-url    public URL where the host fetches plugin.esm.js
 *   --stylesheet-url    public URL where the host fetches plugin.css (optional)
 *   --key <base64>      Ed25519 64-byte secret key (or via env, see sign.mjs)
 *   --key-id <id>       publisher key id (or via env)
 *   --out <path>        where to write the registry entry JSON
 *
 * The script:
 *   1. SHA-256s the runtime artifacts.
 *   2. Calls `sign.mjs build-payload` to canonicalise the signed payload
 *      (so the host's PHP SignedPayloadBuilder verifies the same bytes).
 *   3. Calls `sign.mjs sign` with the Ed25519 secret key.
 *   4. Emits a `pluginEntry` JSON object compliant with
 *      `registry.schema.json` and ready to splice into `registry.json`
 *      (the publishing script in each plugin repo handles the merge).
 *
 * This script lives in the registry repo (not the plugin repo) so the
 * canonical payload + signature logic stays single-sourced. The
 * plugin's `publish-to-registry` script calls into it via the
 * `selfhelp-plugin-build-registry-entry` bin (see package.json).
 */

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const args = parseArgs(process.argv.slice(2));
try {
    main(args);
} catch (err) {
    process.stderr.write(`build-registry-entry.mjs: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(1);
}

function main(args) {
    const manifestPath = required(args, 'manifest');
    const esmPath = required(args, 'esm');
    const entrypointUrl = required(args, 'entrypoint-url');
    const cssPath = args.css || null;
    const stylesheetUrl = args['stylesheet-url'] || null;
    const outPath = args.out || null;

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    const id = manifest.id;
    const version = manifest.version;
    if (!id || !version) {
        throw new Error('plugin.json missing id or version.');
    }
    const composer = manifest?.backend?.composer;
    if (!composer || !composer.package || !composer.version) {
        throw new Error('plugin.json missing backend.composer.{package,version}.');
    }
    const runtime = manifest?.frontend?.runtime;
    if (!runtime || !runtime.format) {
        throw new Error('plugin.json missing frontend.runtime.{format}.');
    }

    const esmHash = sha256Hex(readFileSync(esmPath));
    const cssHash = cssPath ? sha256Hex(readFileSync(cssPath)) : null;

    const payloadInput = {
        pluginId: id,
        version,
        manifestUrl: typeof args['manifest-url'] === 'string' ? args['manifest-url'] : undefined,
        composer: {
            package: composer.package,
            version: composer.version,
        },
        runtime: {
            entrypointUrl,
            format: runtime.format,
            stylesheetUrl: stylesheetUrl || undefined,
            integrity: runtime.integrity || undefined,
            stylesheetIntegrity: runtime.stylesheetIntegrity || undefined,
        },
        checksums: {
            frontendEsm: esmHash,
            frontendCss: cssHash || undefined,
        },
        compatibility: manifest.compatibility,
        archive: manifest.archive || { mode: 'connected' },
    };

    const signScript = path.join(path.dirname(fileURLToPath(import.meta.url)), 'sign.mjs');
    const canonical = execFileSync('node', [signScript, 'build-payload', '--input', '-'], {
        input: JSON.stringify(payloadInput),
        encoding: 'utf8',
    });
    const signResult = execFileSync('node', [signScript, 'sign', '--payload', '-'], {
        input: canonical,
        encoding: 'utf8',
    });
    const signed = JSON.parse(signResult);

    const entry = {
        id,
        name: manifest.name,
        description: manifest.description,
        version,
        channel: args.channel || 'stable',
        trustLevel: manifest?.security?.trustLevel ?? 'untrusted',
        homepage: manifest.homepage,
        manifestUrl: args['manifest-url'] || `manifests/${id}-${version}.json`,
        compatibility: manifest.compatibility,
        composer: payloadInput.composer,
        runtime: {
            entrypointUrl,
            format: runtime.format,
            ...(stylesheetUrl ? { stylesheetUrl } : {}),
            ...(runtime.integrity ? { integrity: runtime.integrity } : {}),
            ...(runtime.stylesheetIntegrity ? { stylesheetIntegrity: runtime.stylesheetIntegrity } : {}),
        },
        checksums: {
            frontendEsm: esmHash,
            ...(cssHash ? { frontendCss: cssHash } : {}),
        },
        signature: signed.signature,
        signedPayload: signed.signedPayload,
        keyId: signed.keyId,
        ...(manifest.changelogUrl ? { changelogUrl: manifest.changelogUrl } : {}),
    };

    const out = JSON.stringify(entry, null, 4) + '\n';
    if (outPath) writeFileSync(outPath, out, 'utf8');
    else process.stdout.write(out);
}

function parseArgs(rest) {
    const out = { _: [] };
    for (let i = 0; i < rest.length; i++) {
        const tok = rest[i];
        if (tok.startsWith('--')) {
            const k = tok.slice(2);
            const v = rest[i + 1] && !rest[i + 1].startsWith('--') ? rest[++i] : true;
            out[k] = v;
        } else {
            out._.push(tok);
        }
    }
    return out;
}

function required(args, key) {
    const v = args[key];
    if (typeof v !== 'string' || v === '') {
        throw new Error(`--${key} is required.`);
    }
    return v;
}

function sha256Hex(buffer) {
    return createHash('sha256').update(buffer).digest('hex');
}
