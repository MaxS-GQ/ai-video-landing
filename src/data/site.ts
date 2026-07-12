/** Global site facts. Every page reads from here — never hardcode these. */
export const site = {
  name: 'MOVA',
  wordmark: 'Motion, Opportunity, Visual AI',
  tagline: 'See yourself in a different image, scenario, or future.',
  description:
    'MOVA is an iOS app that turns your photos into personalized AI video and imagery — Future Baby, viral Trends, and Motion Control.',
  contactEmail: 'maksim.superskiy@gmail.com',
  appStoreUrl: null as string | null, // set when the app ships
  year: 2026,
} as const;

/** Prefix a root-relative path with the deploy base (GitHub Pages project path). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
