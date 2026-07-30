import Link from "next/link";

/* P1 §1.4 — what's actually in the box. Three blocks: the content system, the
   engineering standard, the package. This is the sale — "beautiful" is table
   stakes. Each block links to the page that proves it. */
const BLOCKS = [
  {
    icon: "🧭",
    title: "The content system",
    body: "Every template implements a page-by-page conversion plan — 14 pages, 3 funnels, a client-academy shell — with the section stacks, copy direction and CTAs already decided. You customize; you don't compose.",
    link: { href: "/how-it-works", label: "See the system" },
  },
  {
    icon: "⚙️",
    title: "The engineering standard",
    body: "One variables sheet rebrands the whole site. A unique ID on every section. Modular components from one shared kit. Semantic HTML, no framework lock, Lighthouse 95+ targets.",
    link: { href: "/templates", label: "Proven in every template" },
  },
  {
    icon: "🚀",
    title: "The package",
    body: "Humans customize it, wire your GHL embeds, launch it on your domain, and maintain it after. Support isn't an upsell; it's the product. Not a file — a launch.",
    link: { href: "/packages", label: "See packages" },
  },
];

export default function TemplateFeatures() {
  return (
    <section id="whats-in-the-box" className="bg-white py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">What&apos;s in the box</span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-5">
            <span className="font-light text-slate-500">A template is a file.</span>
            <br />
            <span className="font-bold">This is a <span className="kw">launch</span>.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Three things ship with every build — and none of them is &ldquo;pretty pages.&rdquo;
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOCKS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7 flex flex-col hover:bg-white hover:border-slate-300 hover:shadow-md transition-all">
              <div className="w-11 h-11 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-xl mb-4">{b.icon}</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2.5 tracking-tight">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{b.body}</p>
              <Link href={b.link.href} className="text-sm font-semibold text-orange-600 hover:underline">{b.link.label} →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
