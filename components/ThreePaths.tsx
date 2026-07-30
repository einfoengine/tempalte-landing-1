import RevealGroup from "@/components/RevealGroup";
/* P1 §1.3 — the three usual paths, problem & agitation. Ties the website to
   the founder's close rate, not to aesthetics. This audience spends on revenue
   problems, not design problems. */
const PATHS = [
  {
    label: "DIY in the funnel builder",
    body: "Three weekends gone, and it still looks like a funnel — because it is one.",
  },
  {
    label: "A marketplace template",
    body: "Pretty pages full of placeholder text. You still have to write it, build it and wire your CRM yourself.",
  },
  {
    label: "A custom agency",
    body: "$5,000 and six weeks — then nobody touches it again after handoff.",
  },
];

export default function ThreePaths() {
  return (
    <section id="gw-three-paths" className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <RevealGroup className="max-w-3xl mb-12">
          <span className="inline-block text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">The problem</span>
          <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white leading-tight">
            <span className="font-light text-slate-500 dark:text-slate-400">Every GoHighLevel agency owner gets a website one of three ways. </span>
            <span className="font-bold">All three <span className="gw-kw">stall</span>.</span>
          </h2>
        </RevealGroup>

        <RevealGroup className="grid md:grid-cols-3 gap-6 mb-10">
          {PATHS.map((p) => (
            <div key={p.label} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-7">
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mb-4">
                <span className="text-red-400 text-sm font-bold">✕</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{p.label}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </RevealGroup>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Meanwhile, every demo you run ends with the prospect opening your website
          in another tab.{" "}
          <span className="text-slate-900 dark:text-white font-semibold">That tab is where deals quietly die.</span>
        </p>
      </div>
    </section>
  );
}
