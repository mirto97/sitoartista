import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { SiteNavComponent } from './site-nav.component';

describe('SiteNavComponent', () => {
  async function render() {
    TestBed.configureTestingModule({ imports: [SiteNavComponent], providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(SiteNavComponent);
    await fixture.whenStable();
    return { fixture, root: fixture.nativeElement as HTMLElement };
  }

  it('mostra le sei voci del menu', async () => {
    const { root } = await render();
    expect(root.querySelectorAll('.nav-list a').length).toBe(6);
  });

  it("apre e chiude il menu aggiornando aria-expanded e l'etichetta", async () => {
    const { fixture, root } = await render();
    const toggle = root.querySelector<HTMLButtonElement>('.nav-toggle')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.textContent?.trim()).toBe('Apri il menu');

    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(toggle.textContent?.trim()).toBe('Chiudi il menu');
    expect(root.querySelector('.nav-list')?.classList.contains('nav-list--open')).toBe(true);
  });

  it('applica la classe del menu compatto forzato', async () => {
    const { fixture, root } = await render();
    fixture.componentRef.setInput('forceCollapsed', true);
    await fixture.whenStable();
    expect(root.querySelector('.site-nav')?.classList.contains('site-nav--force-collapsed')).toBe(true);
  });
});