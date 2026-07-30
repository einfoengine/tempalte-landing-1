import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import TemplateGrid from "@/components/TemplateGrid";
import HowItWorks from "@/components/HowItWorks";
import { TEMPLATES } from "@/lib/templates";
import { OFFER, buildRange, price } from "@/lib/offer";

export const metadata: Metadata = {
  title: "GoHighLevel SaaS Website Templates | ghlsaastheme",
  description: `${TEMPLATES.length} complete website templates for HighLevel SaaS agencies. Pick one — we build your site from it in your brand for ${price(OFFER.price)}, live in ${buildRange()}.`,
  alternates: { canonical: "/templates" },
};

export default function TemplatesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={`${TEMPLATES.length} complete website templates`}
        titleLight="One website."
        titleBold={`${TEMPLATES.length} ways to present`}
        keyword="it."
        subtitle="Every template is a complete multi-page SaaS website. Pick the look that fits your brand — we build it for you, in your brand, wired to your GoHighLevel."
      />
      <TemplateGrid showHeader={false} />
      <HowItWorks />
    </PageShell>
  );
}
