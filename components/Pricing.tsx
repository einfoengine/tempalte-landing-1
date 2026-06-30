const includes = [
  "All 11 pages - fully built and structured",
  "67+ modular UI components",
  "18-section conversion-optimized home page",
  "4 design themes (Classic, Modern, Jamboo, Pluto)",
  "Light + dark mode for every theme",
  "ROI Calculator component",
  "Pricing page with 3-tier table + comparison matrix",
  "Integrations Hub (18+ native + Zapier/API)",
  "AI Showcase section (6 AI capabilities)",
  "Feature deep-dive with animated blocks",
  "Testimonial Wall + Featured Testimonial",
  "Blog with stub posts + newsletter integration",
  "Demo request + Thank You + Coming Soon pages",
  "Full TypeScript source code",
  "Next.js 16 App Router architecture",
  "GSAP + Framer Motion animation system",
  "Centralized data files (easy to customize copy)",
  "Lifetime access + free future updates",
  "Highly SEO friendly (meta, Open Graph, semantic HTML)",
  "AEO & GEO optimized structure for AI search engines",
  "Brand customizable - CSS variables + centralized copy",
  "Well documented - setup guide + data file reference",
  "Direct support access included",
];

const notIncludes = [
  "Monthly fees or subscriptions",
  "Per-user charges",
  "Watermarks or branding restrictions",
  "Required attribution",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-900 py-24 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            One Price. Everything Included.
            <br />
            <span className="text-slate-400">No Surprises.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A custom design agency would charge $8,000–$20,000 for this scope.
            A freelancer would take 3–6 months. PureSaaS delivers it instantly for $97.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/30 mb-8">
          <div className="grid md:grid-cols-2">
            {/* Left: Price */}
            <div className="bg-orange-500 p-10 flex flex-col justify-center">
              <div className="text-orange-200 text-sm font-semibold uppercase tracking-widest mb-4">
                PureSaaS - Complete Template
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-white text-7xl font-black leading-none">$97</span>
              </div>
              <div className="text-orange-100 text-sm mb-8">One-time payment · No subscription</div>

              <a
                href="#"
                className="cta-glow bg-white hover:bg-orange-50 text-orange-600 font-black text-base px-8 py-4 rounded-xl transition-colors text-center block shadow-lg"
              >
                Get Instant Access →
              </a>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-orange-100 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Instant download after purchase
                </div>
                <div className="flex items-center gap-2 text-orange-100 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Full source code - yours to own
                </div>
                <div className="flex items-center gap-2 text-orange-100 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Use on unlimited projects
                </div>
                <div className="flex items-center gap-2 text-orange-100 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Free updates for life
                </div>
              </div>
            </div>

            {/* Right: What's included */}
            <div className="p-8 bg-white">
              <h3 className="font-black text-slate-900 text-base mb-5">Everything you get:</h3>
              <div className="space-y-2.5 mb-8">
                {includes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
                  What you&apos;ll never pay:
                </h4>
                <div className="space-y-2">
                  {notIncludes.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-8 mb-8">
          <h3 className="text-white font-bold text-center mb-8 text-sm uppercase tracking-widest">
            The real cost of the alternatives
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { option: "Hire a Design Agency", cost: "$8,000 – $25,000", time: "8–16 weeks", mark: "❌" },
              { option: "Hire a Freelancer", cost: "$2,000 – $8,000", time: "4–12 weeks", mark: "❌" },
              { option: "Build It Yourself", cost: "Your time × ∞", time: "Months of distraction", mark: "❌" },
            ].map((alt) => (
              <div key={alt.option} className="text-center bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                <div className="text-2xl mb-3">{alt.mark}</div>
                <div className="text-slate-300 text-xs font-semibold mb-2">{alt.option}</div>
                <div className="text-red-400 font-bold text-sm mb-1">{alt.cost}</div>
                <div className="text-slate-500 text-xs">{alt.time}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-slate-400 text-sm">vs. </span>
            <span className="text-white font-bold">PureSaaS at $97 - instant access, full source code, done.</span>
          </div>
        </div>

        {/* Trust */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            Secure checkout · Instant delivery · Questions?{" "}
            <a href="#faq" className="text-orange-400 hover:text-orange-300 font-semibold">
              See the FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
