import Link from "next/link";
import { OFFER } from "@/lib/offer";

/* Retargeted from "who should buy PureSaaS" to "who should join the club".
   Personas now lead with the niche, because that's how a GHL operator
   self-identifies — they say "I do med spas", not "I'm a local business". */
const personas = [
  {
    icon: "🏢",
    role: "Agency owners",
    tagline: "Reselling GHL under your own brand",
    description:
      "You've built a GHL sub-account agency and want to package it as a real product. You need a site that makes your platform look fundable — not like a reseller with a logo swap. Pick the SaaS & Agency theme and we'll have it live in a week.",
    painPoints: [
      "Clients ask 'wait, is this really your software?'",
      "Your site looks like a freelancer's side project",
      "Losing deals to more polished competitors",
    ],
  },
  {
    icon: "🎯",
    role: "Niche operators",
    tagline: "GHL productised for one vertical",
    description:
      "You've built your GHL offer for med spas, roofers, gyms or realtors. Generic templates speak to everyone and convert no one. Every theme in the library is built for a specific vertical, with the sections and language that vertical actually responds to.",
    painPoints: [
      "Generic templates convert nobody",
      "Your niche copy doesn't fit standard SaaS layouts",
      "You need vertical-specific proof and use cases",
    ],
  },
  {
    icon: "🚀",
    role: "Solo founders",
    tagline: "Launching your first GHL offer",
    description:
      "The platform is configured and the pricing is set — now you need the site that carries the whole pitch, and you have neither the budget for an agency nor the time to learn design. That's the entire reason this membership exists.",
    painPoints: [
      "No budget for a designer plus a developer",
      "Squarespace doesn't cut it for a real offer",
      "A blank canvas is costing you launch momentum",
    ],
  },
  {
    icon: "📈",
    role: "Resellers scaling up",
    tagline: "Past DIY, not ready for an agency",
    description:
      "You have clients and revenue, but the site is a franken-page held together with hope and old copy. You need to look like the platform you already are — without pulling yourself off client work for six weeks to rebuild it.",
    painPoints: [
      "Prospects compare you to HighLevel's own site",
      "Cold traffic doesn't convert",
      "Your site undersells what you actually do",
    ],
  },
];

export default function ForWhom() {
  return (
    <section id="who-its-for" className="bg-slate-50 py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Who it&apos;s for
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-5">
            <span className="font-light text-slate-500">Built for GHL operators</span>
            <br />
            <span className="font-bold">
              serious about their <span className="kw">brand</span>
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            For the operator who knows their platform is excellent and refuses to
            let a generic website be the reason they lose the deal.
          </p>
        </div>

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
                  <div className="font-bold text-slate-900 text-lg tracking-tight">
                    {persona.role}
                  </div>
                  <div className="text-orange-600 text-sm font-semibold">
                    {persona.tagline}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {persona.description}
              </p>

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

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-base">
            Recognise yourself?{" "}
            <Link href="/#themes" className="text-orange-600 font-bold hover:underline">
              Pick a theme
            </Link>{" "}
            and we&apos;ll have you live in {OFFER.buildDays} days.
          </p>
        </div>
      </div>
    </section>
  );
}
