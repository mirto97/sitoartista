// Genera src/app/core/strings/copy-it.generated.ts da docs/copy-it.md.
// Eseguito automaticamente prima di start, build, watch e test.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { parseCopy } from './copy-parser.mjs';

const ROOT = new URL('../', import.meta.url);
const SOURCE_PATH = 'docs/copy-it.md';
const OUTPUT_PATH = 'src/app/core/strings/copy-it.generated.ts';

const source = new URL(SOURCE_PATH, ROOT);
const output = new URL(OUTPUT_PATH, ROOT);

const strings = parseCopy(readFileSync(source, 'utf8'));
const count = Object.keys(strings).length;
if (count === 0) {
  throw new Error(`${SOURCE_PATH}: nessuna stringa trovata`);
}

const content = `// Generato da scripts/generate-copy.mjs a partire da ${SOURCE_PATH}: non modificare a mano.
export const COPY_IT: Readonly<Record<string, string>> = ${JSON.stringify(strings, null, 2)};
`;

mkdirSync(new URL('./', output), { recursive: true });
writeFileSync(output, content);
console.log(`${OUTPUT_PATH}: ${count} stringhe`);