/* Single source of truth for the offer.
 *
 * The site previously contradicted itself — the hero sold a membership while
 * the pricing section said "you'll never pay monthly fees" — because every
 * section hard-coded its own numbers and claims. Everything reads from here now
 * so the offer can't drift apart again.
 *
 * NUMBERS ARE PROPOSALS. Change them here and the whole site follows.
 */
export const OFFER = {
  /** Monthly membership: we build the site, we host it, cancel and it comes down. */
  monthlyPrice: 197,
  /** Optional add-on: take the Next.js source and own it outright. */
  sourcePrice: 997,
  /** Turnaround from theme pick to live site. The headline metric for a DFY offer. */
  buildDays: 7,
  /** Real capacity per month. Only claim scarcity you actually have. */
  slotsPerMonth: 6,
} as const;

export const price = (n: number) => `$${n.toLocaleString("en-US")}`;
