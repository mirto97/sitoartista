// Parser delle righe di docs/copy-it.md nel formato: | `chiave` | testo | draft|ok |
const ROW_PATTERN = /^\|\s*`([a-z0-9_.]+)`\s*\|\s*(.+?)\s*\|\s*(draft|ok)\s*\|$/gim;

/** @param {string} markdown @returns {Record<string, string>} */
export function parseCopy(markdown) {
  /** @type {Record<string, string>} */
  const strings = {};
  for (const [, key, text] of markdown.matchAll(ROW_PATTERN)) {
    strings[key] = text.trim();
  }
  return strings;
}