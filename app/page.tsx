import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ThreePaths from "@/components/ThreePaths";
import TemplateFeatures from "@/components/TemplateFeatures";
import HotThemes from "@/components/HotThemes";
import TemplateCard from "@/components/TemplateCard";
import HowItWorks from "@/components/HowItWorks";
import { OfferCard } from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { sortedTemplates, TEMPLATES } from "@/lib/templates";

/* P1 homepage — the plan's 9-section long-scroll: hero → proof → the three
 * usual paths → what's in the box → new+hot showcase → gallery preview →
 * how it works → packages preview → proof/FAQ/final CTA. */
export default function Home() {
  const preview = sortedTemplates().slice(0, 6);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <ThreePaths />
        <TemplateFeatures />
        <HotThemes />

        {/* §1.6 Gallery preview — six cards into the full gallery */}
        <section id="gw-gallery-preview" className="py-24 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-2">
                  <span className="font-light">The </span>
                  <span className="font-bold">template <span className="gw-kw">library</span></span>
                </h2>
                <p className="text-slate-500">{TEMPLATES.length} designs. Every one a complete website, built for you.</p>
              </div>
              <Link href="/templates" className="text-sm font-semibold text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-full px-5 py-2.5 shrink-0 transition-colors">
                See all {TEMPLATES.length} templates →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {preview.map((t) => (
                <TemplateCard key={t.slug} template={t} />
              ))}
            </div>
            <p className="text-center text-sm text-slate-400 mt-8">
              Every preview uses the same demo content — so you&apos;re comparing design, not copywriting.
            </p>
          </div>
        </section>

        <HowItWorks />

        {/* §1.8 Pricing preview — one offer, no tiers */}
        <section id="gw-pricing-preview" className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">Pricing</span>
              <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 leading-tight mb-4">
                <span className="font-light text-slate-500">Pick one design. </span>
                <span className="font-bold">One price, <span className="gw-kw">everything included</span>.</span>
              </h2>
            </div>
            <OfferCard />
            <p className="text-center mt-8">
              <Link href="/pricing" className="text-orange-600 font-bold text-sm hover:underline">
                See exactly what&apos;s included →
              </Link>
            </p>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
