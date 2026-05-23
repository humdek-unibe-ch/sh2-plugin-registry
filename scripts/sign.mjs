#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * Shared SelfHelp plugin signing CLI.
 *
 * Two sub-commands:
 *
 *   build-payload --input <path-to-json> [--output <path>]
 *     Reads {pluginId, version, manifestUrl?, composer, runtime,
 *     checksums, compatibility} from the input JSON, normalises +
 *     sorts it, and emits the canonical signed payload string. Output
 *     MUST be byte-identical to the PHP SignedPayloadBuilder so the
 *     host can verify what CI signed.
 *
 *   sign --payload <path-or-->  [--key <base64>] [--key-id <id>]
 *                               [--out <path>]
 *     Signs the canonical payload with an Ed25519 private key
 *     (sodium_crypto_sign-style 64-byte secret key, base64 encoded).
 *     Writes {keyId, signature, signedPayload} as JSON.
 *
 *   keygen
 *     Generates a fresh Ed25519 keypair (publicKey + privateKey, both
 *     base64). Intended for one-off bootstrapping; production keys are
 *     stored in CI secrets.
 *
 * Env precedence for sign:
 *
 *   --key      flag (base64)
 *   SELFHELP_PLUGIN_SIGNING_KEY       (production)
 *   SELFHELP_PLUGIN_DEV_SIGNING_KEY   (dev opt-in; emits keyId=dev)
 *
 * The PHP twin lives at src/Plugin/Security/SignedPayloadBuilder.php
 * in sh-selfhelp_backend. The fixture cross-impl test guarantees that
 * both implementations encode the same input to the same bytes.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { argv, exit, stderr, stdout } from 'node:process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sodium = require('libsodium-wrappers');

await sodium.ready;

const args = parseArgs(argv.slice(2));
const sub = args._[0];

try {
    switch (sub) {
        case 'build-payload':
            await runBuildPayload(args);
            break;
        case 'sign':
            await runSign(args);
            break;
        case 'keygen':
            await runKeygen(args);
            break;
        default:
            usage();
            exit(sub ? 1 : 0);
    }
} catch (err) {
    stderr.write(`sign.mjs: ${err instanceof Error ? err.message : String(err)}\n`);
    exit(1);
}

function usage() {
    stderr.write(`Usage:
  sign.mjs build-payload --input <file> [--output <file>]
  sign.mjs sign          --payload <file|-> [--key <base64>] [--key-id <id>] [--out <file>]
  sign.mjs keygen
`);
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

async function runBuildPayload(args) {
    if (!args.input) throw new Error('--input <path-to-json> is required.');
    const raw = readFileSync(args.input, 'utf8');
    const parsed = JSON.parse(raw);
    const canonical = buildCanonicalPayload(parsed);
    if (args.output) {
        writeFileSync(args.output, canonical, 'utf8');
    } else {
        stdout.write(canonical);
    }
}

async function runSign(args) {
    if (!args.payload) throw new Error('--payload <file|-> is required.');
    const payload = args.payload === '-' ? await readStdin() : readFileSync(args.payload, 'utf8');

    const keyB64 =
        args.key ||
        process.env.SELFHELP_PLUGIN_SIGNING_KEY ||
        process.env.SELFHELP_PLUGIN_DEV_SIGNING_KEY;
    if (!keyB64) {
        throw new Error(
            'No signing key. Pass --key or set SELFHELP_PLUGIN_SIGNING_KEY (production) ' +
                'or SELFHELP_PLUGIN_DEV_SIGNING_KEY (dev opt-in).',
        );
    }

    let keyId = args['key-id'] || process.env.SELFHELP_PLUGIN_SIGNING_KEY_ID;
    if (!keyId) {
        if (process.env.SELFHELP_PLUGIN_DEV_SIGNING_KEY && !process.env.SELFHELP_PLUGIN_SIGNING_KEY) {
            keyId = 'dev';
        } else {
            throw new Error('--key-id <id> (or SELFHELP_PLUGIN_SIGNING_KEY_ID) is required.');
        }
    }

    const privateKey = base64ToBytes(keyB64);
    if (privateKey.length !== sodium.crypto_sign_SECRETKEYBYTES) {
        throw new Error(
            `Signing key must be ${sodium.crypto_sign_SECRETKEYBYTES} bytes (got ${privateKey.length}). ` +
                `Use sign.mjs keygen to produce a valid one.`,
        );
    }
    const signature = sodium.crypto_sign_detached(payload, privateKey);
    const out = {
        keyId,
        signature: bytesToBase64(signature),
        signedPayload: payload,
    };

    const serialised = JSON.stringify(out, null, 2);
    if (args.out) {
        writeFileSync(args.out, serialised, 'utf8');
    } else {
        stdout.write(serialised);
    }
}

async function runKeygen() {
    const kp = sodium.crypto_sign_keypair();
    stdout.write(
        JSON.stringify(
            {
                publicKey: bytesToBase64(kp.publicKey),
                privateKey: bytesToBase64(kp.privateKey),
                hint: 'Store privateKey in CI secrets as SELFHELP_PLUGIN_SIGNING_KEY. Seed publicKey into the host SELFHELP_PLUGIN_TRUSTED_KEYS env (keyId=<your-id>;<base64>).',
            },
            null,
            2,
        ),
    );
    stdout.write('\n');
}

// ---------------------------------------------------------------------
// Canonical builder — MUST stay byte-identical to PHP SignedPayloadBuilder.
// ---------------------------------------------------------------------

function buildCanonicalPayload(input) {
    const out = {};

    out.pluginId = requireString(input, 'pluginId');
    out.version = requireString(input, 'version');

    if (typeof input.manifestUrl === 'string' && input.manifestUrl !== '') {
        out.manifestUrl = input.manifestUrl;
    }

    const composer = input.composer;
    if (!composer || typeof composer !== 'object') {
        throw new Error('"composer" must be an object.');
    }
    const composerOut = {
        package: requireString(composer, 'package', 'composer.package'),
        version: requireString(composer, 'version', 'composer.version'),
    };
    if (composer.repository && typeof composer.repository === 'object') {
        const repo = composer.repository;
        const repoOut = {
            type: requireString(repo, 'type', 'composer.repository.type'),
            url: requireString(repo, 'url', 'composer.repository.url'),
        };
        if (typeof repo.reference === 'string' && repo.reference !== '') {
            repoOut.reference = repo.reference;
        }
        composerOut.repository = repoOut;
    }
    out.composer = composerOut;

    const runtime = input.runtime;
    if (!runtime || typeof runtime !== 'object') {
        throw new Error('"runtime" must be an object.');
    }
    const runtimeOut = {
        entrypointUrl: requireString(runtime, 'entrypointUrl', 'runtime.entrypointUrl'),
        format: requireString(runtime, 'format', 'runtime.format'),
    };
    for (const k of ['stylesheetUrl', 'integrity', 'stylesheetIntegrity']) {
        if (typeof runtime[k] === 'string' && runtime[k] !== '') runtimeOut[k] = runtime[k];
    }
    out.runtime = runtimeOut;

    const checksums = input.checksums;
    if (!checksums || typeof checksums !== 'object') {
        throw new Error('"checksums" must be an object.');
    }
    const checksumsOut = {
        frontendEsm: requireString(checksums, 'frontendEsm', 'checksums.frontendEsm'),
    };
    if (typeof checksums.frontendCss === 'string' && checksums.frontendCss !== '') {
        checksumsOut.frontendCss = checksums.frontendCss;
    }
    out.checksums = checksumsOut;

    const compat = input.compatibility;
    if (!compat || typeof compat !== 'object') {
        throw new Error('"compatibility" must be an object.');
    }
    const compatOut = {
        selfhelp: requireString(compat, 'selfhelp', 'compatibility.selfhelp'),
    };
    for (const k of ['php', 'node', 'react', 'reactNative', 'expoSdk']) {
        if (typeof compat[k] === 'string' && compat[k] !== '') compatOut[k] = compat[k];
    }
    out.compatibility = compatOut;

    return canonicalStringify(out);
}

function requireString(obj, key, label) {
    const v = obj[key];
    if (typeof v !== 'string' || v === '') {
        throw new Error(`"${label || key}" is required and must be a non-empty string.`);
    }
    return v;
}

function canonicalStringify(value) {
    if (value === null) return 'null';
    if (typeof value === 'string') return JSON.stringify(value);
    if (typeof value === 'number') {
        if (!Number.isFinite(value)) throw new Error('Non-finite number not allowed.');
        return JSON.stringify(value);
    }
    if (typeof value === 'boolean') return value ? 'true' : 'false';
    if (Array.isArray(value)) {
        return '[' + value.map((v) => canonicalStringify(v)).join(',') + ']';
    }
    if (typeof value === 'object') {
        const keys = Object.keys(value).sort();
        const parts = keys.map((k) => JSON.stringify(k) + ':' + canonicalStringify(value[k]));
        return '{' + parts.join(',') + '}';
    }
    throw new Error(`Unsupported value: ${typeof value}`);
}

function base64ToBytes(b64) {
    return new Uint8Array(Buffer.from(b64, 'base64'));
}
function bytesToBase64(bytes) {
    return Buffer.from(bytes).toString('base64');
}

async function readStdin() {
    return new Promise((resolve, reject) => {
        let data = '';
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (chunk) => (data += chunk));
        process.stdin.on('end', () => resolve(data));
        process.stdin.on('error', reject);
    });
}
