import { describe, expect, it } from 'vitest';
import { StringsService } from './strings.service';

describe('StringsService', () => {
  const service = new StringsService();

  it('restituisce il testo di una chiave esistente', () => {
    expect(service.t('nav.home')).toBe('Home');
  });

  it('sostituisce i segnaposto indicati', () => {
    expect(service.t('quadro.prezzo', { prezzo: '1.200' })).toBe('1.200 €');
  });

  it('lascia intatti i segnaposto senza valore', () => {
    expect(service.t('corridoio.targhetta', { numero: 3 })).toBe('N. 3 · {titolo}');
  });

  it('lancia un errore se la chiave manca', () => {
    expect(() => service.t('chiave.inesistente')).toThrow('chiave.inesistente');
  });

  it('riconosce solo le chiavi proprie', () => {
    expect(service.has('nav.home')).toBe(true);
    expect(service.has('constructor')).toBe(false);
  });

  it('filtra le stringhe per prefisso', () => {
    const nav = service.withPrefix('nav.');
    expect(nav['nav.home']).toBe('Home');
    expect(Object.keys(nav).every((key) => key.startsWith('nav.'))).toBe(true);
  });
});