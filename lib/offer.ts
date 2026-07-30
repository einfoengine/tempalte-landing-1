/* Single source of truth for the offer.
 *
 * The offer is simple: you pick ONE template, we build your website from it in
 * your brand and wire it to your GoHighLevel, launched on your domain — with
 * 4 months of technical support included free. No tiers, no packages.
 *
 * PRICE IS A PLACEHOLDER. Set your own — change it here and the whole site
 * follows.
 */
export const OFFER = {
  /** One flat price to build your site from any template. Placeholder. */
  price: 497,
  /** Free technical support included with every build. */
  supportMonths: 4,
  buildDaysMin: 5,
  buildDaysMax: 7,
  /** Real capacity — only claim scarcity you actually have. */
  slotsPerMonth: 6,
} as const;

/** What every build includes. */
export const INCLUDED: string[] = [
  "We build your website from the template you pick",
  "Designed in your brand — your logo, colours and type",
  "Wired to your GoHighLevel — forms, chat and calendars",
  "Launched on your own domain",
  `${OFFER.supportMonths} months of technical support, free`,
];

export const price = (n: number) => `$${n.toLocaleString("en-US")}`;
export const buildRange = () => `${OFFER.buildDaysMin}–${OFFER.buildDaysMax} days`;
