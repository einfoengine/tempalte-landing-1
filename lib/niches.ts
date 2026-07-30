import type { Category } from "@/lib/themes";

/* Niche landing pages — the SEO surface.
 *
 * The reader is the GHL operator whose offer serves this vertical, not the
 * vertical's end customer. A member's site is *their* site; if they sell to med
 * spas, their site has to speak med spa. That's the same reader ForWhom
 * addresses, so the two stay consistent.
 *
 * One page per Category, so the taxonomy, the filters and the SEO surface can
 * never drift apart — `category` is the join key.
 */
export type Niche = {
  slug: string;
  category: Category;
  /** Vertical as an operator says it. */
  name: string;
  /** Who the member sells to. */
  prospect: string;
  seoTitle: string;
  seoDescription: string;
  headline: { light: string; bold: string; keyword: string };
  intro: string;
  /** What this vertical's buyers need to see before they say yes. */
  needs: string[];
  /** What's going wrong with the operator's current site. */
  painPoints: string[];
};

export const NICHES: Niche[] = [
  {
    slug: "med-spa",
    category: "Med Spa",
    name: "Med spas",
    prospect: "med spa owners",
    seoTitle: "Med Spa Websites for GoHighLevel Agencies | Theme Club",
    seoDescription:
      "Selling GoHighLevel to med spas? Pick a med spa theme and we'll build and host your marketing site in 7 days. No code, cancel anytime.",
    headline: { light: "You sell to med spas.", bold: "Your site should", keyword: "too" },
    intro:
      "Med spa owners buy on trust and aesthetics before they buy on features. If your site looks like a generic CRM pitch, you've lost them before the demo. This theme speaks their language — before-and-after proof, booking-first flows, and the polish the industry expects.",
    needs: [
      "Booking and consultation flows front and centre",
      "Before-and-after proof that looks credible, not clip-art",
      "Membership and package pricing that reads clearly",
      "Compliance-aware language around treatments and claims",
    ],
    painPoints: [
      "Your CRM pitch looks nothing like the industry you serve",
      "Med spa owners judge you on aesthetics — instantly",
      "Generic SaaS layouts bury the booking flow",
    ],
  },
  {
    slug: "home-services",
    category: "Home Services",
    name: "Home services",
    prospect: "roofers, HVAC and plumbing owners",
    seoTitle: "Home Services Websites for GoHighLevel Agencies | Theme Club",
    seoDescription:
      "Selling GoHighLevel to roofers, HVAC or plumbers? Pick a home services theme and we'll build and host your site in 7 days. No code, cancel anytime.",
    headline: { light: "Roofers and HVAC owners", bold: "don't read", keyword: "brochures" },
    intro:
      "Contractors decide fast and they decide on proof. They want to know you understand emergency calls, seasonal demand and missed-lead economics — not that you have a beautiful feature grid. This theme leads with the numbers that matter to a truck-and-crew business.",
    needs: [
      "Missed-call and speed-to-lead framed in money",
      "Job-value and ROI maths a contractor recognises",
      "Reviews and local proof above the fold",
      "Mobile-first — they're reading this in a van",
    ],
    painPoints: [
      "Contractors don't respond to SaaS-speak",
      "Your ROI story is buried three scrolls down",
      "The site doesn't look like it knows the trade",
    ],
  },
  {
    slug: "real-estate",
    category: "Real Estate",
    name: "Real estate",
    prospect: "agents and brokerages",
    seoTitle: "Real Estate Websites for GoHighLevel Agencies | Theme Club",
    seoDescription:
      "Selling GoHighLevel to agents and brokerages? Pick a real estate theme and we'll build and host your marketing site in 7 days. No code, cancel anytime.",
    headline: { light: "Agents buy from people", bold: "who get the", keyword: "grind" },
    intro:
      "Real estate is a follow-up business, and agents know it. They're not buying a CRM — they're buying the thing that stops leads going cold while they're at a showing. This theme leads with pipeline, nurture and the speed that wins listings.",
    needs: [
      "Lead nurture and follow-up as the headline benefit",
      "Listing and pipeline language agents already use",
      "Proof framed in deals closed, not features shipped",
      "Brokerage-level and solo-agent tiers side by side",
    ],
    painPoints: [
      "Agents can't see themselves in a generic SaaS site",
      "Your follow-up story reads like a feature list",
      "Brokerages need a different pitch than solo agents",
    ],
  },
  {
    slug: "fitness",
    category: "Fitness",
    name: "Gyms and fitness",
    prospect: "gym and studio owners",
    seoTitle: "Gym & Fitness Websites for GoHighLevel Agencies | Theme Club",
    seoDescription:
      "Selling GoHighLevel to gyms and studios? Pick a fitness theme and we'll build and host your marketing site in 7 days. No code, cancel anytime.",
    headline: { light: "Gym owners care about", bold: "one number:", keyword: "retention" },
    intro:
      "Studios live and die on churn and class fill rates. A gym owner doesn't want a marketing platform — they want fewer cancellations and fuller 6am classes. This theme puts membership economics where the hero copy usually goes.",
    needs: [
      "Retention and churn framed as the core promise",
      "Class booking and membership flows made obvious",
      "Community and transformation proof, not stock photos",
      "Trial-to-member conversion spelled out",
    ],
    painPoints: [
      "Gym owners don't think in 'marketing automation'",
      "Your site talks features, they think retention",
      "Nothing on the page proves you know the industry",
    ],
  },
  {
    slug: "dental-chiro",
    category: "Dental & Chiro",
    name: "Dental and chiropractic",
    prospect: "dentists and chiropractors",
    seoTitle: "Dental & Chiropractic Websites for GoHighLevel Agencies | Theme Club",
    seoDescription:
      "Selling GoHighLevel to dentists or chiropractors? Pick a dental & chiro theme and we'll build and host your site in 7 days. No code, cancel anytime.",
    headline: { light: "Practices don't buy software.", bold: "They buy a full", keyword: "schedule" },
    intro:
      "A practice owner measures everything in chair time and no-shows. They're not evaluating your automation features — they're asking whether next Tuesday fills up. This theme leads with recall, reactivation and the schedule.",
    needs: [
      "Recall and reactivation as the headline benefit",
      "No-show reduction framed in revenue per chair",
      "Patient-appropriate tone and trust signals",
      "New-patient acquisition maths, plainly stated",
    ],
    painPoints: [
      "Practice owners tune out software pitches",
      "Your site doesn't speak recall, no-shows or chair time",
      "Clinical buyers expect a different register entirely",
    ],
  },
  {
    slug: "saas-agency",
    category: "SaaS & Agency",
    name: "SaaS and agency",
    prospect: "agency owners reselling GHL",
    seoTitle: "White-Label SaaS Websites for GoHighLevel Resellers | Theme Club",
    seoDescription:
      "Reselling GoHighLevel under your own brand? Pick a SaaS theme and we'll build and host your marketing site in 7 days. No code, cancel anytime.",
    headline: { light: "Look like the platform", bold: "you already", keyword: "are" },
    intro:
      "You've white-labelled GHL and you're selling it as your own product. The only thing standing between you and a serious price point is a site that looks like a real software company — not a reseller with a logo swap.",
    needs: [
      "A site that reads as a funded software company",
      "Feature depth that answers objections without a call",
      "Pricing and comparison built for self-serve buyers",
      "Integration and AI story told properly",
    ],
    painPoints: [
      "Clients ask 'is this really your software?'",
      "You're compared directly to HighLevel's own site",
      "Enterprise deals go to more polished competitors",
    ],
  },
];

export function getNiche(slug: string): Niche | undefined {
  return NICHES.find((n) => n.slug === slug);
}

export function getNicheByCategory(category: Category): Niche | undefined {
  return NICHES.find((n) => n.category === category);
}
