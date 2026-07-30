import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import TemplateCard from "@/components/TemplateCard";
import FinalCTA from "@/components/FinalCTA";
import { TEMPLATES, sortedTemplates } from "@/lib/templates";
import { buildRange } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Example Builds — GoHighLevel SaaS Websites We Launch | ghlsaastheme",
  description: `See the templates we build member sites from. Each is a complete, production-ready HighLevel SaaS marketing site, live in ${buildRange()}.`,
  alternates: { canonical: "/work" },
};

/* HONEST FRAMING (per the product owner): no paying clients yet, so this page
   shows the template demos as *example builds*, never as client results. The
   banner states it plainly. When real client sites exist, add them as a
   separate, clearly-labelled section above — never relabel demos as client
   work, the trap the old fake testimonials fell into. */
export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Example builds"
        titleLight="The kind of site"
        titleBold="you'll"
        keyword="launch"
        subtitle="Every template below is a complete, production-ready HighLevel SaaS marketing site — the full content system, built. Pick one and we build your version: your brand, your copy, your domain."
      />

      <section id="work-grid" className="pb-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 flex items-start gap-3">
            <span className="text-lg leading-none mt-0.5" aria-hidden="true">💡</span>
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong className="font-semibold">These are example builds, not client sites.</strong>{" "}
              We&apos;re a new shop — rather than show fabricated results, we&apos;re
              showing the actual templates your site would be built from. Real
              member launches (with live-site links, permission on file) appear
              here as they ship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTemplates().map((t) => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-8">
            Every preview runs the same demo content — comparing {TEMPLATES.length} presentations, not {TEMPLATES.length} copywriters.
          </p>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
