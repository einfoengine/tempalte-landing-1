import Image from "next/image";
import Link from "next/link";
import { TEMPLATES, newDrop } from "@/lib/templates";
import { OFFER, buildRange, price } from "@/lib/offer";

/* P1 §1.1 — new-template takeover. Left: pitch. Right: the current new drop in
 * a browser mockup. Stats are honest-early (no fabricated launch counts — the
 * plan's proof standard forbids them); swap in real counts as they accrue. */
const STATS = [
  { value: buildRange(), label: "From intake to live" },
  { value: `${TEMPLATES.length}`, label: "Templates, one content system" },
  { value: "Maintained", label: "After launch, not handed off" },
];

export default function Hero() {
  const drop = newDrop();
  return (
    <section id="hero" className="hero-dot-bg pt-16 pb-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-7">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              New drop: {drop.name} · Built for HighLevel SaaS
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl text-slate-900 leading-[1.05] tracking-tight mb-6">
              <span className="block font-light text-slate-500">Your SaaS is ready.</span>
              <span className="block font-bold">
                Your website <span className="kw">says otherwise.</span>
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-9">
              Conversion-ready website templates for HighLevel SaaS agencies. Pick
              one — we build your site from it in your brand, wire your CRM, and
              launch it in {buildRange()}. Not a file. A finished website.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-5">
              <Link
                href="/templates"
                className="cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full text-base transition-colors w-full sm:w-auto"
              >
                Browse templates
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href={`/templates/${drop.slug}`}
                className="text-slate-700 font-semibold px-8 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors w-full sm:w-auto text-center"
              >
                Preview {drop.name} — new this month
              </Link>
            </div>

            <p className="text-sm text-slate-400 mb-10">
              From {price(fromPrice())} launched · GHL embeds wired · You never touch code
            </p>

            <dl className="flex items-start justify-center lg:justify-start gap-8 sm:gap-12 pt-8 border-t border-slate-200/80">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display font-bold text-3xl text-slate-900 tracking-tight">{stat.value}</span>
                    <span className="block text-xs text-slate-400 leading-snug mt-1 max-w-[9rem]">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — the new drop in a browser mockup */}
          <div className="relative">
            <div className="absolute -inset-6 bg-linear-to-br from-orange-50 via-slate-50 to-white rounded-3xl -z-10" />
            <div className="relative rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
              <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-slate-400 font-mono border border-slate-200 truncate">
                  {drop.name.toLowerCase()}.yoursaas.com
                </div>
              </div>
              <div className="relative aspect-16/10 bg-slate-50">
                {drop.cover ? (
                  <Image src={drop.cover} alt={`${drop.name} template preview`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" loading="eager" fetchPriority="high" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">Preview coming soon</div>
                )}
              </div>
            </div>
            <div className="absolute -left-4 sm:-left-8 bottom-8 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 hidden sm:block">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shrink-0" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-orange-600">New this month</div>
                  <div className="text-xs font-semibold text-slate-800">{drop.name} · {drop.personality}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
