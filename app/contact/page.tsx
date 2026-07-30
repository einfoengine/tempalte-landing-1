import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { buildRange } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Contact ghlsaastheme — Talk to Us About Your SaaS Website",
  description:
    "Questions before you start, or want a theme recommendation for your niche? Book a call or email us — real people who know GoHighLevel.",
  alternates: { canonical: "/contact" },
};

const NEXT_STEPS = [
  { title: "We reply fast", body: "A real person, usually same business day — not a ticket queue." },
  { title: "We recommend a theme", body: "Tell us your niche and we'll point you to the right one." },
  { title: `Live in ${buildRange()}`, body: "Say yes and the build starts. No long onboarding." },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Talk to a human"
        titleLight="Questions before"
        titleBold="you"
        keyword="start?"
        subtitle="Want a theme recommendation for your niche, or just want to make sure this fits before you commit? Book a call or drop us a line — we know GoHighLevel."
      />

      <section id="gw-contact-body" className="pb-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — how to reach + what happens */}
          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 mb-6">
              <h2 className="font-bold text-slate-900 text-lg tracking-tight mb-4">
                Reach us directly
              </h2>
              <div className="space-y-4">
                <a href="mailto:hello@growx.com" className="flex items-center gap-3 group">
                  <span className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    ✉
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      hello@growx.com
                    </span>
                    <span className="block text-xs text-slate-400">
                      Email us anytime
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="font-bold text-slate-900 text-lg tracking-tight mb-5">
                What happens next
              </h2>
              <ol className="space-y-4">
                {NEXT_STEPS.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-800">
                        {step.title}
                      </span>
                      <span className="block text-sm text-slate-500">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right — GHL booking widget slot. Dogfoods the product: this is the
              exact embed you set up for members' sites. Wire up the real
              calendar/form embed code here. */}
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 min-h-[26rem] flex flex-col items-center justify-center text-center">
            <span className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-2xl mb-4">
              📅
            </span>
            <h2 className="font-bold text-slate-900 text-lg tracking-tight mb-2">
              Booking widget goes here
            </h2>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-4">
              Embed your GoHighLevel calendar or contact form in this slot — the
              same embed you&apos;ll drop into every member&apos;s site. Until
              then, email works fine.
            </p>
            <a
              href="mailto:hello@growx.com?subject=Question%20about%20Theme%20Club"
              className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:underline"
            >
              Email us instead →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
