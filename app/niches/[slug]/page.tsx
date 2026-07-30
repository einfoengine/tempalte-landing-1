import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeCard from "@/components/ThemeCard";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import { getNiche, NICHES } from "@/lib/niches";
import { THEMES } from "@/lib/themes";
import { OFFER, price } from "@/lib/offer";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return NICHES.map((niche) => ({ slug: niche.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) return {};

  return {
    title: niche.seoTitle,
    description: niche.seoDescription,
    alternates: { canonical: `/niches/${niche.slug}` },
    openGraph: {
      title: niche.seoTitle,
      description: niche.seoDescription,
      type: "website",
    },
  };
}

export default async function NichePage({ params }: Props) {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) notFound();

  const themes = THEMES.filter((t) => t.category === niche.category);
  const otherNiches = NICHES.filter((n) => n.slug !== slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section id="niche-header" className="hero-dot-bg pt-12 pb-20">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <Link
              href="/#themes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8"
            >
              ← All themes
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-6">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  {niche.name} · Built for GoHighLevel
                </span>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl text-slate-900 leading-[1.05] tracking-tight mb-6">
                  <span className="block font-light text-slate-500">
                    {niche.headline.light}
                  </span>
                  <span className="block font-bold">
                    {niche.headline.bold}{" "}
                    <span className="kw">{niche.headline.keyword}</span>
                  </span>
                </h1>

                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                  {niche.intro}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Link
                    href="/start"
                    className="cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors w-full sm:w-auto"
                  >
                    Start my build
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
                <p className="text-sm text-slate-400">
                  {price(OFFER.monthlyPrice)}/mo · Live in {OFFER.buildDays} days ·
                  Cancel anytime
                </p>
              </div>

              {/* What this vertical needs */}
              <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm lg:mt-16">
                <h2 className="font-bold text-slate-900 text-lg tracking-tight mb-1">
                  What {niche.prospect} need to see
                </h2>
                <p className="text-sm text-slate-400 mb-5">
                  Before they&apos;ll say yes to your offer.
                </p>
                <ul className="space-y-3 mb-7">
                  {niche.needs.map((need) => (
                    <li key={need} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-orange-50 text-orange-600 text-[10px] flex items-center justify-center shrink-0">
                        ✓
                      </span>
                      {need}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 pt-5">
                  <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
                    What&apos;s costing you deals today
                  </h3>
                  <ul className="space-y-2">
                    {niche.painPoints.map((pain) => (
                      <li key={pain} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed">{pain}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Themes for this niche */}
        <section id="niche-themes" className="py-20 border-t border-slate-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl tracking-tight text-slate-900 mb-2">
              <span className="font-light">Themes for </span>
              <span className="font-bold">
                <span className="kw">{niche.name.toLowerCase()}</span>
              </span>
            </h2>
            <p className="text-slate-500 mb-8">
              Pick one and we&apos;ll build your site around it in{" "}
              {OFFER.buildDays} days.
            </p>

            {themes.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {themes.map((theme) => (
                  <ThemeCard key={theme.slug} theme={theme} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
                <p className="text-slate-500 font-medium mb-1">
                  No {niche.name.toLowerCase()} theme is live yet.
                </p>
                <p className="text-sm text-slate-400 mb-6">
                  It&apos;s on the roadmap — members vote on what we build next,
                  and every new theme is free to switch to.
                </p>
                <Link
                  href="/start"
                  className="text-orange-600 font-bold text-sm hover:underline"
                >
                  Tell us you want it →
                </Link>
              </div>
            )}
          </div>
        </section>

        <HowItWorks />

        {/* Cross-links: every niche reachable from every other niche */}
        <section id="other-niches" className="py-16 border-t border-slate-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6">
              Other GHL niches
            </h2>
            <div className="flex flex-wrap gap-3">
              {otherNiches.map((other) => (
                <Link
                  key={other.slug}
                  href={`/niches/${other.slug}`}
                  className="text-sm font-semibold px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
                >
                  {other.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
