/** Opzioni di layout di una pagina, dichiarate in `data.layout` della rotta. */
export interface LayoutOptions {
  /** Toglie padding e altezza minima di main, per le scene che riempiono il viewport. */
  readonly fullBleed: boolean;
  /** Forza il menu compatto a ogni larghezza. */
  readonly forceCollapsedNav: boolean;
  /** Scena senza elementi del sito: solo main, senza skip link, header e footer. */
  readonly bare: boolean;
}

export const DEFAULT_LAYOUT: LayoutOptions = {
  fullBleed: false,
  forceCollapsedNav: false,
  bare: false,
};