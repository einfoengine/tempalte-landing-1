export type Theme = {
  slug: string;
  name: string;
  category: Category;
  blurb: string;
  pages: number;
  /** File in /public. Omit until a real cover exists — the card renders an
   *  abstract placeholder rather than pretending to be a screenshot. */
  cover?: string;
  isNew?: boolean;
  /** Long-form pitch on the detail page. Falls back to `blurb`. */
  description?: string;
  /** Per-theme specs. Only claim what's actually true of that theme. */
  specs?: { label: string; value: string }[];
  /** Stack the theme is built on. Shown on the hot-themes showcase. */
  technology?: string;
  /** Display string, e.g. "May 2026". Leave undefined until it actually ships —
   *  the showcase renders "Coming soon" rather than inventing a date. */
  releaseDate?: string;
  /** The pages a member's finished site includes. Per-theme, not global —
   *  a med spa site and a SaaS site don't ship the same pages. */
  pageList?: { title: string; detail: string; description: string }[];
  /** Colour ways this theme can be built in. */
  colorways?: { name: string; desc: string; dot: string }[];
};

/* GHL verticals, not business models. An operator says "I do med spas", never
   "I do Local Business" — and "med spa website GoHighLevel" is a query people
   actually search. The taxonomy is the SEO surface. */
export const CATEGORIES = [
  "All",
  "SaaS & Agency",
  "Med Spa",
  "Home Services",
  "Real Estate",
  "Fitness",
  "Dental & Chiro",
] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], "All">;

/* PLACEHOLDER CATALOG.
   Only PureSaaS is real. The rest exist to prove out the grid, filters and
   empty states — replace the names/blurbs and add a `cover` as each theme
   ships. Deliberately no sales counts or ratings here: don't invent social proof. */
export const THEMES: Theme[] = [
  {
    slug: "puresaas",
    name: "PureSaaS",
    category: "SaaS & Agency",
    blurb:
      "For GHL resellers selling their own white-labelled platform. Built around the conversion logic of SaaS.",
    description:
      "A premium marketing site for white-label sellers, engineered around the specific conversion logic of selling GoHighLevel-powered SaaS. Every page is built to answer the objection an agency buyer is actually holding — so you stop losing deals to a generic site and look like the platform you already are.",
    pages: 11,
    technology: "Next.js 16 · Tailwind 4",
    // TODO: confirm. Taken from the first commit on this repo (2026-05-19),
    // not from a known launch date — it's a public factual claim, so check it.
    releaseDate: "May 2026",
    specs: [
      { label: "Pages", value: "11" },
      { label: "Sections", value: "67+" },
      { label: "Colour ways", value: "4" },
      { label: "Modes", value: "Light + Dark" },
    ],
    /* Moved off the homepage: this is what a PureSaaS build includes, which is
       theme-level detail, not club-level. Rewritten for a buyer who receives a
       finished site rather than a repo — "18 sections" beats "18 modules". */
    pageList: [
      { title: "Home", detail: "18 sections", description: "The full conversion spine: hero, problem, solution, features, integrations, pricing and FAQ." },
      { title: "Features", detail: "9 modules", description: "Tabbed explorer, capability grid and a feature deep-dive with alternating blocks." },
      { title: "Pricing", detail: "6 sections", description: "Three-tier table, comparison matrix, billing toggle, ROI calculator and FAQ." },
      { title: "Integrations", detail: "4 categories", description: "Native connections plus a Zapier/API hub with setup steps." },
      { title: "Contact", detail: "4 sections", description: "Sales hub with booking widget, form, channel chooser and FAQ." },
      { title: "Blog + Post", detail: "2 pages", description: "Blog index with categories, plus a post layout with newsletter capture." },
      { title: "Demo Request", detail: "1 page", description: "Booking page with objection handling and trust signals." },
      { title: "Thank You", detail: "1 page", description: "Post-conversion page that keeps momentum with clear next steps." },
      { title: "Coming Soon", detail: "1 page", description: "Pre-launch countdown with email capture for early access." },
      { title: "404", detail: "1 page", description: "Branded error page that recovers the visit instead of losing it." },
    ],
    colorways: [
      { name: "Classic", desc: "Conservative and professional. Deep navy and amber — authority by design.", dot: "#1e3a5f" },
      { name: "Modern", desc: "Clean and contemporary. Slate and electric blue. Feels like a funded startup.", dot: "#3b82f6" },
      { name: "Jamboo", desc: "Bold and high-energy. Neon accents on a dark canvas. Stops the scroll.", dot: "#a855f7" },
      { name: "Pluto", desc: "Sophisticated dark mode. Mint and charcoal. Premium agency aesthetic.", dot: "#10b981" },
    ],
    cover: "/thumb.png",
    isNew: true,
  },
  {
    slug: "placeholder-medspa",
    name: "Theme Two",
    category: "Med Spa",
    blurb: "Placeholder entry — replace with the next theme you ship.",
    pages: 9,
    isNew: true,
  },
  {
    slug: "placeholder-home-services",
    name: "Theme Three",
    category: "Home Services",
    blurb: "Placeholder entry — replace with the next theme you ship.",
    pages: 7,
  },
  {
    slug: "placeholder-real-estate",
    name: "Theme Four",
    category: "Real Estate",
    blurb: "Placeholder entry — replace with the next theme you ship.",
    pages: 8,
  },
  {
    slug: "placeholder-fitness",
    name: "Theme Five",
    category: "Fitness",
    blurb: "Placeholder entry — replace with the next theme you ship.",
    pages: 10,
  },
  {
    slug: "placeholder-dental",
    name: "Theme Six",
    category: "Dental & Chiro",
    blurb: "Placeholder entry — replace with the next theme you ship.",
    pages: 12,
  },
];

export function getTheme(slug: string): Theme | undefined {
  return THEMES.find((t) => t.slug === slug);
}

/** Same category first, topped up with others so the rail is never empty. */
export function getRelated(slug: string, limit = 3): Theme[] {
  const current = getTheme(slug);
  if (!current) return [];
  const others = THEMES.filter((t) => t.slug !== slug);
  const sameCategory = others.filter((t) => t.category === current.category);
  const rest = others.filter((t) => t.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
