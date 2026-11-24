import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StringsService } from '../../strings/strings.service';
import { SOCIAL_LINKS, SocialNetwork } from '../../../data/social-links';

/** Chiave in docs/copy-it.md dell'etichetta accessibile di ogni rete. */
const LABEL_KEYS: Readonly<Record<SocialNetwork, string>> = {
  facebook: 'social.facebook',
  instagram: 'social.instagram',
};

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {
  protected readonly links = SOCIAL_LINKS;
  protected readonly labelKeys = LABEL_KEYS;
  protected readonly strings = inject(StringsService);
}