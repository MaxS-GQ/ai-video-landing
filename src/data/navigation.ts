/** Site navigation. `status: 'soon'` items render as non-links until the page ships
    (docs/MOVA_IMPLEMENTATION_PLAN.md — no empty page templates). */
export interface NavItem {
  label: string;
  href: string;
  status: 'live' | 'soon';
}

export const primaryNav: NavItem[] = [
  { label: 'Features', href: '/features', status: 'soon' },
  { label: 'Showcase', href: '/showcase', status: 'soon' },
  { label: 'Pricing', href: '/pricing', status: 'soon' },
  { label: 'About', href: '/about', status: 'soon' },
];

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy', status: 'soon' },
  { label: 'Terms of Use', href: '/terms', status: 'soon' },
  { label: 'Support', href: '/support', status: 'soon' },
];

export const downloadCta = { label: 'Download', href: '/download', status: 'live' } as const;
