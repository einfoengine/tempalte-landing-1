const personas = [
  {
    icon: "🏢",
    role: "Agency Owners",
    tagline: "Reselling GHL under your brand",
    description:
      "You've built a GHL sub-account agency and want to package it as a real SaaS product. PureSaaS gives you the marketing site that makes 'XYZ Pro' look like a serious, fundable business — not a reseller.",
    painPoints: ["Clients ask 'wait, is this really your software?'", "Your site looks like a freelancer's side project", "Losing enterprise deals to more polished competitors"],
  },
  {
    icon: "🚀",
    role: "Solo Founders",
    tagline: "Launching your first GHL SaaS",
    description:
      "You've got the platform configured, the pricing figured out, and now you need a website that can carry your entire pitch. PureSaaS is your unfair advantage — ship a Series A-looking site on a solopreneur budget.",
    painPoints: ["No time or budget to hire a designer + developer", "Squarespace doesn't cut it for SaaS", "Staring at a blank canvas is costing you launch momentum"],
  },
  {
    icon: "📈",
    role: "GHL Resellers Scaling Up",
    tagline: "Moving beyond DIY marketing",
    description:
      "You've got clients and revenue, but your marketing site is a franken-site held together with hope and old copy. It's time to look like the $1,000/month platform you are — not the $197/month tool you started as.",
    painPoints: ["Clients compare you to HighLevel's own site", "New leads don't convert from cold traffic", "Your site doesn't reflect the product's real capabilities"],
  },
  {
    icon: "🎯",
    role: "Niche SaaS Builders",
    tagline: "GHL for a specific vertical",
    description:
      "You've productized GHL for restaurants, real estate, gyms, or medspas. Your template is already specific — now your website needs to speak directly to that niche with the right messaging architecture.",
    painPoints: ["Generic templates speak to everyone and convert no one", "Your niche copy doesn't fit standard SaaS layouts", "You need sections for vertical-specific ROI and use cases"],
  },
];

export default function ForWhom() {
  return (
    <section className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Who It&apos;s For
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            Built for GHL Sellers Serious
            <br />About Their Brand
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            PureSaaS is for the GHL operator who knows their platform is excellent
            and refuses to let a generic website be the reason they lose the deal.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.role}
              className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg hover:shadow-slate-100 transition-all"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {persona.icon}
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">{persona.role}</div>
                  <div className="text-orange-500 text-sm font-semibold">{persona.tagline}</div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">{persona.description}</p>

              <div className="space-y-2">
                {persona.painPoints.map((pain) => (
                  <div key={pain} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{pain}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-base">
            If you recognized yourself in any of these —{" "}
            <a href="#pricing" className="text-orange-500 font-bold hover:underline">
              PureSaaS was built for you.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
