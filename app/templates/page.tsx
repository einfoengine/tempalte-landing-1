import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import TemplateGrid from "@/components/TemplateGrid";
import HowItWorks from "@/components/HowItWorks";
import { TEMPLATES } from "@/lib/templates";
import { buildRange, fromPrice, price } from "@/lib/offer";

export const metadata: Metadata = {
  title: "GoHighLevel SaaS Website Templates | ghlsaastheme",
  description: `${TEMPLATES.length} conversion-ready website templates for HighLevel SaaS agencies — same content system, different presentation. From ${price(fromPrice())} launched, live in ${buildRange()}.`,
  alternates: { canonical: "/templates" },
};

export default function TemplatesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={`${TEMPLATES.length} templates · one content system`}
        titleLight="Same selling system."
        titleBold={`${TEMPLATES.length} ways to present`}
        keyword="it."
        subtitle="Every template implements the full content plan — 14 pages, funnels, academy shell. Pick the presentation that fits your brand; the thinking ships inside every one."
      />
      <TemplateGrid showHeader={false} />
      <HowItWorks />
    </PageShell>
  );
}
