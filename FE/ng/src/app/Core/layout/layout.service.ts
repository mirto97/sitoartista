import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { DEFAULT_LAYOUT, LayoutOptions } from './layout-options';

/** Espone le opzioni di layout della rotta attiva, lette da `data.layout`. */
@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly router = inject(Router);

  readonly options = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.readOptions()),
    ),
    { initialValue: DEFAULT_LAYOUT },
  );

  private readOptions(): LayoutOptions {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const declared = route.data['layout'] as Partial<LayoutOptions> | undefined;
    return { ...DEFAULT_LAYOUT, ...declared };
  }
}