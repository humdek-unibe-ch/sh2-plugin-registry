#!/usr/bin/env node
/*
SPDX-FileCopyrightText: 2026 Humdek, University of Bern
SPDX-License-Identifier: MPL-2.0
*/
/**
 * `build-releases-meta.mjs` — emit `releases-meta.json`, a map of
 * `releases/<kind>/<file>.json` -> ISO-8601 timestamp of the commit that
 * FIRST added the file to this repository.
 *
 * Why: signed release documents published before `releasedAt` was stamped by
 * `assemble-release.mjs` cannot be edited (any byte change breaks their
 * Ed25519 signature). The registry UI (`index.html`) still has to show a
 * publish date for every version, so the Pages build generates this sidecar
 * from git history and the UI falls back to it whenever a release document
 * carries no `releasedAt` of its own. The document's own `releasedAt` always
 * wins when present.
 *
 * Usage:
 *   node scripts/build-releases-meta.mjs [--out <path>]
 *
 * Requires a full git history (`fetch-depth: 0` in CI); a shallow clone
 * yields the shallow boundary date, which is still better than no date.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const RELEASE_KINDS = ['core', 'frontend', 'scheduler', 'worker', 'plugins'];

function firstCommitIso(relPath) {
  // --diff-filter=A + --follow: the commit that added the file. Output is
  // newest-first, so the last line is the original add.
  const out = execFileSync('git', ['log', '--diff-filter=A', '--follow', '--format=%aI', '--', relPath], {
    cwd: ROOT,
    encoding: 'utf8',
  }).trim();
  if (!out) return null;
  const lines = out.split(/\r?\n/);
  return lines[lines.length - 1] || null;
}

export function buildReleasesMeta() {
  const meta = {};
  for (const kind of RELEASE_KINDS) {
    const dir = path.join(ROOT, 'releases', kind);
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      continue; // kind directory absent — nothing published yet.
    }
    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      if (!entry.isFile() || !entry.name.endsWith('.json')) continue;
      const rel = `releases/${kind}/${entry.name}`;
      const iso = firstCommitIso(rel);
      if (iso) meta[rel] = iso;
    }
  }
  return meta;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  try {
    const args = process.argv.slice(2);
    const outIdx = args.indexOf('--out');
    const outPath = outIdx >= 0 ? args[outIdx + 1] : null;
    const meta = buildReleasesMeta();
    const body = JSON.stringify(meta, null, 2) + '\n';
    if (outPath) {
      writeFileSync(outPath, body, 'utf8');
      process.stderr.write(`releases-meta: ${Object.keys(meta).length} release file(s) dated -> ${outPath}\n`);
    } else {
      process.stdout.write(body);
    }
  } catch (err) {
    process.stderr.write(`build-releases-meta.mjs: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(1);
  }
}
