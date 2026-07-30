const pillars = [
  {
    number: "01",
    title: "Persuasion Architecture",
    description:
      "The home page follows an 18-section spine built on proven copywriting frameworks - AIDA, PAS, social proof sequencing - so every visitor follows a guided path to your CTA.",
  },
  {
    number: "02",
    title: "GHL-Specific Sections",
    description:
      "AI showcase, integration hub, funnel builder demo, automation visualizer - sections that don't exist in generic templates because they're engineered specifically around GHL features.",
  },
  {
    number: "03",
    title: "Professional Visual System",
    description:
      "Space Grotesk headings, Inter body type, 4 fully-realized design themes (Classic, Modern, Jamboo, Pluto), light/dark mode, and a consistent component library that scales.",
  },
  {
    number: "04",
    title: "11 Complete Pages",
    description:
      "Home, Features, Pricing, Integrations, Blog, Contact, Demo, Thank You, Coming Soon - every page a prospect might visit is built, copy-framed, and ready to deploy.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-slate-50 dark:bg-slate-900 py-24 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-5">
            Meet PureSaaS -
            <br />
            <span className="text-orange-500">The Template Built for GHL</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            PureSaaS isn&apos;t a generic template with a fresh coat of paint.
            It&apos;s the only website template engineered from the ground up around
            the specific conversion challenges of selling a GHL-powered white-label SaaS -
            and built to be lightweight, modular, and easy to make entirely your own.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:shadow-slate-100 transition-all"
            >
              <div className="text-5xl font-black text-orange-100 mb-4 leading-none">{pillar.number}</div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">{pillar.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
          <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-8">
            Built on a professional, production-ready stack
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Next.js 16", desc: "App Router + SSR" },
              { name: "TypeScript", desc: "Fully typed" },
              { name: "Tailwind CSS 4", desc: "Utility-first styling" },
              { name: "GSAP 3.15", desc: "Pro animations" },
              { name: "Framer Motion", desc: "Interaction layer" },
              { name: "React 19", desc: "Latest React" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full shrink-0" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">{tech.name}</span>
                  <span className="text-slate-400 text-xs ml-2">{tech.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
