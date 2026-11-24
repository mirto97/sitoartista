import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { App } from './app';

@Component({ template: '' })
class DummyPage {}

describe('App', () => {
  async function renderAt(path: string): Promise<HTMLElement> {
    TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([
          { path: 'normal', component: DummyPage },
          { path: 'wide', component: DummyPage, data: { layout: { fullBleed: true } } },
          { path: 'bare', component: DummyPage, data: { layout: { bare: true } } },
        ]),
      ],
    });
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(path);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('mostra skip link, header e footer di default', async () => {
    const root = await renderAt('/normal');
    expect(root.querySelector('.skip-link')).not.toBeNull();
    expect(root.querySelector('header.site-header')).not.toBeNull();
    expect(root.querySelector('footer.site-footer')).not.toBeNull();
    expect(root.querySelector('main')?.classList.contains('full-bleed')).toBe(false);
  });

  it('toglie il padding di main con fullBleed', async () => {
    const root = await renderAt('/wide');
    expect(root.querySelector('header.site-header')).not.toBeNull();
    expect(root.querySelector('main')?.classList.contains('full-bleed')).toBe(true);
  });

  it('mostra solo main in una scena bare', async () => {
    const root = await renderAt('/bare');
    expect(root.querySelector('.skip-link')).toBeNull();
    expect(root.querySelector('header')).toBeNull();
    expect(root.querySelector('footer')).toBeNull();
    expect(root.querySelector('main')?.classList.contains('full-bleed')).toBe(true);
  });

  it('imposta la descrizione del sito', async () => {
    await renderAt('/normal');
    const description = document.head.querySelector('meta[name="description"]');
    expect(description?.getAttribute('content')).toContain('quadri di Ilaria');
  });
});