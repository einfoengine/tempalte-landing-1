/* The catalog. Each template is a complete, multi-page SaaS website design.
 * They share the same page set and engineering standard — differing only in
 * PRESENTATION (mode, personality, and how each renders a section) — so the
 * page list and engineering standard live here once, at module level.
 *
 * You pick a template; we build your website from it in your brand and wire
 * your GoHighLevel. Template NAMES are placeholders — set your own. growX is
 * the flagship; Prism is the current new drop.
 */

export type Mode = "Light" | "Dark";
export type Personality = "Minimal" | "Bold" | "Editorial" | "Corporate";
/* Badge rules (enforced in copy, not fabricated):
 *   new     — 30 days from drop date
 *   hot     — top launched, trailing 90 days; ONE template holds it at a time
 *   updated — changelog entry within 60 days
 */
export type Badge = "new" | "hot" | "updated";

export type Template = {
  slug: string;
  name: string;
  mode: Mode;
  personality: Personality;
  badge?: Badge;
  /** One-line personality read for the hero/cards. */
  blurb: string;
  description: string;
  /** File in /public. Omit until a real cover exists — cards render a wireframe
   *  placeholder rather than pretending to be a screenshot. */
  cover?: string;
  /** How THIS template renders each shared content section. Keys line up with
   *  MATRIX_SECTIONS below. */
  matrix: Record<string, string>;
};

/* The pages every template includes — we build all of them in your brand.
 * Same page set across templates; presentation is what varies. */
export const TEMPLATE_PAGES = [
  { name: "Homepage", note: "Your hero, offer and primary CTA" },
  { name: "Industry pages ×2", note: "Two of your niches, spoken to directly" },
  { name: "Platform page", note: "What your CRM does, laid out clearly" },
  { name: "AI receptionist page", note: "Your AI feature, in the spotlight" },
  { name: "Pricing page", note: "Your plans, comparison and ROI" },
  { name: "Results + case study", note: "Your proof, structured" },
  { name: "Founder page", note: "Your story, the trust close" },
  { name: "Switching-from-X", note: "A competitor-switch landing page" },
  { name: "Demo pages", note: "VSL · booking · confirmation" },
  { name: "Trial page", note: "Your self-serve signup path" },
  { name: "Lead magnet page", note: "Capture + thank-you" },
  { name: "Contact + support", note: "Where your leads reach you" },
] as const;

/** The engineering standard — shared across every template. */
export const ENGINEERING = [
  { label: "Variables sheet", value: "Rebrand the whole site from one place" },
  { label: "Unique section IDs", value: "Every edit request references an ID" },
  { label: "Modular kit", value: "Reusable components, nothing redundant" },
  { label: "Performance", value: "Semantic HTML · Lighthouse 95+ target" },
];

/** Content sections whose presentation varies by template (the P3 matrix). */
export const MATRIX_SECTIONS: { key: string; label: string }[] = [
  { key: "faq", label: "FAQ / objections" },
  { key: "features", label: "Feature index" },
  { key: "testimonials", label: "Testimonials" },
  { key: "logos", label: "Client logos" },
  { key: "pricing", label: "Pricing tiers" },
  { key: "process", label: "Process / how it works" },
];

const CALM_MATRIX = {
  faq: "Accordion",
  features: "Tabbed groups",
  testimonials: "Static cards",
  logos: "Static row",
  pricing: "3-card row",
  process: "Numbered timeline",
};

const BOLD_MATRIX = {
  faq: "Two-column tabs",
  features: "Filterable grid",
  testimonials: "Auto-slider",
  logos: "Marquee",
  pricing: "Toggle + comparison table",
  process: "Horizontal stepper",
};

export const TEMPLATES: Template[] = [
  {
    slug: "growx",
    name: "growX",
    mode: "Light",
    personality: "Minimal",
    badge: "hot",
    blurb: "The flagship. Light, premium, the default choice.",
    description:
      "growX is the flagship template — light, calm and premium, built to full quality. The safe default for founders who want a clean, credible SaaS site without agonising over the look. We build every page of it in your brand.",
    matrix: CALM_MATRIX,
  },
  {
    slug: "prism",
    name: "Prism",
    mode: "Dark",
    personality: "Editorial",
    badge: "new",
    blurb: "Dark, editorial, confident. For brands that lead with design.",
    description:
      "Prism renders the same pages dark and editorial — tabs for features, a marquee logo wall, slider testimonials. For SaaS founders whose brand is the differentiator and who want the site to feel designed. We build it in your brand.",
    cover: "/thumb.png",
    matrix: BOLD_MATRIX,
  },
  {
    slug: "atlas",
    name: "Atlas",
    mode: "Light",
    personality: "Corporate",
    blurb: "Calm authority. For founders selling to professional services.",
    description:
      "Atlas is corporate-calm — trust-heavy, unhurried, built for founders whose buyers are lawyers, clinics, accountants and agencies. The same pages, dialled toward credibility over flash.",
    matrix: CALM_MATRIX,
  },
  {
    slug: "vertex",
    name: "Vertex",
    mode: "Dark",
    personality: "Bold",
    blurb: "High-energy and dark. Stops the scroll for high-velocity offers.",
    description:
      "Vertex is the loud one — dark canvas, high-contrast accents, motion with intent. For founders selling fast-moving offers who want the site to match the energy of the pitch.",
    matrix: BOLD_MATRIX,
  },
  {
    slug: "ledger",
    name: "Ledger",
    mode: "Light",
    personality: "Minimal",
    blurb: "Restrained and precise. For fintech-adjacent, numbers-first offers.",
    description:
      "Ledger strips it back — generous whitespace, precise type, proof and numbers doing the talking. For founders whose buyers respond to rigour over decoration.",
    matrix: CALM_MATRIX,
  },
  {
    slug: "nova",
    name: "Nova",
    mode: "Light",
    personality: "Bold",
    badge: "updated",
    blurb: "Bright and expressive. For consumer-flavoured SaaS brands.",
    description:
      "Nova is light but expressive — colour-forward, friendly, energetic. For founders whose CRM serves lifestyle, wellness or creator niches and whose brand can carry it.",
    matrix: BOLD_MATRIX,
  },
];

export const MODES: Mode[] = ["Light", "Dark"];
export const PERSONALITIES: Personality[] = ["Minimal", "Bold", "Editorial", "Corporate"];

export function getTemplate(slug: string): Template | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}

/** Hot first, then new, then the rest — the gallery's default sort. */
export function sortedTemplates(list: Template[] = TEMPLATES): Template[] {
  const rank = (t: Template) => (t.badge === "hot" ? 0 : t.badge === "new" ? 1 : 2);
  return [...list].sort((a, b) => rank(a) - rank(b));
}

/** Two related templates by personality contrast, so the pairing feels useful. */
export function getRelated(slug: string, limit = 2): Template[] {
  const current = getTemplate(slug);
  if (!current) return [];
  const others = TEMPLATES.filter((t) => t.slug !== slug);
  const contrast = others.filter((t) => t.mode !== current.mode);
  const rest = others.filter((t) => t.mode === current.mode);
  return [...contrast, ...rest].slice(0, limit);
}

export const flagship = () => TEMPLATES.find((t) => t.badge === "hot") ?? TEMPLATES[0];
export const newDrop = () => TEMPLATES.find((t) => t.badge === "new") ?? TEMPLATES[0];
