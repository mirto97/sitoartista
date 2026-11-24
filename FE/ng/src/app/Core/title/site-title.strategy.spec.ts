import { TestBed } from '@angular/core/testing';
import { Router, TitleStrategy, provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { routes } from '../../app.routes';
import { SiteTitleStrategy } from './site-title.strategy';

describe('SiteTitleStrategy', () => {
  function setup(): Router {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes), { provide: TitleStrategy, useClass: SiteTitleStrategy }],
    });
    return TestBed.inject(Router);
  }

  it('compone il titolo come "{pagina} · {nome sito}"', async () => {
    await setup().navigateByUrl('/note-legali');
    expect(document.title).toBe('Note legali · Casa di Ilaria');
  });

  it('usa il titolo della pagina 404 per un percorso sconosciuto', async () => {
    await setup().navigateByUrl('/percorso-inesistente');
    expect(document.title).toBe('Pagina non trovata · Casa di Ilaria');
  });
});