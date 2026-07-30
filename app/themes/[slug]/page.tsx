import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeCard from "@/components/ThemeCard";
import { getRelated, getTheme, THEMES } from "@/lib/themes";
import { getNicheByCategory } from "@/lib/niches";
import { OFFER, price } from "@/lib/offer";

type Props = { params: Promise<{ slug: string }> };

/* The catalog is a static array, so every route is known at build time and
   anything else is a genuine 404 rather than an on-demand render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return THEMES.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) return {};

  const title = `${theme.name} — ${theme.category} theme for GoHighLevel`;
  return {
    title,
    description: theme.blurb,
    openGraph: {
      title,
      description: theme.blurb,
      type: "website",
      ...(theme.cover ? { images: [{ url: theme.cover }] } : {}),
    },
  };
}

export default async function ThemePage({ params }: Props) {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) notFound();

  const related = getRelated(slug);
  const niche = getNicheByCategory(theme.category);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section id="theme-header" className="hero-dot-bg pt-12 pb-16">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <Link
              href="/#themes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8"
            >
              ← All themes
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              {/* Category links up to its niche page — keeps the SEO surface
                  and the catalog connected in both directions. */}
              {niche ? (
                <Link
                  href={`/niches/${niche.slug}`}
                  className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full hover:border-orange-200 transition-colors"
                >
                  {theme.category} →
                </Link>
              ) : (
                <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                  {theme.category}
                </span>
              )}
              {theme.isNew && (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2.5 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl text-slate-900 leading-[1.05] tracking-tight mb-5 max-w-3xl">
              <span className="font-light text-slate-500">The </span>
              <span className="font-bold">
                <span className="kw">{theme.name}</span> theme
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              {theme.blurb}
            </p>
          </div>
        </section>

        {/* Preview + sidebar */}
        <section id="theme-preview" className="pb-20 -mt-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-start">
            {/* Preview */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white">
                <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-slate-400 font-mono border border-slate-200 truncate">
                    www.yourbrand.com
                  </div>
                </div>

                <div className="relative aspect-16/10 bg-slate-50">
                  {theme.cover ? (
                    <Image
                      src={theme.cover}
                      alt={`${theme.name} theme preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover object-top"
                      loading="eager"
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-orange-50 to-slate-50 flex flex-col items-center justify-center gap-2">
                      <p className="font-semibold text-slate-500">
                        Preview coming soon
                      </p>
                      <p className="text-sm text-slate-400">
                        This theme is still in the workshop.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* About */}
              <div className="mt-10">
                <h2 className="text-2xl tracking-tight text-slate-900 mb-4">
                  <span className="font-light">About this </span>
                  <span className="font-bold">theme</span>
                </h2>
                <p className="text-slate-500 leading-relaxed max-w-2xl">
                  {theme.description ?? theme.blurb}
                </p>
              </div>

              {/* Specs — only rendered when the theme actually has them */}
              {theme.specs && theme.specs.length > 0 && (
                <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                  {theme.specs.map((spec) => (
                    <div key={spec.label} className="bg-white p-4">
                      <dt className="text-xs text-slate-400 mb-1">{spec.label}</dt>
                      <dd className="font-display font-bold text-slate-900 text-lg tracking-tight">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {/* Pages — moved off the homepage; this is theme-level detail */}
              {theme.pageList && theme.pageList.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl tracking-tight text-slate-900 mb-2">
                    <span className="font-light">Every page your </span>
                    <span className="font-bold">site includes</span>
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Built, branded and filled in for you — not handed over as a to-do list.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {theme.pageList.map((page) => (
                      <div
                        key={page.title}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-center justify-between gap-3 mb-1.5">
                          <span className="font-bold text-slate-800 text-sm">
                            {page.title}
                          </span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-500 shrink-0">
                            {page.detail}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Colour ways */}
              {theme.colorways && theme.colorways.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl tracking-tight text-slate-900 mb-2">
                    <span className="font-light">Pick your </span>
                    <span className="font-bold">colour way</span>
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Tell us which you want — or send your brand palette and
                    we&apos;ll match it.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {theme.colorways.map((way) => (
                      <div
                        key={way.name}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <div
                            className="w-5 h-5 rounded-full border-2 border-white shadow-md shrink-0"
                            style={{ backgroundColor: way.dot }}
                          />
                          <span className="font-bold text-slate-800 text-sm">
                            {way.name}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed">
                          {way.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-400 mb-1">Membership</p>
                <p className="font-display font-bold text-3xl text-slate-900 tracking-tight mb-1">
                  {price(OFFER.monthlyPrice)}
                  <span className="text-base font-semibold text-slate-400">/mo</span>
                </p>
                <p className="text-sm text-slate-500 mb-5">
                  We build this theme into your site and host it.
                </p>

                <ul className="space-y-3 mb-6 text-sm text-slate-600">
                  {[
                    `Built for you and live in ${OFFER.buildDays} days`,
                    `All ${theme.pages} pages, branded to you`,
                    "Hosting, domain and SSL included",
                    "Swap to any other theme, anytime",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-orange-50 text-orange-600 text-[10px] flex items-center justify-center shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/start"
                  className="cta-glow group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-6 pr-3 py-3 rounded-full transition-colors"
                >
                  Build with {theme.name}
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <p className="text-xs text-slate-400 text-center mt-3">
                  No code · Cancel anytime
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section id="related-themes" className="py-16 border-t border-slate-100 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl tracking-tight text-slate-900 mb-8">
                <span className="font-light">More </span>
                <span className="font-bold">themes</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((item) => (
                  <ThemeCard key={item.slug} theme={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
