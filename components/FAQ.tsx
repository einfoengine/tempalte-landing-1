"use client";

import { useState } from "react";
import { OFFER, price } from "@/lib/offer";

/* Answers are written for AI extraction as well as humans: question-shaped
   headings, direct first sentences, no preamble. That's what makes a page
   citeable by AI search rather than merely crawlable. */
const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. You pick a theme and we build the site for you — design, copy setup, brand colours, hosting, the lot. You never open a code editor or run a command. That's the whole point of the membership.",
  },
  {
    q: "How long until my site is live?",
    a: `${OFFER.buildDays} days from the moment you pick a theme and send us your brand assets. If you don't have copy ready we'll write a first draft for you, which can add a few days depending on how much back-and-forth you want.`,
  },
  {
    q: "What happens to my site if I cancel?",
    a: "We host your site as part of the membership, so if you cancel, the site comes down. If you want to keep it permanently, add the source code option and you own that theme's code outright — deploy it anywhere, no membership required.",
  },
  {
    q: "Can I switch to a different theme later?",
    a: "Yes, at no extra cost. Swapping themes is included for as long as you're a member. New themes drop every month and you can move to any of them.",
  },
  {
    q: "Is this a GoHighLevel snapshot or a website?",
    a: "It's a marketing website, not a GHL snapshot. It's the public-facing site that sells your GHL-powered service to prospects. We can embed your GHL calendar, forms and chat widget directly into it, so your leads still flow into HighLevel exactly as they do now.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes. Bring your own domain and we'll connect it with SSL configured. Hosting and the domain connection are included in the membership.",
  },
  {
    q: "What if I want changes after it's built?",
    a: "Updates and support are part of the membership. Content changes, new sections, seasonal campaigns — send them over. There's a fair-use limit on full redesigns, but ongoing tweaks are simply included.",
  },
  {
    q: "What does the source code option include?",
    a: `${price(OFFER.sourcePrice)} one-time, per theme, gets you the full Next.js source: TypeScript, Tailwind, every component, yours to keep. Deploy it to Vercel, Netlify or your own server. Once you own it, you keep it whether or not you stay a member.`,
  },
  {
    q: "Do you build for my niche?",
    a: "The library is organised by GHL vertical — med spas, home services, real estate, fitness, dental and chiro, plus SaaS and agency. If your vertical isn't live yet, tell us: members vote on what we build next, and every new theme is free to switch to.",
  },
  {
    q: "How many builds do you take on at once?",
    a: `We cap it at ${OFFER.slotsPerMonth} builds a month so every site gets real attention rather than being churned out. When the month's slots are gone, you go on the list for the next one.`,
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-slate-800 text-sm leading-relaxed">{q}</span>
        <div
          className={`w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
            open ? "bg-orange-500 border-orange-500 rotate-45" : ""
          }`}
        >
          <svg
            className={`w-2.5 h-2.5 transition-colors ${open ? "text-white" : "text-slate-400"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-5">
            <span className="font-light">Common </span>
            <span className="font-bold">questions</span>
          </h2>
          <p className="text-slate-500 text-base">
            Everything worth knowing before you start a build.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 px-8 divide-y divide-slate-100">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Still have a question?{" "}
            <a href="mailto:hello@growx.com" className="text-orange-600 font-bold hover:underline">
              Email us →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
