import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { buildRange } from "@/lib/offer";

export const metadata: Metadata = {
  title: "About ghlsaastheme — Launch Systems for HighLevel SaaS Founders",
  description:
    "Why ghlsaastheme exists: HighLevel agency owners are great at the offer and the automation, not at design and code. We solved the content problem once, then engineered the presentations.",
  alternates: { canonical: "/about" },
};

/* Copy here sticks to what's actually true and decided — the mission and the
   offer. Anything biographical (who founded it, where, track record) is a real
   factual claim I can't invent, so those sit in a clearly-marked placeholder
   block for the owner to fill. Don't replace it with a plausible-sounding
   fictional founder story. */
const BELIEFS = [
  {
    title: "The site is the salesperson",
    body: "A GoHighLevel operator can have the best automation in their niche and still lose the deal on a website that looks like a side project. The site is the first thing a prospect judges — so it should be the last thing you cut corners on.",
  },
  {
    title: "You shouldn't have to become a developer",
    body: "You went into GoHighLevel to run an offer, not to learn Next.js, wrestle a page builder, or babysit hosting. Handing you a template to figure out is just a different kind of homework. So we don't.",
  },
  {
    title: "Niche beats generic, every time",
    body: "A med spa and a roofing company don't convert on the same page. Themes built for one vertical — with the right proof, the right flow, the right language — beat a generic layout that speaks to everyone and closes no one.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Who we are"
        titleLight="We build the site so you can"
        titleBold="run the"
        keyword="business"
        subtitle="ghlsaastheme sells launch-ready SaaS websites — template + customization + maintenance — to HighLevel agency owners. You pick a template, we build and launch your site, and you get back to the work that actually makes you money."
      />

      {/* Beliefs */}
      <section id="gw-beliefs" className="pb-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {BELIEFS.map((belief) => (
              <div
                key={belief.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7"
              >
                <h2 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight mb-3">
                  {belief.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {belief.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story — PLACEHOLDER. Real bio facts go here; do not fabricate. */}
      <section id="gw-story" className="py-16 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 dark:bg-slate-900 p-8">
            <span className="inline-block text-orange-600 dark:text-orange-400 font-semibold text-xs uppercase tracking-widest mb-3">
              Your story goes here
            </span>
            <h2 className="text-2xl tracking-tight text-slate-900 dark:text-white mb-3">
              <span className="font-light">The people </span>
              <span className="font-bold">behind the club</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-3">
              This block is a placeholder. Add the real story: who you are, how
              long you&apos;ve worked in the GoHighLevel ecosystem, how many sites
              you&apos;ve shipped, and why you started the club. For a service that
              hosts a customer&apos;s business site, a genuine, specific founder
              story is one of the strongest trust signals you have.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Left intentionally blank rather than filled with invented
              credentials — swap this out before launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="gw-about-cta" className="pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl tracking-tight text-slate-900 dark:text-white mb-4">
            <span className="font-light">Ready when </span>
            <span className="font-bold">you are</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-7">
            Pick a template and we&apos;ll have your site live in {buildRange()}.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors"
          >
            See templates
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none">
              →
            </span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
