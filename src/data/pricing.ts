/** Single source of truth for prices. The /pricing page, JSON-LD offers and any
    future components must import from here — never duplicate amounts in markup. */
export interface Plan {
  id: string;
  name: string;
  creditsPerMonth: number;
  usdPerMonth: number;
}

export interface TopUp {
  credits: number;
  usd: number;
}

export const plans: Plan[] = [
  { id: 'basic', name: 'Basic', creditsPerMonth: 270, usdPerMonth: 19 },
  { id: 'pro', name: 'Pro', creditsPerMonth: 1200, usdPerMonth: 47 },
  { id: 'premium', name: 'Premium', creditsPerMonth: 3000, usdPerMonth: 99 },
];

export const topUps: TopUp[] = [
  { credits: 100, usd: 6.25 },
  { credits: 200, usd: 12 },
  { credits: 500, usd: 26 },
];

export const priceRange = {
  currency: 'USD',
  low: Math.min(...topUps.map((t) => t.usd)),
  high: Math.max(...plans.map((p) => p.usdPerMonth)),
} as const;
