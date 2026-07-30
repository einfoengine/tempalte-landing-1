import Link from "next/link";
import { OFFER, INCLUDED, price, buildRange } from "@/lib/offer";

/* The whole offer on one card — no tiers. Pick a template, one flat price, we
   build your site in your brand, 4 months support free. Reused on /pricing, the
   homepage preview, and each template's detail page. */
export function OfferCard({ templateName }: { templateName?: string }) {
  return (
    <div className="max-w-md mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="bg-orange-500 p-8 text-center">
        <div className="text-orange-100 text-sm font-semibold uppercase tracking-widest mb-3">
          {templateName ? `Build with ${templateName}` : "One template, built for you"}
        </div>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-white font-display font-black text-6xl leading-none tracking-tight">{price(OFFER.price)}</span>
        </div>
        <div className="text-orange-100 text-sm mt-3">
          One-time · {OFFER.supportMonths} months support free · Live in {buildRange()}
        </div>
      </div>
      <div className="p-8">
        <ul className="space-y-3 mb-7">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-orange-50 text-orange-600 text-[11px] flex items-center justify-center shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/templates"
          className="cta-glow flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-full transition-colors"
        >
          Pick your template →
        </Link>
        <p className="text-xs text-slate-400 text-center mt-3">You own it · No lock-in · Cancel anytime before we start</p>
      </div>
    </div>
  );
}

export default function Offer() {
  return (
    <section id="offer" className="bg-white py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">Pricing</span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-5">
            <span className="font-light text-slate-500">One template. </span>
            <span className="font-bold">One price. <span className="kw">Built for you.</span></span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            No packages, no tiers. Pick the template you want and we build your
            website from it — in your brand, wired to your GoHighLevel, with{" "}
            {OFFER.supportMonths} months of technical support included.
          </p>
        </div>

        <OfferCard />

        {/* Alternative-cost frame */}
        <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center">
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            A custom agency build: $5,000+, six weeks, then you&apos;re on your own.
            A marketplace template: $79, plus a month of your evenings, plus nobody
            to call when it breaks.
          </p>
          <p className="text-white font-bold text-lg">
            Or: your site built for you in {buildRange()}, in your brand — with{" "}
            {OFFER.supportMonths} months of support after.
          </p>
        </div>

        {/* Guarantee */}
        <div className="mt-8 swipe max-w-none">
          <div className="text-orange-600 font-mono text-[10px] font-bold uppercase tracking-widest mb-2">Guarantee</div>
          <p className="font-display font-bold text-lg text-slate-900 mb-1">
            Live within 7 days of your completed intake — or your fee comes back.
          </p>
          <p className="text-sm text-slate-600">And what you preview is what you launch: the template you clicked through is the site you get, in your brand.</p>
        </div>
      </div>
    </section>
  );
}
