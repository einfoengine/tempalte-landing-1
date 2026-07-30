import Link from "next/link";
import { OFFER, price } from "@/lib/offer";

/* Trimmed from nine cards to six.
 *
 * Dropped: "Easy to Customize (6 centralized data files)", "Well Modularized
 * (67+ standalone components)", "Well Documented (setup guide)". Those sell
 * developer experience to someone who edits the code — but in a done-for-you
 * model the buyer never opens it, so they don't land. They're real selling
 * points for the source-code add-on, and belong there instead.
 *
 * Colours are neutral with a single emerald accent, not a nine-hue rainbow:
 * this section sits directly under the theme grid and must not compete with it.
 */
const features = [
  {
    icon: "🔍",
    title: "Built to rank",
    badge: "SEO",
    description:
      "Semantic HTML, clean heading hierarchy, meta and Open Graph tags, canonical URLs — set up properly on every page we build, so Google has nothing to complain about.",
    highlights: ["Semantic HTML structure", "Page-level meta + Open Graph", "Clean URL architecture"],
  },
  {
    icon: "🤖",
    title: "Built to be cited",
    badge: "AI search",
    description:
      "Structured for the answer engines your buyers now use — Perplexity, ChatGPT search, Google AI Overviews. Your content is formatted so AI cites it, not just crawls it.",
    highlights: ["FAQs structured for extraction", "Clear entity definitions", "Concise, citeable copy blocks"],
  },
  {
    icon: "🎨",
    title: "Branded to you",
    badge: "Your brand",
    description:
      "Your logo, your palette, your voice. We set it all up during the build — the theme disappears and your brand is what's left. Nothing ships looking like a template.",
    highlights: ["Your colours throughout", "Your logo and typography", "Copy written in your voice"],
  },
  {
    icon: "🪶",
    title: "Genuinely fast",
    badge: "Performance",
    description:
      "No page-builder bloat, no heavy runtime. Static generation on modern infrastructure means sub-second loads and Core Web Vitals that hold up when Google looks.",
    highlights: ["Static site generation", "No page-builder overhead", "Optimised Core Web Vitals"],
  },
  {
    icon: "📈",
    title: "Grows with you",
    badge: "Scalable",
    description:
      "Need a new landing page for a campaign, or a section for a service you just launched? Send it over. Your site expands as your offer does — that's what the membership is for.",
    highlights: ["New pages on request", "Seasonal campaign sections", "Updates included"],
  },
  {
    icon: "🙋",
    title: "A real person replies",
    badge: "Support",
    description:
      "Not a ticket queue that auto-closes in 48 hours. You get direct access to the people who built your site and know exactly how it works.",
    highlights: ["Direct access support", "Fast response times", "The team that built it"],
  },
];

export default function TemplateFeatures() {
  return (
    <section id="includes" className="bg-white py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">
            The quality bar
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-5">
            <span className="font-light text-slate-500">Not just pretty —</span>
            <br />
            <span className="font-bold">
              built to <span className="kw">perform</span>
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Most templates look good in the preview and fall apart in production.
            Every theme in the library is engineered for the things that actually
            move revenue — ranking, speed, and looking like a company worth paying.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-xl">
                  {f.icon}
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
                  {f.badge}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{f.description}</p>

              <ul className="space-y-1.5">
                {f.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-slate-400 text-xs">
                    <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Summary strip */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-xl mb-1 tracking-tight">
              SEO · AI search · Fast · Branded · Supported
            </div>
            <div className="text-slate-400 text-sm">
              Every bar a professional site has to clear — built for you, not handed to you.
            </div>
          </div>
          <Link
            href="/start"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors whitespace-nowrap shrink-0"
          >
            Start my build — {price(OFFER.monthlyPrice)}/mo →
          </Link>
        </div>
      </div>
    </section>
  );
}
