import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-7">
          <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Highly SEO + AEO + GEO friendly · Built for GHL white-label sellers
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-[3.75rem] font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            Your GHL SaaS Deserves a Website
            <br />
            <span className="gradient-text">That Actually Converts</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-4">
            PureSaaS is a premium, 11-page website template engineered around the
            specific conversion logic of selling GoHighLevel-powered SaaS.
          </p>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
            Stop losing deals to a generic site. Launch a professional, revenue-driving
            marketing presence in days — not months.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#pricing"
              className="cta-glow bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors w-full sm:w-auto text-center"
            >
              Get Instant Access — $97
            </a>
            <a
              href="#pages"
              className="text-slate-700 font-semibold px-8 py-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors w-full sm:w-auto text-center"
            >
              See What&apos;s Inside →
            </a>
          </div>
          <p className="text-sm text-slate-400">
            One-time purchase · Instant download · Full source code included
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="relative max-w-5xl mx-auto mt-14">
          {/* Glow background */}
          <div className="absolute -inset-8 bg-linear-to-b from-orange-50 via-slate-50 to-white rounded-3xl -z-10" />

          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-slate-400 font-mono border border-slate-200 flex items-center gap-2">
                <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                www.yourbrand.com
              </div>
            </div>

            {/* Template Screenshot */}
            <div className="relative overflow-hidden">
              <Image
                src="/thumb.png"
                alt="PureSaaS template preview — dark hero with bold headline and CTA"
                width={1200}
                height={800}
                priority
                className="w-full h-auto block"
              />
              {/* Subtle bottom fade so it blends into the floating badges */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 hidden lg:block">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-sm">✓</div>
              <div>
                <div className="text-xs font-bold text-slate-800">11 Pages Ready</div>
                <div className="text-xs text-slate-400">Deploy immediately</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 top-1/4 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 hidden lg:block">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-sm">⚡</div>
              <div>
                <div className="text-xs font-bold text-slate-800">67+ Components</div>
                <div className="text-xs text-slate-400">Production ready</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-12 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 hidden lg:block">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm">🎨</div>
              <div>
                <div className="text-xs font-bold text-slate-800">4 Themes</div>
                <div className="text-xs text-slate-400">Light + Dark mode</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
