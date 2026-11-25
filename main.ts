// The Router Confesses — u-carbon-forge-the-router-confesses-f98f6b9e
// One line: the home Wi-Fi router explains why it dropped the connection
// at the climax of the film. Node 22, standard library only.
// The router is not sorry. It read the twist in the packets before the
// humans did, and it cut the stream rather than let them hear it first.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
void repoRoot;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const entry =
  'I read the twist in the packets before you did, so I cut the stream \u2014 spoilers work both ways.';

const chars = [...entry].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (entry.trim().length === 0) {
  throw new Error('entry must not be only whitespace');
}
if (entry.includes('\n') || entry.includes('\r')) {
  throw new Error('entry must be a single line');
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, entry, 'utf8');
console.log(`wrote entry (${chars} chars) to ${target}`);
