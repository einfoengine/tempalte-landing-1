export default function FinalCTA() {
  return (
    <section className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-8">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          One purchase. Full ownership. Launch this week.
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          Stop Letting a Generic Website
          <br />
          <span className="gradient-text">Cost You Deals</span>
        </h2>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-4">
          Every day your current site is live, it&apos;s making prospects question whether
          your platform is worth their money. PureSaaS ends that - permanently.
        </p>
        <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
          11 pages. 67+ components. 4 themes. Full source code. One-time $97.
          The most efficient investment you&apos;ll make in your GHL SaaS this year.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#"
            className="cta-glow bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-5 rounded-xl text-lg transition-colors w-full sm:w-auto text-center shadow-xl shadow-orange-500/25"
          >
            Get PureSaaS for $97 - Instant Access →
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            One-time payment
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Instant download
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Full source code
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Unlimited projects
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Free lifetime updates
          </span>
        </div>
      </div>
    </section>
  );
}
