"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to know how to code to use PureSaaS?",
    a: "You need basic Next.js familiarity - how to run a dev server and swap out text/images. If you've ever touched a React codebase, you'll be comfortable. All copy, colors, and data are centralized in simple TypeScript files so you don't need to dig through components.",
  },
  {
    q: "Is this a one-time purchase or does it require a subscription?",
    a: "It's a one-time $97 purchase. You own the source code outright. No monthly fees, no license renewals, no platform lock-in. You deploy it wherever you want - Vercel, Netlify, your own server.",
  },
  {
    q: "Can I use PureSaaS for multiple client projects?",
    a: "Yes. The license lets you use PureSaaS on unlimited projects - including projects you build for clients. The only restriction is reselling PureSaaS itself as a standalone template product.",
  },
  {
    q: "How is the template delivered?",
    a: "Immediately after purchase you'll receive a download link with the full Next.js source code. The project is pre-configured with all dependencies - run pnpm install and you're up in under 5 minutes.",
  },
  {
    q: "How long does it take to customize and launch?",
    a: "Most buyers have a deployed, branded version live within 1–3 days. All copy is centralized in data files, the brand colors are CSS variables, and the site config file handles the product name and domain.",
  },
  {
    q: "Does PureSaaS integrate with GoHighLevel itself?",
    a: "PureSaaS is a marketing website template, not a GHL plugin. It showcases your GHL-powered product to prospects. You can embed your GHL calendar, chat widget, and forms directly into the template's contact and demo pages.",
  },
  {
    q: "What tech stack does this require?",
    a: "Next.js 16, Node.js 18+, and pnpm. It deploys to any platform that supports Next.js - Vercel is the fastest option (free tier works fine). No database or backend required.",
  },
  {
    q: "What if I'm not happy with it?",
    a: "Because this is a digital product with instant access to source code, all sales are final. However, if you have a specific issue or something doesn't work as described, reach out and we'll make it right.",
  },
  {
    q: "Will I get future updates?",
    a: "Yes - future updates are included at no extra charge. As new sections, components, or theme variants are added to PureSaaS, you'll receive them.",
  },
  {
    q: "Can I see a live preview before buying?",
    a: "A live preview link is available - check the top of this page or the pricing section for the 'See What's Inside' link. You can browse every page and section before committing.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
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
    <section id="faq" className="bg-white py-24 border-t border-slate-100 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            Common Questions
          </h2>
          <p className="text-slate-500 text-base">
            Everything you need to know before you buy.
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 px-8 divide-y divide-slate-100">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Still have a question?{" "}
            <a href="mailto:hello@growx.com" className="text-orange-500 font-bold hover:underline">
              Email us →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
