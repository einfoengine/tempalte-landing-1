import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import TemplateCard from "@/components/TemplateCard";
import { OfferCard } from "@/components/Offer";
import {
  getTemplate,
  getRelated,
  TEMPLATES,
  TEMPLATE_PAGES,
  ENGINEERING,
  MATRIX_SECTIONS,
} from "@/lib/templates";
import { OFFER, buildRange, price } from "@/lib/offer";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTemplate(slug);
  if (!t) return {};
  const title = `${t.name} — ${t.mode} ${t.personality} SaaS website template | ghlsaastheme`;
  return {
    title,
    description: t.blurb,
    alternates: { canonical: `/templates/${t.slug}` },
    openGraph: { title, description: t.blurb, type: "website", ...(t.cover ? { images: [{ url: t.cover }] } : {}) },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const t = getTemplate(slug);
  if (!t) notFound();
  const related = getRelated(slug);

  return (
    <PageShell>
      {/* Hero */}
      <section id="gw-template-header" className="gw-hero-dot-bg pt-12 pb-16">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Link href="/templates" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-colors mb-8">
            ← All templates
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">{t.mode}</span>
                <span className="text-[11px] font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/15 border border-orange-100 dark:border-orange-500/30 px-2.5 py-1 rounded-full">{t.personality}</span>
                {t.badge && <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2.5 py-1 rounded-full">{t.badge === "hot" ? "Most launched" : t.badge}</span>}
              </div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-4">
                <span className="font-bold">{t.name}</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">{t.description}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-4">
                <Link href={`/start?template=${t.slug}`} className="gw-cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors">
                  Use this template
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link href="/pricing" className="text-slate-700 dark:text-slate-200 font-semibold px-8 py-4 rounded-full border border-slate-200 dark:border-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors text-center">
                  See pricing
                </Link>
              </div>
              <p className="text-sm text-slate-400">{price(OFFER.price)} built for you · Live in {buildRange()} · {OFFER.supportMonths} months support free</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-linear-to-br from-orange-50 via-slate-50 to-white dark:from-orange-500/10 dark:via-slate-900 dark:to-slate-900 rounded-3xl -z-10" />
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden bg-white dark:bg-slate-900">
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded-md px-3 py-1.5 text-xs text-slate-400 font-mono border border-slate-200 dark:border-slate-700 truncate">{t.slug}.yoursaas.com</div>
                </div>
                <div className="relative aspect-16/10 bg-slate-50 dark:bg-slate-900">
                  {t.cover ? (
                    <Image src={t.cover} alt={`${t.name} preview`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" loading="eager" fetchPriority="high" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-slate-400">
                      <span className="text-sm font-semibold">Live preview coming soon</span>
                      <span className="text-xs">Deployed demo is a Sprint 2 asset</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's inside — page map */}
      <section id="gw-page-map" className="py-20 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl tracking-tight text-slate-900 dark:text-white mb-2">
            <span className="font-light">Every page </span><span className="font-bold">we <span className="gw-kw">build for you</span></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">This isn&apos;t a homepage and an about page. {t.name} is a complete SaaS website — every page below, built in your brand and wired to your CRM.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TEMPLATE_PAGES.map((page) => (
              <div key={page.name} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-4">
                <div className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">{page.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{page.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation matrix */}
      <section id="gw-matrix" className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl tracking-tight text-slate-900 dark:text-white mb-2">
            <span className="font-light">What you&apos;re actually </span><span className="font-bold">choosing</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">Templates share the same pages and differ in how they look. Here&apos;s how {t.name} renders each section.</p>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-x-auto bg-white dark:bg-slate-900 max-w-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  <th className="text-left font-semibold text-slate-500 dark:text-slate-400 px-4 py-3">Content section</th>
                  <th className="text-left font-semibold text-slate-500 dark:text-slate-400 px-4 py-3">{t.name} renders it as</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_SECTIONS.map((s) => (
                  <tr key={s.key} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">{s.label}</td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{t.matrix[s.key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engineering strip */}
      <section id="gw-engineering" className="py-16 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl tracking-tight text-slate-900 dark:text-white mb-6">
            <span className="font-light">The </span><span className="font-bold">engineering standard</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            {ENGINEERING.map((e) => (
              <div key={e.label} className="bg-white dark:bg-slate-900 p-5">
                <div className="text-xs text-slate-400 mb-1">{e.label}</div>
                <div className="font-semibold text-slate-800 dark:text-slate-100 text-sm leading-snug">{e.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The offer */}
      <section id="gw-template-offer" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl tracking-tight text-slate-900 dark:text-white mb-2">
              <span className="font-light">Build your site with </span><span className="font-bold">{t.name}</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">One template, one price, built in your brand.</p>
          </div>
          <OfferCard templateName={t.name} templateSlug={t.slug} />
          <p className="text-center text-sm text-slate-400 mt-8">
            Live within 7 days of getting your details, or your money back
          </p>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section id="gw-related-templates" className="py-16 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl tracking-tight text-slate-900 dark:text-white mb-8">
              <span className="font-light">More </span><span className="font-bold">templates</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <TemplateCard key={r.slug} template={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
