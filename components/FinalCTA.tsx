import Link from "next/link";
import { OFFER, price } from "@/lib/offer";

const TRUST = [
  "Live in 7 days",
  "Hosting included",
  "Swap themes anytime",
  "Cancel anytime",
];

export default function FinalCTA() {
  return (
    <section id="get-started" className="bg-slate-50 py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-8">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          {OFFER.slotsPerMonth} builds a month · Real capacity, real queue
        </div>

        <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-6">
          <span className="font-light text-slate-500">Stop letting a generic site</span>
          <br />
          <span className="font-bold">
            cost you <span className="kw">deals</span>
          </span>
        </h2>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-4">
          Every day your current site is live, it&apos;s making prospects question
          whether your platform is worth their money. Pick a theme today and
          we&apos;ll have the replacement live in {OFFER.buildDays} days.
        </p>
        <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
          {price(OFFER.monthlyPrice)}/month covers the build, the hosting, the
          support and every theme we ship from here on.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/start"
            className="cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-black pl-10 pr-3 py-4 rounded-full text-lg transition-colors w-full sm:w-auto shadow-xl shadow-orange-500/25"
          >
            Start my build
            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <Link
            href="/#themes"
            className="text-slate-700 font-semibold px-8 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors w-full sm:w-auto text-center"
          >
            Browse the library
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
