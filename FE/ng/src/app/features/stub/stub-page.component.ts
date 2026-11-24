import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StringsService } from '../../core/strings/strings.service';

/** Segnaposto "In arrivo" per le pagine non ancora portate. */
@Component({
  selector: 'app-stub-page',
  imports: [RouterLink],
  template: `
    <h1>{{ strings.t('stub.title') }}</h1>
    <p>{{ strings.t('stub.body') }}</p>
    <a routerLink="/home">{{ strings.t('stub.back') }}</a>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StubPageComponent {
  protected readonly strings = inject(StringsService);
}