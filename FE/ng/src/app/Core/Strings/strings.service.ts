import { Injectable } from '@angular/core';
import { COPY_IT } from './copy-it.generated';

/** Valori per i segnaposto {nome} di una stringa. */
export type StringParams = Readonly<Record<string, string | number>>;

@Injectable({ providedIn: 'root' })
export class StringsService {
  private readonly strings: Readonly<Record<string, string>> = COPY_IT;

  /** Testo italiano di una chiave, con i segnaposto sostituiti. Lancia un errore se la chiave manca. */
  t(key: string, params?: StringParams): string {
    const value = Object.hasOwn(this.strings, key) ? this.strings[key] : undefined;
    if (value === undefined) {
      throw new Error(`Missing Italian copy for key "${key}" in docs/copy-it.md`);
    }
    return params ? this.interpolate(value, params) : value;
  }

  has(key: string): boolean {
    return Object.hasOwn(this.strings, key);
  }

  /** Tutte le stringhe la cui chiave inizia con il prefisso. */
  withPrefix(prefix: string): Record<string, string> {
    return Object.fromEntries(
      Object.entries(this.strings).filter(([key]) => key.startsWith(prefix)),
    );
  }

  /** Sostituisce ogni {nome} con il valore in params; i segnaposto senza valore restano invariati. */
  private interpolate(template: string, params: StringParams): string {
    return template.replace(/\{(\w+)\}/g, (placeholder, name: string) =>
      Object.hasOwn(params, name) ? String(params[name]) : placeholder,
    );
  }
}