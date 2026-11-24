import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StringsService } from '../../strings/strings.service';

interface NavItem {
  readonly path: string;
  /** Chiave in docs/copy-it.md dell'etichetta. */
  readonly labelKey: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { path: '/home', labelKey: 'nav.home' },
  { path: '/i-miei-quadri', labelKey: 'nav.quadri' },
  { path: '/in-vendita', labelKey: 'nav.in_vendita' },
  { path: '/dimmi-il-tuo-quadro', labelKey: 'nav.dimmi' },
  { path: '/contatti', labelKey: 'nav.contatti' },
  { path: '/accedi', labelKey: 'nav.accedi' },
];

@Component({
  selector: 'app-site-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteNavComponent {
  /** Forza il menu compatto a ogni larghezza, per le scene a schermo intero. */
  readonly forceCollapsed = input(false);

  protected readonly strings = inject(StringsService);
  protected readonly items = NAV_ITEMS;
  protected readonly exactMatch = { exact: true };
  protected readonly isOpen = signal(false);

  protected toggle(): void {
    this.isOpen.update((open) => !open);
  }

  /** Chiude il menu dopo una navigazione: in una SPA la pagina non si ricarica. */
  protected close(): void {
    this.isOpen.set(false);
  }
}