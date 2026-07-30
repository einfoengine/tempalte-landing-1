import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { OFFER } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Refund Policy — ghlsaastheme",
  description: "Full refund any time before customization starts. After that, the 7-day launch guarantee and revision rounds are the mechanism.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund policy"
      updated="Set on launch"
      intro="Our refund terms mirror how the work actually happens: before we start customizing, a refund is simple; once your site is being built, we make it right instead."
      sections={[
        {
          heading: "Before customization starts",
          body: [
            "You can request a full refund at any time before customization work on your site begins. No questions, no fee.",
          ],
        },
        {
          heading: "After customization starts",
          body: [
            "Once our team has begun building your site, the fee covers work in progress and is non-refundable. Instead of a refund, we make it right: the launch guarantee and included revision rounds are the mechanism.",
            "Launch guarantee: if your site is not live within 7 days of your completed intake, your customization fee is returned.",
          ],
        },
        {
          heading: "Technical support",
          body: [
            `Every build includes ${OFFER.supportMonths} months of technical support, free. It isn't a subscription and there's nothing to cancel — after the period ends the site is still yours, and you can hire us for ad-hoc work whenever you need it.`,
          ],
        },
        {
          heading: "How to request",
          body: ["Email hello@ghlsaastheme.com from the address on your order. We respond within one business day."],
        },
      ]}
    />
  );
}
