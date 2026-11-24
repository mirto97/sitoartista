import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { StringsService } from './core/strings/strings.service';
import { NotFoundPageComponent } from './features/not-found/not-found-page.component';
import { StubPageComponent } from './features/stub/stub-page.component';

/** Titolo di una pagina: il testo della chiave in docs/copy-it.md. */
const titleFrom =
  (key: string): ResolveFn<string> =>
  () =>
    inject(StringsService).t(key);

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: StubPageComponent, title: titleFrom('home.entra') },
  { path: 'ingresso', component: StubPageComponent, title: titleFrom('ingresso.titolo') },
  { path: 'i-miei-quadri', component: StubPageComponent, title: titleFrom('corridoio.titolo') },
  { path: 'in-vendita', component: StubPageComponent, title: titleFrom('vendita.titolo') },
  { path: 'dimmi-il-tuo-quadro', component: StubPageComponent, title: titleFrom('dimmi.titolo') },
  { path: 'contatti', component: StubPageComponent, title: titleFrom('contact.title') },
  { path: 'note-legali', component: StubPageComponent, title: titleFrom('note.titolo') },
  { path: 'accedi', component: StubPageComponent, title: titleFrom('stub.title') },
  { path: '**', component: NotFoundPageComponent, title: titleFrom('404.title') },
];