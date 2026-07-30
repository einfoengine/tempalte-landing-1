import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import HowItWorks from "@/components/HowItWorks";
import { OFFER, buildRange, price } from "@/lib/offer";

export const metadata: Metadata = {
  title: "How It Works — Launch-Ready GoHighLevel SaaS Websites | ghlsaastheme",
  description: `You pick a template, we build your site from it in your brand, wire your GHL embeds and launch it in ${buildRange()}. Here's exactly what we need from you and what you never have to do.`,
  alternates: { canonical: "/how-it-works" },
};

const FROM_YOU = [
  "Your logo and brand colours (or let us pick)",
  "The template you want — or your niche, and we'll recommend",
  "Your two niches + any proof you can use",
  "Your GHL embed details and domain",
];

const NEVER = [
  "Open a code editor or run a command",
  "Wrestle a page builder or template",
  "Write a whole site of copy from scratch",
  "Chase a freelancer for edits after launch",
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Done for you, start to finish"
        titleLight="You pick."
        titleBold="We"
        keyword="build."
        subtitle={`This isn't a template you download and figure out. You choose a template, we build your site from it in your brand, wire your CRM and launch it — live in ${buildRange()}. Here's exactly how it goes.`}
      />

      <HowItWorks showHeader={false} />

      <section id="gw-what-we-need" className="py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1">What we need from you</h2>
            <p className="text-sm text-slate-400 mb-5">A short intake, then we run with it.</p>
            <ul className="space-y-3">
              {FROM_YOU.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-orange-50 text-orange-600 text-[10px] flex items-center justify-center shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8">
            <h2 className="text-xl font-bold text-white tracking-tight mb-1">What you never do</h2>
            <p className="text-sm text-slate-400 mb-5">The whole point of paying us.</p>
            <ul className="space-y-3">
              {NEVER.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-slate-700 text-slate-300 text-[10px] flex items-center justify-center shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="gw-hiw-cta" className="pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl tracking-tight text-slate-900 mb-4">
            <span className="font-light">Live in {buildRange()} for </span>
            <span className="font-bold">{price(OFFER.price)}</span>
          </h2>
          <p className="text-slate-500 mb-7">We build your site in your brand, wire your CRM, and support it free for {OFFER.supportMonths} months.</p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <Link href="/templates" className="gw-cta-glow inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors w-full sm:w-auto justify-center shrink-0">
              See templates
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none">→</span>
            </Link>
            <Link href="/pricing" className="text-slate-700 font-semibold px-8 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors w-full sm:w-auto text-center shrink-0">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
