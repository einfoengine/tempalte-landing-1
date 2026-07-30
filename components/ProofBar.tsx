import { OFFER, buildRange, price } from "@/lib/offer";
import { TEMPLATE_PAGES } from "@/lib/templates";

/* Cost vs benefit, side by side — the arithmetic of acting against the
 * arithmetic of not acting.
 *
 * Scoped deliberately to MONEY AND TIME. The section directly below
 * (ThreePaths) covers the three routes a founder takes and why each stalls, so
 * this one stays on numbers to avoid making the same argument twice.
 *
 * The market figures ($5,000+, 6+ weeks) are the same ones used on the pricing
 * page — stated as what the alternatives typically cost, not as a measured
 * claim about a named competitor. */
const COST_OF_WAITING = [
  { head: "$5,000+", body: "for an agency to build the same thing" },
  { head: "6+ weeks", body: "before a single page goes live" },
  { head: "Your weekends", body: "if you try to build it yourself" },
  { head: "Every demo", body: "ends on a site that undercuts your pitch" },
];

const WHAT_YOU_GET = [
  { head: `${TEMPLATE_PAGES.length} pages`, body: "a complete site, built for you" },
  { head: `Live in ${buildRange()}`, body: "not six weeks — one week" },
  { head: "Your brand", body: "and your GoHighLevel connected" },
  { head: `${OFFER.supportMonths} months`, body: "of technical support, free" },
];

export default function ProofBar() {
  return (
    <section id="gw-proof" className="bg-slate-900 py-20 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-orange-400 font-semibold text-xs uppercase tracking-widest mb-4">
            Cost vs benefit
          </span>
          <h2 className="text-3xl md:text-4xl tracking-tight text-white leading-tight">
            <span className="font-light text-slate-400">Leaving your site alone </span>
            <span className="font-bold">
              has a price <span className="gw-kw">too</span>.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
          {/* Cost of doing nothing — visually receded */}
          <div className="rounded-2xl border border-slate-800 bg-slate-800/30 p-7">
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">
              If you leave it
            </div>
            <ul className="space-y-4">
              {COST_OF_WAITING.map((item) => (
                <li key={item.head} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-slate-500 text-[10px] flex items-center justify-center shrink-0"
                  >
                    ✕
                  </span>
                  <span>
                    <span className="block text-slate-300 text-sm font-semibold">
                      {item.head}
                    </span>
                    <span className="block text-slate-500 text-xs mt-0.5">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pivot */}
          <div className="flex md:flex-col items-center justify-center gap-3 md:px-2">
            <span className="h-px md:h-full w-full md:w-px flex-1 bg-slate-800" />
            <span className="text-slate-500 font-display font-bold text-sm uppercase tracking-widest shrink-0">
              vs
            </span>
            <span className="h-px md:h-full w-full md:w-px flex-1 bg-slate-800" />
          </div>

          {/* What the price buys — visually forward */}
          <div className="rounded-2xl border border-orange-500/40 bg-orange-500/[0.07] p-7">
            <div className="flex items-baseline gap-2 mb-5">
              <span className="font-display font-black text-white text-2xl tracking-tight">
                {price(OFFER.price)}
              </span>
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">
                once, and you get
              </span>
            </div>
            <ul className="space-y-4">
              {WHAT_YOU_GET.map((item) => (
                <li key={item.head} className="flex items-start gap-3">
                  <svg
                    aria-hidden="true"
                    className="mt-0.5 w-5 h-5 text-orange-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <span className="block text-white text-sm font-semibold">
                      {item.head}
                    </span>
                    <span className="block text-slate-400 text-xs mt-0.5">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
