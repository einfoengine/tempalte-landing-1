const pages = [
  {
    title: "Home",
    sections: "18 sections",
    description: "Full conversion spine: hero, problem, solution, features, AI, integrations, testimonials, pricing, FAQ, and more.",
    highlight: true,
  },
  {
    title: "Features",
    sections: "9 modules",
    description: "Tabbed explorer, animated capability grid, feature deep-dive with alternating blocks.",
    highlight: false,
  },
  {
    title: "Pricing",
    sections: "6 sections",
    description: "3-tier pricing table, plan comparison matrix, billing toggle, ROI calculator, and FAQ.",
    highlight: false,
  },
  {
    title: "Integrations",
    sections: "4 categories",
    description: "18+ native connections + Zapier/API hub with setup steps and integration grid.",
    highlight: false,
  },
  {
    title: "Contact",
    sections: "4 sections",
    description: "Sales hub with booking widget, contact form, channel chooser, and FAQ.",
    highlight: false,
  },
  {
    title: "Blog + Post",
    sections: "2 pages",
    description: "Blog index with categories, author info, and individual post layout with newsletter CTA.",
    highlight: false,
  },
  {
    title: "Demo Request",
    sections: "1 page",
    description: "High-converting demo booking page with objection handling and trust signals.",
    highlight: false,
  },
  {
    title: "Thank You",
    sections: "1 page",
    description: "Post-conversion page that keeps momentum with next steps and upsell hooks.",
    highlight: false,
  },
  {
    title: "Coming Soon",
    sections: "1 page",
    description: "Pre-launch countdown page with email capture for early access.",
    highlight: false,
  },
  {
    title: "404 Not Found",
    sections: "1 page",
    description: "Branded error page that keeps visitors engaged instead of abandoning.",
    highlight: false,
  },
];

const components = [
  { category: "Navigation", count: 2, items: "Header, Footer" },
  { category: "Hero Variants", count: 5, items: "Video, Scroll, Starfield, Jamboo, Sub-page" },
  { category: "Feature Sections", count: 7, items: "Grid, Rail, Deep-Dive, Tabs, AI Showcase, Animation" },
  { category: "Social Proof", count: 3, items: "Testimonial Wall, Featured Quote, Logo Bar" },
  { category: "Pricing & ROI", count: 5, items: "Packages, Table, Comparison, Billing Toggle, ROI Calc" },
  { category: "CTAs & Conversion", count: 5, items: "Mid-page CTA, Pre-footer CTA, Marquee, Personas" },
  { category: "Contact & Forms", count: 4, items: "Contact Hub, Form, Booking, FAQ" },
  { category: "Content & Blog", count: 3, items: "Blog Listing, Newsletter, Stats Strip" },
  { category: "Data Display", count: 4, items: "Stat Counter, Funnel Icon, Integration Icon, Comparison" },
  { category: "Animations", count: 8, items: "Cursor Glow, Pixel Canvas, Flame Glows, Motion Wrappers" },
];

const themes = [
  { name: "Classic", desc: "Conservative, professional. Deep navy + amber. Authority by design.", dot: "#1e3a5f" },
  { name: "Modern", desc: "Clean, contemporary. Slate + electric blue. Feels like a funded startup.", dot: "#3b82f6" },
  { name: "Jamboo", desc: "Bold, high-energy. Neon accents + dark canvas. Stops the scroll.", dot: "#a855f7" },
  { name: "Pluto", desc: "Sophisticated dark mode. Mint + charcoal. Premium agency aesthetic.", dot: "#10b981" },
];

export default function WhatYouGet() {
  return (
    <section id="includes" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Everything Inside
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            One Purchase. Complete Website.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            No piecemeal plugins, no missing pages, no design work. Every component,
            page, and section you need to represent your GHL SaaS like a serious company.
          </p>
        </div>

        {/* Summary boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "11", label: "Complete Pages" },
            { value: "67+", label: "UI Components" },
            { value: "4", label: "Design Themes" },
            { value: "18", label: "Home Sections" },
          ].map((item) => (
            <div
              key={item.value}
              className="text-center bg-slate-50 rounded-2xl border border-slate-200 py-8 px-4"
            >
              <div className="text-4xl font-black text-orange-500 mb-1">{item.value}</div>
              <div className="text-slate-600 text-sm font-semibold">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Pages Grid */}
        <div id="pages" className="mb-16 scroll-mt-20">
          <h3 className="text-2xl font-black text-slate-900 mb-2">Every Page, Ready to Go</h3>
          <p className="text-slate-500 text-sm mb-8">
            Every page a prospect might visit — built, structured, and copy-framed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pages.map((page) => (
              <div
                key={page.title}
                className={`rounded-2xl p-5 border transition-all ${
                  page.highlight
                    ? "bg-orange-500 border-orange-400 text-white"
                    : "bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-bold text-base ${page.highlight ? "text-white" : "text-slate-800"}`}>
                    {page.title}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      page.highlight ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {page.sections}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${page.highlight ? "text-orange-50" : "text-slate-500"}`}>
                  {page.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Components */}
        <div className="mb-16">
          <h3 className="text-2xl font-black text-slate-900 mb-2">67+ Production Components</h3>
          <p className="text-slate-500 text-sm mb-8">
            Modular, reusable, and consistently named. Customize any section in minutes.
          </p>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
            {components.map((comp, i) => (
              <div
                key={comp.category}
                className={`flex items-start gap-4 px-6 py-4 ${
                  i < components.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <div className="flex items-center gap-3 w-52 shrink-0">
                  <div className="w-8 h-8 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-sm font-black text-orange-500">
                    {comp.count}
                  </div>
                  <span className="font-semibold text-slate-800 text-sm">{comp.category}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pt-1">{comp.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">4 Design Themes + Light/Dark Mode</h3>
          <p className="text-slate-500 text-sm mb-8">
            Switch your entire site&apos;s visual identity by changing a single attribute. Each theme ships with full light and dark variants.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <div
                key={theme.name}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:bg-white transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: theme.dot }}
                  />
                  <span className="font-bold text-slate-800 text-sm">{theme.name}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
