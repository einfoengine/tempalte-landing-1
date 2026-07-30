import { OFFER, price } from "@/lib/offer";

const included = [
  "Your site designed and built for you",
  "Any theme in the library — swap whenever you like",
  "Hosting, SSL and a custom domain",
  "Copy and brand setup handled for you",
  "SEO, AEO and GEO structure built in",
  "New themes every month, free to switch to",
  "Ongoing updates and direct support",
];

const addOn = [
  "Full Next.js source code, yours to keep",
  "Deploy anywhere — Vercel, Netlify, your own server",
  "No ongoing membership required to keep it",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-900 py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Membership
          </span>
          <h2 className="text-4xl md:text-5xl text-white leading-tight tracking-tight mb-5">
            <span className="font-light text-slate-400">We build it. </span>
            <span className="font-bold">You run it.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            An agency charges $8,000–$25,000 to build this and takes months. Your
            membership covers the build, the hosting and every theme we ship —
            live in {OFFER.buildDays} days.
          </p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/30 mb-6">
          <div className="grid md:grid-cols-2">
            {/* Price */}
            <div className="bg-orange-500 p-10 flex flex-col justify-center">
              <div className="text-orange-100 text-sm font-semibold uppercase tracking-widest mb-4">
                Theme Club membership
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-white text-7xl font-black leading-none tracking-tight">
                  {price(OFFER.monthlyPrice)}
                </span>
                <span className="text-orange-100 text-xl font-semibold">/mo</span>
              </div>
              <div className="text-orange-100 text-sm mb-8">
                Everything included · Cancel anytime
              </div>

              <a
                href="/start"
                className="cta-glow bg-white hover:bg-orange-50 text-orange-600 font-black text-base px-8 py-4 rounded-full transition-colors text-center block shadow-lg"
              >
                Start my build →
              </a>

              <p className="text-orange-100/90 text-xs leading-relaxed mt-5">
                We host your site for as long as you&apos;re a member. Cancel and
                it comes down — or add the source code below and keep it forever.
              </p>
            </div>

            {/* Included */}
            <div className="p-8 bg-white">
              <h3 className="font-black text-slate-900 text-base mb-5">
                What your membership covers:
              </h3>
              <div className="space-y-3">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Source add-on — the escape hatch, priced so it can't be exploited */}
        <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">
                Want to own the code? Add the source.
              </h3>
              <ul className="space-y-1.5">
                {addOn.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <svg className="w-3.5 h-3.5 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 text-left md:text-right">
              <div className="text-white font-black text-3xl tracking-tight">
                {price(OFFER.sourcePrice)}
              </div>
              <div className="text-slate-500 text-xs">One-time, per theme</div>
            </div>
          </div>
        </div>

        {/* Trust */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            Secure checkout · Live in {OFFER.buildDays} days · Questions?{" "}
            <a href="#faq" className="text-orange-400 hover:text-orange-300 font-semibold">
              See the FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
