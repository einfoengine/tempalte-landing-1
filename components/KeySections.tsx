const sections = [
  {
    number: "01",
    name: "Video Hero",
    desc: "Autoplay background video, animated headline, dual CTA, scroll indicator.",
    category: "Hook",
    color: "bg-orange-500",
  },
  {
    number: "02",
    name: "Logo Bar",
    desc: "Scrolling marquee of customer brand logos for instant social proof.",
    category: "Trust",
    color: "bg-blue-500",
  },
  {
    number: "03",
    name: "Problem Agitation",
    desc: "Pain-point narrative that makes the visitor feel understood before the pitch.",
    category: "Problem",
    color: "bg-red-500",
  },
  {
    number: "04",
    name: "All-in-One Value Prop",
    desc: "Platform consolidation messaging — replaces 6-10 tools with one.",
    category: "Solution",
    color: "bg-green-500",
  },
  {
    number: "05",
    name: "Stats Strip",
    desc: "Key numbers: uptime, channels, ROI multipliers, response times.",
    category: "Proof",
    color: "bg-blue-500",
  },
  {
    number: "06",
    name: "Capability Grid",
    desc: "3×3 icon grid of the 9 core platform modules with descriptions.",
    category: "Features",
    color: "bg-purple-500",
  },
  {
    number: "07",
    name: "Feature Deep-Dive",
    desc: "3 alternating image+copy blocks for your top platform capabilities.",
    category: "Features",
    color: "bg-purple-500",
  },
  {
    number: "08",
    name: "AI Showcase",
    desc: "6-panel spotlight on AI features: Voice AI, Conversation AI, Workflow AI, and more.",
    category: "AI",
    color: "bg-indigo-500",
  },
  {
    number: "09",
    name: "Section Marquee",
    desc: "Scrolling benefit ribbon — keeps energy up between heavy content sections.",
    category: "Momentum",
    color: "bg-orange-500",
  },
  {
    number: "10",
    name: "How It Works",
    desc: "3-step implementation journey: Setup → Configure → Launch.",
    category: "Clarity",
    color: "bg-teal-500",
  },
  {
    number: "11",
    name: "Mid-Page CTA",
    desc: "Full-width conversion strip — catches the reader before they lose steam.",
    category: "Conversion",
    color: "bg-orange-500",
  },
  {
    number: "12",
    name: "Comparison Table",
    desc: "Platform vs. legacy stack (HubSpot, ActiveCampaign, Twilio) — feature-by-feature.",
    category: "Trust",
    color: "bg-blue-500",
  },
  {
    number: "13",
    name: "Featured Testimonial",
    desc: "Full-width hero testimonial with photo, metric, and narrative quote.",
    category: "Proof",
    color: "bg-green-500",
  },
  {
    number: "14",
    name: "Testimonial Wall",
    desc: "Grid of 6+ customer quotes with avatars, roles, and star ratings.",
    category: "Proof",
    color: "bg-green-500",
  },
  {
    number: "15",
    name: "Pricing Preview",
    desc: "Simplified 3-tier pricing strip that links to the full pricing page.",
    category: "Conversion",
    color: "bg-orange-500",
  },
  {
    number: "16",
    name: "FAQ Accordion",
    desc: "10 most common objections addressed before the visitor hits the footer.",
    category: "Objections",
    color: "bg-slate-500",
  },
  {
    number: "17",
    name: "Pre-Footer CTA",
    desc: "Final conversion push with risk reversals: trial, guarantee, easy setup.",
    category: "Conversion",
    color: "bg-orange-500",
  },
  {
    number: "18",
    name: "Footer",
    desc: "Branded footer with sitemap, social links, and compliance copy.",
    category: "Navigation",
    color: "bg-slate-500",
  },
];

const categoryColors: Record<string, string> = {
  Hook: "bg-orange-100 text-orange-700",
  Trust: "bg-blue-100 text-blue-700",
  Problem: "bg-red-100 text-red-700",
  Solution: "bg-green-100 text-green-700",
  Proof: "bg-emerald-100 text-emerald-700",
  Features: "bg-purple-100 text-purple-700",
  AI: "bg-indigo-100 text-indigo-700",
  Momentum: "bg-yellow-100 text-yellow-700",
  Clarity: "bg-teal-100 text-teal-700",
  Conversion: "bg-orange-100 text-orange-700",
  Objections: "bg-slate-100 text-slate-600",
  Navigation: "bg-slate-100 text-slate-600",
};

export default function KeySections() {
  return (
    <section className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Home Page Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            18 Sections. Zero Guesswork.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every section of the home page follows a deliberate persuasion sequence —
            from first impression to conversion. Here&apos;s exactly what your visitors walk through.
          </p>
        </div>

        {/* Sections list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <div
              key={section.number}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition-all flex gap-4"
            >
              {/* Number + color indicator */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className={`w-1.5 h-full rounded-full ${section.color} opacity-70`}
                  style={{ minHeight: "40px" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-black text-slate-300 text-xs">{section.number}</span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[section.category] || "bg-slate-100 text-slate-600"}`}
                  >
                    {section.category}
                  </span>
                </div>
                <div className="font-bold text-slate-800 text-sm mb-1.5">{section.name}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{section.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Plus 10 additional pages with their own section architecture.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors"
          >
            Get All 18 Sections + 10 Pages →
          </a>
        </div>
      </div>
    </section>
  );
}
