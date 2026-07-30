import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ThreePaths from "@/components/ThreePaths";
import TemplateFeatures from "@/components/TemplateFeatures";
import HotThemes from "@/components/HotThemes";
import TemplateCard from "@/components/TemplateCard";
import HowItWorks from "@/components/HowItWorks";
import { PackageCards } from "@/components/Packages";
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
        <section id="gallery-preview" className="py-24 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-2">
                  <span className="font-light">The </span>
                  <span className="font-bold">template <span className="kw">library</span></span>
                </h2>
                <p className="text-slate-500">Same selling system. {TEMPLATES.length} ways to present it.</p>
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
              Every demo runs the same demo content — so you&apos;re comparing design, not copywriting.
            </p>
          </div>
        </section>

        <HowItWorks />

        {/* §1.8 Packages preview */}
        <section id="packages-preview" className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">Packages</span>
              <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 leading-tight mb-4">
                <span className="font-light text-slate-500">Every package ends the same way: </span>
                <span className="font-bold">live and <span className="kw">maintained</span>.</span>
              </h2>
            </div>
            <PackageCards />
            <p className="text-center mt-8">
              <Link href="/packages" className="text-orange-600 font-bold text-sm hover:underline">
                Full package breakdown + what maintenance means →
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
