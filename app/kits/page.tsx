import type { Metadata } from "next";
import TemplateCard from "@/components/TemplateCard";
import { TEMPLATES } from "@/lib/templates";
import { OFFER, price } from "@/lib/offer";

/* Internal UI-kit reference at /kits. Deliberately unlinked from the navbar
   and excluded from sitemap.ts — it exists so we can eyeball the design
   system in one place, not for visitors. noindex keeps crawlers off it in
   case the URL leaks. */
export const metadata: Metadata = {
  title: "UI Kit — ghlsaastheme (internal)",
  robots: { index: false, follow: false },
};

/* Swatches read the same remapped orange→emerald scale the site uses, so this
   page can never drift from globals.css — change the tokens, the kit follows. */
const BRAND_SCALE = [
  { step: "50", cls: "bg-orange-50" },
  { step: "100", cls: "bg-orange-100" },
  { step: "200", cls: "bg-orange-200" },
  { step: "300", cls: "bg-orange-300" },
  { step: "400", cls: "bg-orange-400" },
  { step: "500", cls: "bg-orange-500" },
  { step: "600", cls: "bg-orange-600" },
  { step: "700", cls: "bg-orange-700" },
  { step: "800", cls: "bg-orange-800" },
  { step: "900", cls: "bg-orange-900" },
];

const SLATE_SCALE = [
  { step: "50", cls: "bg-slate-50" },
  { step: "100", cls: "bg-slate-100" },
  { step: "200", cls: "bg-slate-200" },
  { step: "400", cls: "bg-slate-400" },
  { step: "500", cls: "bg-slate-500" },
  { step: "900", cls: "bg-slate-900" },
];

function KitSection({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2 className="font-bold text-2xl text-slate-900 tracking-tight">
          {title}
        </h2>
        {note && (
          <p className="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            {note}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export default function KitsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-14">
        <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
          Internal · not linked anywhere
        </span>
        <h1 className="text-4xl sm:text-5xl text-slate-900 leading-[1.05] tracking-tight mb-4">
          <span className="block font-light text-slate-500">ghlsaastheme</span>
          <span className="block font-bold">
            UI <span className="gw-kw">kit</span>
          </span>
        </h1>
        <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
          Every token, text style and component the site is built from, rendered
          live. If it looks wrong here, it looks wrong everywhere.
        </p>
      </header>

      {/* ---------------------------------------------------------- Colors */}
      <KitSection
        title="Color"
        note="The Tailwind orange-* scale is remapped to the emerald brand palette in globals.css — these swatches render the live tokens. Lime is accent-only: backgrounds behind dark text, never text or CTAs."
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Brand (orange-* → emerald)
        </p>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
          {BRAND_SCALE.map((s) => (
            <div key={s.step}>
              <div
                className={`${s.cls} h-14 rounded-lg border border-slate-200/60`}
              />
              <p className="text-[11px] text-slate-500 font-medium mt-1.5 text-center">
                {s.step}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Neutrals (slate)
        </p>
        <div className="grid grid-cols-6 gap-2 mb-8 max-w-md">
          {SLATE_SCALE.map((s) => (
            <div key={s.step}>
              <div
                className={`${s.cls} h-14 rounded-lg border border-slate-200/60`}
              />
              <p className="text-[11px] text-slate-500 font-medium mt-1.5 text-center">
                {s.step}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Accent
        </p>
        <div className="flex items-center gap-4">
          <div
            className="h-14 w-28 rounded-lg border border-slate-200/60"
            style={{ background: "var(--accent-lime)" }}
          />
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">
              --accent-lime
            </code>{" "}
            — swashes and highlights only. Fails AA as text on white.
          </p>
        </div>
      </KitSection>

      <hr className="gw-section-divider mb-16" />

      {/* ------------------------------------------------------ Typography */}
      <KitSection
        title="Typography"
        note="Headings are Space Grotesk (set globally on h1–h6), body is Inter. The split-weight headline and the lime keyword swash are the two signature moves."
      >
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Display headline — split weight + .gw-kw swash
            </p>
            <p className="text-4xl sm:text-5xl leading-[1.05] tracking-tight font-display">
              <span className="block font-light text-slate-500">
                One membership.
              </span>
              <span className="block font-bold text-slate-900">
                Every <span className="gw-kw">theme</span>.
              </span>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Gradient text
            </p>
            <p className="font-display font-bold text-3xl tracking-tight gw-gradient-text">
              Deep emerald gradient headline
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Section heading
            </p>
            <h3 className="font-bold text-2xl text-slate-900 tracking-tight">
              How it works
            </h3>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Body / lede
            </p>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Lede paragraph — text-lg, slate-500, relaxed leading, max-w-xl.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xl mt-3">
              Card body — text-sm, slate-500, relaxed leading. Used inside every
              card and step across the site.
            </p>
            <p className="text-xs text-slate-400 mt-3">
              Fine print — text-xs, slate-400.
            </p>
          </div>
        </div>
      </KitSection>

      <hr className="gw-section-divider mb-16" />

      {/* --------------------------------------------------------- Buttons */}
      <KitSection
        title="Buttons & links"
        note="Primary CTA is a pill with the arrow chip and pulse glow — reserved for the one conversion action on a page. Everything else steps down."
      >
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="#"
            className="gw-cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors"
          >
            Primary CTA
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3 rounded-full border border-slate-200 transition-colors"
          >
            Secondary
          </a>

          <a href="#" className="text-orange-600 font-semibold hover:underline">
            Text link
          </a>

          <a
            href="#"
            className="text-sm text-slate-500 hover:text-orange-600 font-medium transition-colors"
          >
            Quiet link →
          </a>
        </div>
      </KitSection>

      <hr className="gw-section-divider mb-16" />

      {/* ---------------------------------------------------------- Badges */}
      <KitSection
        title="Badges & pills"
        note="Scarcity badge animates; category and New badges are static. Never invent numbers for the scarcity badge — it reads from lib/offer.ts."
      >
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            {OFFER.slotsPerMonth} builds a month · Limited capacity
          </span>

          <span className="text-[11px] font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
            Category pill
          </span>

          <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            New
          </span>

          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            Neutral label
          </span>
        </div>
      </KitSection>

      <hr className="gw-section-divider mb-16" />

      {/* ----------------------------------------------------------- Cards */}
      <KitSection
        title="Cards"
        note="All cards share rounded-2xl, border-slate-200, white surface. The theme card below is the real component rendering real catalog data."
      >
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Live component from the catalog */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              TemplateCard (live component)
            </p>
            <TemplateCard template={TEMPLATES[0]} />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Numbered step card
              </p>
              <div className="relative bg-white rounded-2xl border border-slate-200 p-6">
                <span className="font-display font-bold text-3xl text-slate-100 tracking-tight absolute top-4 right-5 select-none">
                  01
                </span>
                <h3 className="font-bold text-slate-900 mb-2 relative text-base">
                  Step title
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed relative">
                  Step body copy — the ghost numeral sits behind the content in
                  slate-100.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Price panel
              </p>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
                <p className="text-sm text-slate-400 mb-2">Ready when you are</p>
                <p className="font-display font-bold text-3xl text-slate-900 tracking-tight">
                  {price(OFFER.price)}
                  <span className="text-lg font-semibold text-slate-400">
                    {" "}built for you
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </KitSection>

      <hr className="gw-section-divider mb-16" />

      {/* ------------------------------------------------------- Surfaces */}
      <KitSection
        title="Surfaces & effects"
        note="Backgrounds and motion utilities from globals.css."
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              gw-hero-dot-bg
            </p>
            <div className="gw-hero-dot-bg h-40 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center">
              <p className="relative z-10 text-sm text-slate-500">
                Dotted hero background with radial fade
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              gw-animate-fade-up
            </p>
            <div className="gw-animate-fade-up h-40 rounded-2xl border border-slate-200 bg-white flex items-center justify-center">
              <p className="text-sm text-slate-500">
                Faded up 24px on page load
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            gw-section-divider
          </p>
          <hr className="gw-section-divider" />
        </div>
      </KitSection>

      <footer className="pt-8 border-t border-slate-100">
        <p className="text-xs text-slate-400">
          Tokens live in{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded">
            app/globals.css
          </code>
          , offer numbers in{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded">
            lib/offer.ts
          </code>
          . This page renders them live — nothing here is hard-coded to match.
        </p>
      </footer>
    </main>
  );
}
