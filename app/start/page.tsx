import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OFFER, buildRange, price } from "@/lib/offer";
import { TEMPLATES } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Start your build — ghlsaastheme",
  description: `Pick a template and we'll build your HighLevel SaaS website from it in your brand, live in ${buildRange()}, with ${OFFER.supportMonths} months support free.`,
};

/* Conversion flow — pick → intake → kickoff. NOT wired to payment yet: the
   mailto is the honest stopgap. Replace with real checkout (Stripe/GHL) + the
   intake form in a later ops sprint. */
const WHAT_HAPPENS = [
  { number: "01", title: "Pick your template", body: "Choose the template you want built. Not sure? Tell us your niche and we'll recommend one." },
  { number: "02", title: "Complete the intake", body: "Your brand, business, offer, your two niches and proof, and your GHL embed details. Skippable groups so nothing stalls the build." },
  { number: "03", title: "Kickoff + launch", body: `A day-by-day timeline, one consolidated revision round, live on your domain in ${buildRange()}. The clock starts at completed intake.` },
];

export default function StartPage() {
  return (
    <>
      <Navbar />
      <main className="gw-hero-dot-bg">
        <section id="gw-start-build" className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 dark:border-orange-500/30 mb-7">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              {OFFER.slotsPerMonth} customization slots a month · Limited capacity
            </span>
            <h1 className="text-4xl sm:text-5xl text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-5">
              <span className="block font-light text-slate-500 dark:text-slate-400">Let&apos;s launch</span>
              <span className="block font-bold">your <span className="gw-kw">site</span></span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              {price(OFFER.price)} — we build your site from the template in your
              brand, wire your CRM, and support it free for {OFFER.supportMonths}{" "}
              months. Live in {buildRange()}. You own it, no lock-in.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-5 mb-12">
            {WHAT_HAPPENS.map((step) => (
              <li key={step.number} className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                <span className="font-display font-bold text-3xl text-slate-100 tracking-tight absolute top-4 right-5 select-none">{step.number}</span>
                <h2 className="font-bold text-slate-900 dark:text-white mb-2 relative text-base">{step.title}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 text-center shadow-sm">
            <p className="text-sm text-slate-400 mb-2">Ready when you are</p>
            <p className="font-display font-bold text-3xl text-slate-900 dark:text-white tracking-tight mb-6">
              {price(OFFER.price)}<span className="text-lg font-semibold text-slate-400"> built for you</span>
            </p>
            <a
              href="mailto:hello@ghlsaastheme.com?subject=Start%20my%20build"
              className="gw-cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors"
            >
              Email us
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <p className="text-xs text-slate-400 mt-4">
              Not sure which template?{" "}
              <Link href="/templates" className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">Browse all {TEMPLATES.length}</Link>{" "}
              or <Link href="/pricing" className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">see what&apos;s included</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
