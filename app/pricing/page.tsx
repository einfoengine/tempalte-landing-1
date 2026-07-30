import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import { OFFER, price, buildRange } from "@/lib/offer";

export const metadata: Metadata = {
  title: `GoHighLevel SaaS Website — ${price(OFFER.price)}, Built for You | ghlsaastheme`,
  description: `Pick a template and we build your HighLevel SaaS website from it in your brand, wired to your CRM, live in ${buildRange()} — with ${OFFER.supportMonths} months of technical support free.`,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="One template · built for you"
        titleLight="Pick a template."
        titleBold="We build the"
        keyword="site."
        subtitle={`One flat price to build your website from any template — in your brand, wired to your GoHighLevel, with ${OFFER.supportMonths} months of technical support included. The price is a placeholder; set your own.`}
      />
      <Offer />
      <FAQ />
    </PageShell>
  );
}
