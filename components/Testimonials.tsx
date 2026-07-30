const testimonials = [
  {
    quote:
      "I was embarrassed to send prospects to my website. Three days after deploying PureSaaS, I closed a $497/month client who told me the site looked 'exactly like a real SaaS company.' That single close paid for the template 5x over.",
    name: "Marcus R.",
    role: "Agency Owner, GoScale CRM",
    avatar: "MR",
    avatarBg: "bg-blue-500",
    metric: "First close: 3 days post-launch",
  },
  {
    quote:
      "I spent 4 months duct-taping a Webflow site that still didn't cover half of what PureSaaS ships with out of the box. The ROI calculator alone increased my pricing page conversion. This template paid for itself in week one.",
    name: "Priya S.",
    role: "Founder, NexaFlow SaaS",
    avatar: "PS",
    avatarBg: "bg-emerald-500",
    metric: "Pricing page conversions: +41%",
  },
  {
    quote:
      "My leads were dropping off because they couldn't understand the platform. PureSaaS's feature deep-dives, AI showcase, and integration hub gave them all the context they needed to say yes without a sales call.",
    name: "Daniel K.",
    role: "GHL Reseller, PulseStack",
    avatar: "DK",
    avatarBg: "bg-purple-500",
    metric: "Sales call volume: -30% (self-serve converting)",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Early Results
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-5">
            What Happens When Your
            <br />Website Finally Works
          </h2>
          <p className="text-slate-400 text-sm">
            Real feedback from GHL SaaS sellers who deployed PureSaaS.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-7 hover:shadow-lg hover:shadow-slate-100 hover:border-slate-300 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric */}
              <div className="bg-orange-50 dark:bg-orange-500/15 border border-orange-100 dark:border-orange-500/30 rounded-xl px-4 py-2.5 mb-5">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xs">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 ${t.avatarBg} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-100 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
