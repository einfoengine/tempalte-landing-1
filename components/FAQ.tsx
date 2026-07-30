"use client";

import { useState } from "react";
import { OFFER, price, buildRange } from "@/lib/offer";

/* Answers written for AI extraction and skeptical operators alike: direct first
   sentence, no preamble. Model is ONE template, one price, we build it in your
   brand, 4 months free technical support — no tiers, no packages. */
const faqs = [
  {
    q: "What exactly am I buying?",
    a: `One template, built into your website. You pick the template you want, we build every page of it in your brand, wire it to your GoHighLevel, and launch it on your domain — ${price(OFFER.price)}, with ${OFFER.supportMonths} months of technical support included.`,
  },
  {
    q: "Is this a template I download?",
    a: "No — that's the whole point. You never download or configure anything. We do the build and hand you a finished, live website. The template is what you're choosing, not what you're receiving.",
  },
  {
    q: "Do I own the site?",
    a: "Yes. One purchase licenses one brand on one domain, and the finished site is yours. You can export it any time with docs. Nothing is held hostage.",
  },
  {
    q: "Does it work with my GoHighLevel?",
    a: "Yes. Your funnels stay in GHL — this is your marketing website. We wire your forms, chat widget and calendars straight into the pages, so leads flow into HighLevel exactly as they do now.",
  },
  {
    q: "How long until it's live?",
    a: `${buildRange()} from your completed intake. Send your brand assets and content and the clock starts; if you don't have copy ready, we'll draft it, which can add a few days.`,
  },
  {
    q: `What does the ${OFFER.supportMonths} months of support cover?`,
    a: "Technical support: fixes, content edits, help with anything that breaks or confuses you, and guidance on running the site. It's included free with every build — not an upsell, not a separate plan.",
  },
  {
    q: "Can I edit it myself?",
    a: "Yes. One variables sheet controls colour, type and spacing, and every section has a unique ID — the docs walk you through it. Or just send us the edit while your support period is running.",
  },
  {
    q: "Can I change how a section looks?",
    a: "Small changes and swaps during the build are part of the job — tell us during intake. Substantial custom sections beyond the template are quoted separately, so you always know the cost up front.",
  },
  {
    q: "What happens after the support period?",
    a: "Nothing breaks and nothing switches off — the site is yours. You can keep running it yourself with the docs, or hire us for ad-hoc work when you need it.",
  },
  {
    q: "Refunds?",
    a: "Full refund any time before we start building. Once the build is underway we make it right instead — the 7-day launch guarantee and revision round are the mechanism.",
  },
  {
    q: "Hosting?",
    a: "Deployed to your hosting, or we set up fast static hosting for you at cost. Your funnels stay in GHL either way.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-b-0">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="w-full flex items-start justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm leading-relaxed">{q}</span>
        <div className={`w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center shrink-0 mt-0.5 transition-all ${open ? "bg-orange-500 border-orange-500 rotate-45" : ""}`}>
          <svg className={`w-2.5 h-2.5 transition-colors ${open ? "text-white" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="pb-5 -mt-1">
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="gw-faq" className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
            <span className="font-light">Common </span><span className="font-bold">questions</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base">The ones that actually stall a decision, answered straight.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 px-8 divide-y divide-slate-100 dark:divide-slate-800">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Still have a question?{" "}
            <a href="mailto:hello@ghlsaastheme.com" className="text-orange-600 dark:text-orange-400 font-bold hover:underline">Email us →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
