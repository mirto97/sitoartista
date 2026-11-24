import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutService } from './core/layout/layout.service';
import { SITE_NAME } from './core/site-config';
import { StringsService } from './core/strings/strings.service';
import { SiteNavComponent } from './core/layout/site-nav/site-nav.component';
import { SocialLinksComponent } from './core/layout/social-links/social-links.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SiteNavComponent, SocialLinksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly strings = inject(StringsService);
  protected readonly layout = inject(LayoutService).options;
  protected readonly siteName = SITE_NAME;
  private readonly document = inject(DOCUMENT);

  constructor() {
    inject(Meta).updateTag({ name: 'description', content: this.strings.t('site.description') });
  }

  /** Sposta il focus su main: un href="#main" semplice lascerebbe un frammento nell'URL del router. */
  protected skipToMain(event: Event): void {
    event.preventDefault();
    this.document.getElementById('main')?.focus();
  }
}