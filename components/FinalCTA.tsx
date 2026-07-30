import Link from "next/link";
import { OFFER, buildRange, price } from "@/lib/offer";

/* Closing section. Deliberately does NOT reuse the "deals quietly die" line —
   that agitation belongs once, in the problem section above. Repeating a page's
   best line dulls it. This section's job is the decision, not the pain. */
const TRUST = [
  `${price(OFFER.price)} one-time`,
  `Live in ${buildRange()}`,
  `${OFFER.supportMonths} months support free`,
  "You own it, no lock-in",
];

export default function FinalCTA() {
  return (
    <section id="gw-get-started" className="bg-slate-50 py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-8">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          We take {OFFER.slotsPerMonth} builds a month
        </div>

        <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-6">
          <span className="font-light text-slate-500">You built the platform.</span>
          <br />
          <span className="font-bold">
            Now let it <span className="gw-kw">look like one</span>.
          </span>
        </h2>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-4">
          Pick the design today and your new site is live this time next week — on
          your domain, in your brand, with your GoHighLevel already connected.
        </p>
        <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
          {price(OFFER.price)} one-time, everything included. If you&apos;re not
          live within 7 days of sending your details, you get your money back.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-8">
          <Link
            href="/templates"
            className="gw-cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-black pl-10 pr-3 py-4 rounded-full text-lg transition-colors w-full sm:w-auto shadow-xl shadow-orange-500/25 shrink-0"
          >
            See templates
            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link href="/pricing" className="text-slate-700 font-semibold px-8 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors w-full sm:w-auto text-center shrink-0">
            See pricing
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
          {TRUST.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
