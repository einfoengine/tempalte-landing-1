import Link from "next/link";
import { OFFER, INCLUDED, price, buildRange } from "@/lib/offer";

/* HORIZONTAL by design. A tall narrow card is the visual grammar of a pricing
   *tier* — it invites the eye to look left and right for the other two plans.
   There is only one offer here, so the layout goes wide instead: price and CTA
   on the left, everything-included on the right in two columns.

   Reused on /pricing, the homepage preview, and each template's detail page. */
export function OfferCard({
  templateName,
  templateSlug,
}: {
  templateName?: string;
  /* When set, the CTA starts the build for THIS template instead of sending the
     visitor back to the list they just came from. */
  templateSlug?: string;
}) {
  const ctaHref = templateSlug ? `/start?template=${templateSlug}` : "/templates";
  const ctaLabel = templateName ? `Build with ${templateName} →` : "Pick a template →";
  return (
    <div className="max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-[minmax(0,20rem)_1fr]">
        {/* Left — price + CTA */}
        <div className="bg-orange-500 p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
          <div className="text-orange-100 text-xs font-semibold uppercase tracking-widest mb-3">
            {templateName ? `Build with ${templateName}` : "One flat price"}
          </div>
          <div className="font-display font-black text-white text-5xl lg:text-6xl leading-none tracking-tight mb-3">
            {price(OFFER.price)}
          </div>
          {/* Deliberately does not repeat the support term — it's in the
              checklist to the right and in the section subtitle above. */}
          <p className="text-orange-100 text-sm leading-relaxed mb-7">
            One-time. No monthly fee. Live in {buildRange()}.
          </p>
          <Link
            href={ctaHref}
            className="gw-cta-glow inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-orange-600 font-bold px-6 py-3.5 rounded-full transition-colors"
          >
            {ctaLabel}
          </Link>
          <p className="text-xs text-orange-100/90 mt-3">
            Full refund before we start
          </p>
        </div>

        {/* Right — what's included, on dark. Every child is recoloured for the
            dark ground: the tick uses orange-400 (the brighter emerald step),
            because orange-500 is the deep brand green and drops to roughly 1.6:1
            against slate-900 — invisible in practice. */}
        <div className="bg-slate-900 p-8 md:p-10">
          <h3 className="font-bold text-white mb-5">
            Everything included — no add-ons:
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-[11px] flex items-center justify-center shrink-0">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-400 mt-6 pt-5 border-t border-slate-700/60">
            You own the finished site. Export it any time — nothing is locked to us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Offer() {
  return (
    <section id="gw-offer" className="bg-white py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">Pricing</span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-5">
            <span className="font-light text-slate-500">Pick one design. </span>
            <span className="font-bold">One price, <span className="gw-kw">everything included</span>.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            No packages, no tiers, no monthly fee. Pick the design you want and we build your
            website from it — in your brand, connected to your GoHighLevel, with{" "}
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
        <div className="mt-8 gw-swipe max-w-none">
          <div className="text-orange-600 font-mono text-[10px] font-bold uppercase tracking-widest mb-2">Guarantee</div>
          <p className="font-display font-bold text-lg text-slate-900 mb-1">
            Live within 7 days of getting your details — or your money back.
          </p>
          <p className="text-sm text-slate-600">And what you see is what you get: the design you picked is the site you launch, rebuilt in your brand.</p>
        </div>
      </div>
    </section>
  );
}
