import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OFFER, price } from "@/lib/offer";
import { THEMES } from "@/lib/themes";

export const metadata: Metadata = {
  title: "Start your build — Theme Club",
  description: `Pick a theme and we'll build your GoHighLevel marketing site in ${OFFER.buildDays} days. ${price(OFFER.monthlyPrice)}/month, hosting included, cancel anytime.`,
};

/* NOTE: this is the conversion endpoint and it is not wired to anything yet.
   Every CTA on the site lands here. It currently hands off to email — replace
   the mailto with real checkout (Stripe/GHL) plus an intake form when ready. */
const WHAT_HAPPENS = [
  {
    number: "01",
    title: "Tell us your theme and niche",
    body: "Email us the theme you want and what you do. If you're unsure which fits, say the vertical and we'll recommend one.",
  },
  {
    number: "02",
    title: "Send your brand assets",
    body: "Logo, colours and any copy you already have. Don't have copy? We'll write the first draft.",
  },
  {
    number: "03",
    title: "Your site goes live",
    body: `${OFFER.buildDays} days later you're live on your own domain, hosted by us, with support included.`,
  },
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
              {OFFER.slotsPerMonth} builds a month · Limited capacity
            </span>

            <h1 className="text-4xl sm:text-5xl text-slate-900 leading-[1.05] tracking-tight mb-5">
              <span className="block font-light text-slate-500">Let&apos;s build</span>
              <span className="block font-bold">
                your <span className="kw">site</span>
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              {price(OFFER.monthlyPrice)}/month covers the build, hosting, support
              and every theme we ship. Live in {OFFER.buildDays} days. Cancel
              anytime and the site comes down — or add the source and keep it.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-5 mb-12">
            {WHAT_HAPPENS.map((step) => (
              <li
                key={step.number}
                className="relative bg-white rounded-2xl border border-slate-200 p-6"
              >
                <span className="font-display font-bold text-3xl text-slate-100 tracking-tight absolute top-4 right-5 select-none">
                  {step.number}
                </span>
                <h2 className="font-bold text-slate-900 mb-2 relative text-base">
                  {step.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed relative">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
            <p className="text-sm text-slate-400 mb-2">Ready when you are</p>
            <p className="font-display font-bold text-3xl text-slate-900 tracking-tight mb-6">
              {price(OFFER.monthlyPrice)}
              <span className="text-lg font-semibold text-slate-400">/month</span>
            </p>
            <a
              href="mailto:hello@growx.com?subject=Start%20my%20build"
              className="cta-glow group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors"
            >
              Email us to start
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <p className="text-xs text-slate-400 mt-4">
              Not sure yet?{" "}
              <Link href="/#themes" className="text-orange-600 font-semibold hover:underline">
                Browse the {THEMES.length} themes
              </Link>{" "}
              first.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
