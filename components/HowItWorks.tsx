import Link from "next/link";
import { OFFER } from "@/lib/offer";

/* The single most important section on a done-for-you page: without it, a
   visitor assumes they're downloading a file and prices the offer accordingly. */
const STEPS = [
  {
    number: "01",
    title: "Pick your theme",
    body: "Browse the library and choose the look that fits your niche. Not sure? Tell us the vertical and we'll recommend one.",
  },
  {
    number: "02",
    title: "We build it for you",
    body: `Send us your logo, copy and brand colours — or let us write it. Your site is live in ${OFFER.buildDays} days. You never touch code.`,
  },
  {
    number: "03",
    title: "We host and maintain it",
    body: "Hosting, updates and support are included. Swap to a different theme whenever you like, at no extra cost.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 leading-tight mb-4">
            <span className="font-light">You pick. </span>
            <span className="font-bold">
              We <span className="kw">build</span>.
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            This isn&apos;t a download. You choose a theme, we build your site
            around it, and we keep it running — so the only thing you do is show
            up to a finished website.
          </p>
        </div>

        <ol className="grid md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative bg-white rounded-2xl border border-slate-200 p-7"
            >
              <span className="font-display font-bold text-4xl text-slate-100 tracking-tight absolute top-5 right-6 select-none">
                {step.number}
              </span>
              <h3 className="font-bold text-slate-900 text-lg mb-2.5 relative">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed relative">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/#themes"
            className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors w-full sm:w-auto"
          >
            Pick your theme
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <p className="text-sm text-slate-400">
            Live in {OFFER.buildDays} days · You never touch code
          </p>
        </div>
      </div>
    </section>
  );
}
