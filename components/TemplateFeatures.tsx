const features = [
  {
    icon: "🔍",
    title: "Highly SEO Friendly",
    badge: "Discovery",
    description:
      "Semantic HTML5, optimized meta tags, Open Graph, Twitter Card, canonical URLs, and clean heading hierarchy baked in from day one - so every page Google crawls is ready to rank.",
    highlights: ["Semantic HTML5 structure", "Page-level meta + Open Graph", "Clean URL architecture", "Heading hierarchy (H1→H6)"],
    color: "border-blue-200 bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    icon: "🤖",
    title: "AEO & GEO Friendly",
    badge: "AI Search",
    description:
      "Structured for Answer Engine Optimization (Perplexity, ChatGPT search) and Generative Engine Optimization (Google AI Overviews, Gemini). Your content is formatted so AI engines cite it, not just crawl it.",
    highlights: ["FAQ structured for AI extraction", "Clear entity definitions", "Concise, citeable copy blocks", "Schema-ready markup points"],
    color: "border-purple-200 bg-purple-50",
    badgeColor: "bg-purple-100 text-purple-700",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🎨",
    title: "Customizable as per Brand",
    badge: "Branding",
    description:
      "Every visual identity element lives in CSS custom properties - swap your brand color, font, and radius in seconds. Your logo, your palette, your voice. The template disappears; your brand appears.",
    highlights: ["CSS variable design tokens", "Font swap in one line", "Brand color throughout", "Logo slot ready"],
    color: "border-orange-200 bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-700",
    iconBg: "bg-orange-100",
  },
  {
    icon: "⚡",
    title: "Easy to Customize",
    badge: "DX",
    description:
      "All site copy lives in 6 centralized TypeScript data files - no hunting through 67 components to change a headline. Update pricing, features, FAQs, integrations, and contact info in one place.",
    highlights: ["6 centralized data files", "No component hunting", "Typed data structures", "Change copy without touching JSX"],
    color: "border-yellow-200 bg-yellow-50",
    badgeColor: "bg-yellow-100 text-yellow-700",
    iconBg: "bg-yellow-100",
  },
  {
    icon: "📚",
    title: "Well Documented",
    badge: "Docs",
    description:
      "Every data file, component, and theme variant is documented. The setup guide walks you from clone to deployed in under an hour - even if you've never touched a Next.js project.",
    highlights: ["Full setup guide included", "Data file documentation", "Component reference", "Theme customization guide"],
    color: "border-teal-200 bg-teal-50",
    badgeColor: "bg-teal-100 text-teal-700",
    iconBg: "bg-teal-100",
  },
  {
    icon: "🙋",
    title: "Good Support",
    badge: "Support",
    description:
      "Real person, real replies. Not a ticket queue that closes in 48 hours. If something isn't working or you're stuck on a customization, you get direct access to someone who knows the codebase.",
    highlights: ["Direct access support", "Fast response times", "Customization help", "Bug fixes covered"],
    color: "border-green-200 bg-green-50",
    badgeColor: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
  },
  {
    icon: "📦",
    title: "Expandable",
    badge: "Scalable",
    description:
      "Add new pages, sections, or entire feature sets without touching existing architecture. The routing, component system, and data layer are designed to grow alongside your product.",
    highlights: ["Add pages without breaking", "Section-level expansion", "Data layer scales cleanly", "No tight coupling between modules"],
    color: "border-indigo-200 bg-indigo-50",
    badgeColor: "bg-indigo-100 text-indigo-700",
    iconBg: "bg-indigo-100",
  },
  {
    icon: "🧩",
    title: "Well Modularized",
    badge: "Architecture",
    description:
      "67+ components are independently usable - drop any section into any page with no side effects. Each module owns its own data, styles, and logic. Nothing breaks when you move things around.",
    highlights: ["67+ standalone components", "No shared global state", "Drop-in section architecture", "Clear naming conventions"],
    color: "border-rose-200 bg-rose-50",
    badgeColor: "bg-rose-100 text-rose-700",
    iconBg: "bg-rose-100",
  },
  {
    icon: "🪶",
    title: "Lightweight & Fast",
    badge: "Performance",
    description:
      "No page builder bloat, no heavy runtime dependencies. Pure Next.js 16 + Tailwind CSS 4 + static generation = sub-second page loads, high Core Web Vitals, and a Lighthouse score that makes enterprise sites jealous.",
    highlights: ["Static site generation (SSG)", "Zero runtime CSS overhead", "No heavy page builder", "Optimized Core Web Vitals"],
    color: "border-slate-200 bg-slate-50",
    badgeColor: "bg-slate-100 text-slate-600",
    iconBg: "bg-slate-100",
  },
];

export default function TemplateFeatures() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Why PureSaaS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            Not Just Pretty - Built to
            <br />
            <span className="gradient-text">Perform and Scale</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Most templates look good in the preview and fall apart in production.
            PureSaaS is engineered for real-world use - from SEO ranking to
            AI search visibility to developer experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {features.slice(0, 6).map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl border p-6 ${f.color} hover:shadow-md transition-all`}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 ${f.iconBg} rounded-xl flex items-center justify-center text-xl`}>
                  {f.icon}
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${f.badgeColor}`}>
                  {f.badge}
                </span>
              </div>

              {/* Text */}
              <h3 className="font-black text-slate-900 text-base mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{f.description}</p>

              {/* Highlights */}
              <ul className="space-y-1.5">
                {f.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-slate-500 text-xs">
                    <svg className="w-3.5 h-3.5 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 remaining in a wider layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.slice(6).map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl border p-6 ${f.color} hover:shadow-md transition-all`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 ${f.iconBg} rounded-xl flex items-center justify-center text-xl`}>
                  {f.icon}
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${f.badgeColor}`}>
                  {f.badge}
                </span>
              </div>
              <h3 className="font-black text-slate-900 text-base mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{f.description}</p>
              <ul className="space-y-1.5">
                {f.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-slate-500 text-xs">
                    <svg className="w-3.5 h-3.5 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom summary strip */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-black text-xl mb-1">
              SEO · AEO · GEO · Fast · Modular · Documented · Supported
            </div>
            <div className="text-slate-400 text-sm">
              Every quality bar a professional product website needs to clear - all in one template.
            </div>
          </div>
          <a
            href="#pricing"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors whitespace-nowrap shrink-0"
          >
            Get the Template - $97 →
          </a>
        </div>
      </div>
    </section>
  );
}
