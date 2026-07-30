import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — ghlsaastheme",
  description: "The terms for buying and using a ghlsaastheme package: one brand per license, you own the site, no lock-in.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="Set on launch"
      intro="Plain terms for buying and using a ghlsaastheme package. The short version: you own your site, one license covers one brand, and maintenance is a service you can leave any time."
      sections={[
        {
          heading: "What you're buying",
          body: [
            "Every package is a service: a template, customized by our team, launched on your domain, and maintained for the included term. It is not a downloadable file license.",
          ],
        },
        {
          heading: "License scope",
          body: [
            "One package licenses one brand on one domain. Running multiple SaaS brands requires an additional license per brand — you're paying for customization, not the template again.",
            "You may not resell, redistribute, or repackage the template or kit as a standalone product.",
          ],
        },
        {
          heading: "Ownership and export",
          body: [
            "You own your customized site. You can request a full export at any time, with documentation. Maintenance is a service, not a condition of keeping your site.",
          ],
        },
        {
          heading: "Your responsibilities",
          body: [
            "You are responsible for the accuracy and rights of content you provide (copy, logos, testimonials, client names) and for your own GoHighLevel account and embeds.",
          ],
        },
        {
          heading: "Affiliation",
          body: [
            "ghlsaastheme is an independent product built for the HighLevel ecosystem. It is not affiliated with, endorsed by, or sponsored by HighLevel, Inc.",
          ],
        },
        {
          heading: "Changes",
          body: ["We may update these terms; material changes will be posted here with a new effective date."],
        },
      ]}
    />
  );
}
