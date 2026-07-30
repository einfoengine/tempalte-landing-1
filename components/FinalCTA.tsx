import Link from "next/link";
import { OFFER, buildRange, fromPrice, price } from "@/lib/offer";

const TRUST = [
  "Not a file, a launch",
  `Live in ${buildRange()}`,
  "Maintained after",
  "You own it, no lock-in",
];

export default function FinalCTA() {
  return (
    <section id="get-started" className="bg-slate-50 py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-8">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          {OFFER.slotsPerMonth} customization slots a month · Real capacity
        </div>

        <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-6">
          <span className="font-light text-slate-500">A template is a file.</span>
          <br />
          <span className="font-bold">This is a <span className="kw">launch</span>.</span>
        </h2>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-4">
          Every demo you run ends with the prospect opening your website in another
          tab. That tab is where deals quietly die. Pick a template today and
          we&apos;ll have the replacement live in {buildRange()}.
        </p>
        <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
          From {price(fromPrice())} launched — template, customization and
          maintenance, by the people who built the system.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/templates"
            className="cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-black pl-10 pr-3 py-4 rounded-full text-lg transition-colors w-full sm:w-auto shadow-xl shadow-orange-500/25"
          >
            Browse templates
            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link href="/packages" className="text-slate-700 font-semibold px-8 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors w-full sm:w-auto text-center">
            See packages
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
