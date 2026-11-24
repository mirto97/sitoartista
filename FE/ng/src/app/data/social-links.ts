export type SocialNetwork = 'facebook' | 'instagram';

export interface SocialLink {
  readonly id: string;
  readonly network: SocialNetwork;
  readonly url: string;
  readonly label: string;
  readonly placeholder: boolean;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'facebook',
    network: 'facebook',
    url: 'https://www.facebook.com/massera.ilaria',
    label: 'Facebook',
    placeholder: false,
  },
  {
    id: 'instagram',
    network: 'instagram',
    url: 'https://www.instagram.com/masserailaria/',
    label: 'Instagram',
    placeholder: false,
  },
];