import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StringsService } from '../../core/strings/strings.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <h1>{{ strings.t('404.title') }}</h1>
    <p>{{ strings.t('404.body') }}</p>
    <a routerLink="/ingresso">{{ strings.t('404.back') }}</a>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {
  protected readonly strings = inject(StringsService);
}