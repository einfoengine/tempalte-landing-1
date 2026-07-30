import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OFFER, buildRange, fromPrice, price } from "@/lib/offer";
import { TEMPLATES } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Start your build — ghlsaastheme",
  description: `Choose a package and template and we'll launch your HighLevel SaaS website in ${buildRange()}. Payment, intake, kickoff — momentum engineered into every step.`,
};

/* F1 conversion flow — checkout → intake → kickoff. NOT wired to payment yet:
   the mailto is the honest stopgap. Replace with real checkout (Stripe/GHL) +
   the intake form (F1 §7.2) in Sprint 1 ops. */
const WHAT_HAPPENS = [
  { number: "01", title: "Choose package + template", body: "Pick Launch, Growth or Partner, and the template you want. Payment first — commitment, then homework." },
  { number: "02", title: "Complete the intake", body: "Brand, business, offer, your two niches and proof, and your GHL embed details. Skippable groups so nothing stalls the build." },
  { number: "03", title: "Kickoff + launch", body: `A day-by-day timeline, one consolidated revision round, live on your domain in ${buildRange()}. The clock starts at completed intake.` },
];

export default function StartPage() {
  return (
    <>
      <Navbar />
      <main className="hero-dot-bg">
        <section id="start-build" className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-7">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              {OFFER.slotsPerMonth} customization slots a month · Limited capacity
            </span>
            <h1 className="text-4xl sm:text-5xl text-slate-900 leading-[1.05] tracking-tight mb-5">
              <span className="block font-light text-slate-500">Let&apos;s launch</span>
              <span className="block font-bold">your <span className="kw">site</span></span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              From {price(fromPrice())} launched — template, customization and
              maintenance. Live in {buildRange()}. You own it, no lock-in.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-5 mb-12">
            {WHAT_HAPPENS.map((step) => (
              <li key={step.number} className="relative bg-white rounded-2xl border border-slate-200 p-6">
                <span className="font-display font-bold text-3xl text-slate-100 tracking-tight absolute top-4 right-5 select-none">{step.number}</span>
                <h2 className="font-bold text-slate-900 mb-2 relative text-base">{step.title}</h2>
                <p className="text-sm text-slate-500 leading-relaxed relative">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
            <p className="text-sm text-slate-400 mb-2">Ready when you are</p>
            <p className="font-display font-bold text-3xl text-slate-900 tracking-tight mb-6">
              from {price(fromPrice())}<span className="text-lg font-semibold text-slate-400"> launched</span>
            </p>
            <a
              href="mailto:hello@ghlsaastheme.com?subject=Start%20my%20build"
              className="cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors"
            >
              Email us to start
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <p className="text-xs text-slate-400 mt-4">
              Not sure which template?{" "}
              <Link href="/templates" className="text-orange-600 font-semibold hover:underline">Browse all {TEMPLATES.length}</Link>{" "}
              or <Link href="/packages" className="text-orange-600 font-semibold hover:underline">compare packages</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
