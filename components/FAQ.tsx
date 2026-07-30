"use client";

import { useState } from "react";
import { OFFER, price, buildRange } from "@/lib/offer";

/* Answers written for AI extraction and skeptical operators alike: direct first
   sentence, no preamble. Model is packages + ownership (you own/export it, no
   lock-in) — NOT the old hosted membership. */
const faqs = [
  {
    q: "Do I own the site?",
    a: "Yes. One package licenses one brand on one domain. You can export the full site any time, with docs — maintenance is a service, not a hostage situation. No lock-in.",
  },
  {
    q: "Does it work with my GoHighLevel funnels?",
    a: "Yes. The site is your trust layer; your funnels stay in GHL. We wire your forms, chat widget and calendars directly into the pages, so leads flow into HighLevel exactly as they do now.",
  },
  {
    q: "Is this a template I download?",
    a: "No — that's the whole point. Every package is a launched website: we customize the template, wire your embeds, deploy it on your domain and maintain it after. The unit of sale is a live site, not a file.",
  },
  {
    q: "Can I edit it myself?",
    a: "Yes. One variables sheet controls colour, type and spacing, and every section has a unique ID — the docs walk you through it. Or send edit requests under maintenance and we handle them.",
  },
  {
    q: "How long until it's live?",
    a: `Launch: 3–5 days from completed intake. Growth: ${buildRange()}. Partner: 7–14 depending on custom scope. The clock starts when your intake is complete.`,
  },
  {
    q: "What if I want changes beyond the template?",
    a: "Custom sections and module swaps are the Partner package, or a maintenance request after launch. Every template shares one kit, so custom work builds on solid ground rather than starting over.",
  },
  {
    q: "What does maintenance cost after the included term?",
    a: `Continue month-to-month at ${price(OFFER.continuationMonthly)}/mo, or self-maintain with the docs. Either way there's no lock-in and no penalty for leaving — the graceful exit includes a final backup.`,
  },
  {
    q: "Refunds?",
    a: "Full refund any time before customization starts. After that we make it right instead — the 7-day launch guarantee and revision rounds are the mechanism.",
  },
  {
    q: "Hosting?",
    a: "Deployed to your hosting, or we set up fast static hosting for you at cost. Your funnels stay in GHL either way.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="w-full flex items-start justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-slate-800 text-sm leading-relaxed">{q}</span>
        <div className={`w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center shrink-0 mt-0.5 transition-all ${open ? "bg-orange-500 border-orange-500 rotate-45" : ""}`}>
          <svg className={`w-2.5 h-2.5 transition-colors ${open ? "text-white" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="pb-5 -mt-1">
          <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-5">
            <span className="font-light">Common </span><span className="font-bold">questions</span>
          </h2>
          <p className="text-slate-500 text-base">The ones that actually stall a template purchase, answered straight.</p>
        </div>
        <div className="bg-slate-50 rounded-2xl border border-slate-200 px-8 divide-y divide-slate-100">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Still have a question?{" "}
            <a href="mailto:hello@ghlsaastheme.com" className="text-orange-600 font-bold hover:underline">Email us →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
