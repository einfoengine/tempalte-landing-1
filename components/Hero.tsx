import Link from "next/link";
import HeroThemeSlider from "@/components/HeroThemeSlider";
import { CATEGORIES, THEMES } from "@/lib/themes";
import { OFFER } from "@/lib/offer";

/* Stats are derived from the real catalog and the offer config, never
   hand-typed. Turnaround leads: for a done-for-you offer, "live in 7 days" is
   the number that closes, not a component count. */
const STATS = [
  { value: `${OFFER.buildDays} days`, label: "From theme pick to live site" },
  { value: String(THEMES.length), label: "Themes in the library" },
  { value: String(CATEGORIES.length - 1), label: "GHL niches covered" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-dot-bg pt-16 pb-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-7">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Done for you · Built for GoHighLevel
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl text-slate-900 leading-[1.05] tracking-tight mb-6">
              <span className="block font-light text-slate-500">Pick a theme.</span>
              <span className="block font-bold">
                We <span className="kw">build</span> your site.
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-9">
              Choose from a library of themes built for GoHighLevel niches. We
              design it, write it, launch it and host it — live in{" "}
              {OFFER.buildDays} days. You never touch code.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-5">
              <Link
                href="/#themes"
                className="cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full text-base transition-colors w-full sm:w-auto"
              >
                Pick your theme
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/#how-it-works"
                className="text-slate-700 font-semibold px-8 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors w-full sm:w-auto text-center"
              >
                See how it works
              </Link>
            </div>

            <p className="text-sm text-slate-400 mb-10">
              Hosting included · Swap themes anytime · Cancel anytime
            </p>

            <dl className="flex items-start justify-center lg:justify-start gap-8 sm:gap-12 pt-8 border-t border-slate-200/80">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display font-bold text-3xl text-slate-900 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block text-xs text-slate-400 leading-snug mt-1 max-w-[9rem]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — latest themes */}
          <div className="relative">
            <div className="absolute -inset-6 bg-linear-to-br from-orange-50 via-slate-50 to-white rounded-3xl -z-10" />
            <HeroThemeSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
