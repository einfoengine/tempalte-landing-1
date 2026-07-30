import Link from "next/link";
import { buildRange } from "@/lib/offer";

/* P1 §1.7 — three steps, one owner action ("pick"). Everything after step 1 is
   on our team, and the copy says so. */
const STEPS = [
  {
    number: "01",
    title: "Pick your template",
    body: "Live-preview them all — same content, different presentation. Not sure? Tell us your niche and we'll recommend one.",
  },
  {
    number: "02",
    title: "We make it yours",
    body: "Your brand through the variables sheet, your niches and proof into the content system, your GHL embeds wired. You never touch code.",
  },
  {
    number: "03",
    title: `Live in ${buildRange()}`,
    body: "Launched on your domain. Maintenance starts day one — this is where a file ends and a launch begins.",
  },
];

export default function HowItWorks({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section
      id="how-it-works"
      className={showHeader ? "bg-slate-50 py-24 border-t border-slate-100" : "bg-slate-50 py-16 scroll-mt-20"}
    >
      <div className="max-w-6xl mx-auto px-6">
        {showHeader && (
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">How it works</span>
            <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 leading-tight mb-4">
              <span className="font-light">You pick. </span>
              <span className="font-bold">We <span className="kw">build</span>.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              This isn&apos;t a download. You choose a template, we build your site
              around the content system, and we keep it running — so the only thing
              you do is show up to a finished website.
            </p>
          </div>
        )}

        <ol className="grid md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((step) => (
            <li key={step.number} className="relative bg-white rounded-2xl border border-slate-200 p-7">
              <span className="font-display font-bold text-4xl text-slate-100 tracking-tight absolute top-5 right-6 select-none">{step.number}</span>
              <h3 className="font-bold text-slate-900 text-lg mb-2.5 relative">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed relative">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/templates"
            className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors w-full sm:w-auto"
          >
            Pick your template
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <p className="text-sm text-slate-400">Live in {buildRange()} · You never touch code</p>
        </div>
      </div>
    </section>
  );
}
