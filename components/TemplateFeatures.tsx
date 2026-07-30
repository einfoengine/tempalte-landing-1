import Link from "next/link";
import RevealGroup from "@/components/RevealGroup";
import BrandCompare from "@/components/BrandCompare";
import { OFFER, buildRange, price } from "@/lib/offer";
import { TEMPLATE_PAGES } from "@/lib/templates";

/* The page's showpiece section.
 *
 * Two deliberate choices:
 *  1. BENTO, not three equal boxes. The "complete site" claim is the biggest
 *     objection-killer, so it gets the biggest tile; brand and support stack
 *     beside it. Equal boxes made all three claims feel equally minor.
 *  2. Every tile SHOWS its claim instead of captioning an emoji — the page map
 *     renders the real page list, the brand tile renders an actual swatch swap,
 *     the support tile renders the 4-month term. Emoji decorate; these prove.
 *
 * Copy stays jargon-free: the buyer never touches the machinery, so naming it
 * only creates doubt.
 */

/* Renders the real page list, so the count can never drift from the data.
 *
 * Every tile is styled IDENTICALLY on purpose. Highlighting one made it look
 * selected — as if pages were options to pick, or one page differed from the
 * rest. All twelve are included in every build, so nothing should stand out.
 *
 * Tiles are their NATURAL height. An earlier version stretched them to fill a
 * row-span-2 column, which left each one mostly empty space — the bento no
 * longer forces that column to be double height, so no stretching is needed. */
function PageMap() {
  return (
    <RevealGroup
      as="ul"
      className="grid grid-cols-2 sm:grid-cols-3 gap-1.5"
    >
      {TEMPLATE_PAGES.map((page) => (
        <li
          key={page.name}
          className="min-w-0 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-2 flex items-center gap-1.5"
        >
          <svg
            className="w-3 h-3 text-orange-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          <span className="min-w-0 text-[11px] font-semibold text-slate-700 dark:text-slate-200 truncate">
            {page.name}
          </span>
        </li>
      ))}
    </RevealGroup>
  );
}

/** The support term as a timeline, so "4 months" lands as a duration. */
function SupportTimeline() {
  const months = Array.from({ length: OFFER.supportMonths }, (_, i) => i + 1);
  return (
    <div aria-hidden="true">
      <div className="flex items-center gap-1.5 mb-2">
        {months.map((m) => (
          <div key={m} className="flex-1">
            <div className="h-1.5 rounded-full bg-orange-500" />
            <div className="text-[10px] text-slate-400 mt-1.5 text-center">
              M{m}
            </div>
          </div>
        ))}
        <div className="flex-1 opacity-40">
          <div className="h-1.5 rounded-full bg-slate-300" />
          <div className="text-[10px] text-slate-400 mt-1.5 text-center">…</div>
        </div>
      </div>
    </div>
  );
}

export default function TemplateFeatures() {
  return (
    <section
      id="gw-whats-in-the-box"
      className="gw-hero-dot-bg py-24 border-t border-slate-100 dark:border-slate-800 scroll-mt-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <RevealGroup className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">
            What you get
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
            <span className="font-light text-slate-500 dark:text-slate-400">Everything your prospects need to say yes —</span>
            <br />
            <span className="font-bold">
              built and live in a <span className="gw-kw">week</span>.
            </span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            You choose how it looks. We do the building, the brand setup and the
            CRM wiring — then stay on hand for {OFFER.supportMonths} months.
          </p>
        </RevealGroup>

        {/* Bento: the biggest claim gets the biggest tile */}
        <RevealGroup className="grid lg:grid-cols-3 gap-5">
          {/* Complete site — spans two columns and both rows */}
          <div className="min-w-0 lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 md:p-8 shadow-sm flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="min-w-0">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl tracking-tight mb-2">
                  A complete site, not a landing page
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-lg">
                  Home, pricing, two pages for the niches you sell to, results,
                  your founder story, contact — everything a prospect needs to say
                  yes without booking a call first.
                </p>
              </div>
              <span className="shrink-0 font-display font-bold text-4xl text-orange-500 tracking-tight leading-none">
                {TEMPLATE_PAGES.length}
                <span className="block text-[10px] font-sans font-semibold uppercase tracking-widest text-slate-400 mt-1">
                  pages
                </span>
              </span>
            </div>

            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex-1 min-h-0">
                <PageMap />
              </div>
              <Link
                href="/templates"
                className="text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline mt-5 self-start"
              >
                See templates →
              </Link>
            </div>
          </div>

          {/* Your brand */}
          <div className="min-w-0 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 shadow-sm flex flex-col">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight mb-2">
              Your brand, not ours
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
              Your logo, colours, words and pricing throughout — plus your
              GoHighLevel forms, chat and calendars connected.
            </p>
            <div className="mt-auto">
              <BrandCompare />
              <Link
                href="/how-it-works"
                className="inline-block text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline mt-5"
              >
                How it works →
              </Link>
            </div>
          </div>

          {/* Support — full-width bar under the two tiles above. Horizontal so
              the row reads as a footer to the bento rather than a third column
              stranded beside empty space. */}
          <div className="min-w-0 lg:col-span-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 shadow-sm flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="md:max-w-md">
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">
                  {OFFER.supportMonths} months of support
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-50 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/30 px-2 py-0.5 rounded-full">
                  Free
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Something breaks, or you want the pricing page changed? Email us.
                No ticket queue, no hourly rate, no upsell.
              </p>
            </div>
            <div className="flex-1 min-w-0">
              <SupportTimeline />
            </div>
            <Link
              href="/pricing"
              className="shrink-0 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline"
            >
              See pricing →
            </Link>
          </div>
        </RevealGroup>

        {/* Summary strip ties the three tiles back to the one price */}
        <div className="mt-5 rounded-2xl bg-slate-900 p-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-white font-semibold">
              All three included, {price(OFFER.price)} one-time.
            </span>{" "}
            Live in {buildRange()} — you never open a code editor.
          </p>
          <Link
            href="/templates"
            className="shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
          >
            See templates →
          </Link>
        </div>
      </div>
    </section>
  );
}
