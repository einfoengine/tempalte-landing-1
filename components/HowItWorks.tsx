import RevealGroup from "@/components/RevealGroup";
import Link from "next/link";
import { OFFER, buildRange } from "@/lib/offer";

/* Three steps, one action from the buyer ("pick"). Everything after step 1 is on
   our side, and the copy says so.

   De-ambiguated: "same content, different presentation" read as "every site
   looks the same" — the opposite of the point. "Variables sheet" and "proof"
   were jargon. "Maintenance starts day one" was left over from a retired
   pricing model and contradicted the 4-months-support offer. */
const STEPS = [
  {
    number: "01",
    title: "Pick the design you like",
    body: "Every template includes the same pages, so you're only choosing the look — no feature is locked behind a different one. Not sure? Tell us the niche you sell to and we'll recommend one.",
  },
  {
    number: "02",
    title: "Send your brand and details",
    body: "Your logo, colours, offer and pricing. We rebuild every page around your brand, put your own words in place, and connect your GoHighLevel forms, chat and calendars.",
  },
  {
    number: "03",
    title: `You're live in ${buildRange()}`,
    body: `On your own domain, ready to send traffic to. Then ${OFFER.supportMonths} months of technical support — email us for a change and we handle it.`,
  },
];

export default function HowItWorks({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section
      id="gw-how-it-works"
      className={showHeader ? "bg-slate-50 py-24 border-t border-slate-100" : "bg-slate-50 py-16 scroll-mt-20"}
    >
      <div className="max-w-6xl mx-auto px-6">
        {showHeader && (
          <RevealGroup className="max-w-3xl mb-14">
            <span className="inline-block text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">How it works</span>
            <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
              <span className="font-light">You pick. </span>
              <span className="font-bold">We <span className="gw-kw">build</span>.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              There&apos;s nothing to download and nothing to configure. You choose
              the design, send us your brand, and we hand back a finished website
              on your domain — usually inside a week.
            </p>
          </RevealGroup>
        )}

        <RevealGroup as="ol" className="grid md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((step) => (
            <li key={step.number} className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-7">
              <span className="font-display font-bold text-4xl text-slate-100 tracking-tight absolute top-5 right-6 select-none">{step.number}</span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2.5 relative">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative">{step.body}</p>
            </li>
          ))}
        </RevealGroup>

        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
          <Link
            href="/templates"
            className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors w-full sm:w-auto shrink-0"
          >
            Pick a template
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <p className="text-sm text-slate-400">Live in {buildRange()} · You never touch code</p>
        </div>
      </div>
    </section>
  );
}
