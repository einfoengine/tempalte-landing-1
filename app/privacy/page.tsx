import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ghlsaastheme",
  description: "What data ghlsaastheme collects, why, and your rights over it.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="Set on launch"
      intro="What we collect, why, and your rights over it. We collect what we need to build and maintain your site — nothing we don't."
      sections={[
        {
          heading: "What we collect",
          body: [
            "Contact details you give us (name, email) when you enquire, join the drop list, or start a build.",
            "Intake information you provide to build your site (brand assets, business details, content, embed configuration).",
            "Basic analytics about how the site is used, to improve it.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "To respond to you, deliver and maintain your site, process payments, and send the occasional update or new-template drop email you opted into. You can unsubscribe from marketing email at any time.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "Only the processors needed to run the service — for example payment, hosting, email and analytics providers — under their own terms. We don't sell your data.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can ask us to access, correct, or delete your personal data. Email hello@ghlsaastheme.com and we'll action it within a reasonable period.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about privacy: hello@ghlsaastheme.com."],
        },
      ]}
    />
  );
}
