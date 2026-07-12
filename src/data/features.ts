/** The three MOVA scenarios. The hero scene, feature pages and phone UI all read
    from this config; copy lives here so it can be replaced without touching components. */
export type FeatureId = 'baby' | 'trends' | 'motion';

export interface Feature {
  id: FeatureId;
  name: string;
  /** Mode-dependent second line of the hero headline. */
  headline: string;
  /** One-sentence pitch under the headline. */
  pitch: string;
  /** Input → output, shown as scene plate labels. */
  input: string;
  output: string;
  /** CSS custom property with this mode's light temperature. */
  lightVar: '--mode-baby' | '--mode-trends' | '--mode-motion';
  href: `/features/${string}`;
}

export const features: Feature[] = [
  {
    id: 'baby',
    name: 'Future Baby',
    headline: 'meet your future',
    pitch:
      'Upload two parent photos and see a realistic portrait of the child you might have one day.',
    input: 'Parents’ photos',
    output: 'Future baby',
    lightVar: '--mode-baby',
    href: '/features/future-baby',
  },
  {
    id: 'trends',
    name: 'Trends',
    headline: 'step into the trend',
    pitch:
      'Put yourself inside the visual scenarios everyone is sharing — recreated around your photo.',
    input: 'Your photo',
    output: 'Share-ready video',
    lightVar: '--mode-trends',
    href: '/features/trends',
  },
  {
    id: 'motion',
    name: 'Motion Control',
    headline: 'move like anyone',
    pitch:
      'Take the movement from any reference video and give it to your character, photo-accurate.',
    input: 'Photo + reference',
    output: 'Your motion',
    lightVar: '--mode-motion',
    href: '/features/motion-control',
  },
];

/** Why MOVA is not a generic AI generator — home page statements. */
export const differentiators = [
  {
    title: 'Made for one thing: you',
    body: 'MOVA is not a prompt box. Every scenario starts from your photo and ends with a result about you — your child, your trend, your movement.',
  },
  {
    title: 'Private by design',
    body: 'Generation runs server-side over encrypted connections. You see your history and can delete your data at any time.',
  },
  {
    title: 'Honest credits',
    body: 'Every generation shows its price in credits before you run it. No hidden limits, no surprise paywalls mid-flow.',
  },
] as const;
