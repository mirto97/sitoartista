import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { LayoutService } from './layout.service';

@Component({ template: '' })
class DummyPage {}

describe('LayoutService', () => {
  function setup(): { router: Router; service: LayoutService } {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: 'plain', component: DummyPage },
          {
            path: 'scene',
            component: DummyPage,
            data: { layout: { fullBleed: true, forceCollapsedNav: true } },
          },
        ]),
      ],
    });
    return { router: TestBed.inject(Router), service: TestBed.inject(LayoutService) };
  }

  it('usa i valori di default senza data.layout', async () => {
    const { router, service } = setup();
    await router.navigateByUrl('/plain');
    expect(service.options()).toEqual({ fullBleed: false, forceCollapsedNav: false, bare: false });
  });

  it('legge le opzioni dichiarate nella rotta e completa con i default', async () => {
    const { router, service } = setup();
    await router.navigateByUrl('/scene');
    expect(service.options()).toEqual({ fullBleed: true, forceCollapsedNav: true, bare: false });
  });

  it('torna ai default lasciando la scena', async () => {
    const { router, service } = setup();
    await router.navigateByUrl('/scene');
    await router.navigateByUrl('/plain');
    expect(service.options().fullBleed).toBe(false);
  });
});