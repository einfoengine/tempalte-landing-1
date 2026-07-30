import Link from "next/link";
import { TEMPLATES, sortedTemplates } from "@/lib/templates";
import { OFFER, buildRange } from "@/lib/offer";
import FooterSignup from "@/components/FooterSignup";

/* Legal pages now exist (Sprint 1) — the plan requires them before running
   traffic, so they're real routes, not "#" stubs. */
const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/templates", label: "Templates" },
      { href: "/pricing", label: "Pricing" },
      { href: "/work", label: "Example builds" },
      { href: "/how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Support" },
      { href: "/start", label: "Start a build" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/refund-policy", label: "Refund policy" },
    ],
  },
];

export default function Footer() {
  const top = sortedTemplates().slice(0, 6);
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Last-chance CTA */}
        <div className="py-12 border-b border-slate-800">
          <div className="rounded-3xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl tracking-tight text-white mb-2">
                <span className="font-light text-slate-400">Your SaaS is ready. </span>
                <span className="font-bold">Your website should say so.</span>
              </h2>
              <p className="text-slate-400 text-sm">
                A finished site, not a file · Live in {buildRange()} ·{" "}
                {OFFER.supportMonths} months support free
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 shrink-0">
              <Link
                href="/templates"
                className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-7 pr-3 py-3 rounded-full transition-colors"
              >
                See templates
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center text-slate-200 font-semibold px-7 py-3 rounded-full border border-slate-600 hover:border-slate-500 hover:bg-slate-800 transition-colors"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Brand + signup + columns */}
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-10 lg:gap-16 py-12">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30">
                <span className="text-white font-black text-[11px] leading-none lowercase">gs</span>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight lowercase">
                ghl<span className="text-orange-400">saas</span>theme
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Launch-ready SaaS websites for HighLevel agency owners. Pick a
              template — we build your site from it in your brand, wire your CRM,
              and support it free for {OFFER.supportMonths} months. Not a file. A
              finished website.
            </p>
            <FooterSignup />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-white font-semibold mb-4">{col.title}</div>
                <div className="space-y-2.5">
                  {col.links.map((link) => (
                    <Link key={link.label} href={link.href} className="block text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Template links — internal linking for the /templates cluster */}
        <div className="border-t border-slate-800 py-8">
          <div className="text-white font-semibold mb-4 text-sm">Templates</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {top.map((t) => (
              <Link key={t.slug} href={`/templates/${t.slug}`} className="text-slate-400 hover:text-white transition-colors text-sm">
                {t.name}
                <span className="text-slate-600"> · {t.mode}</span>
              </Link>
            ))}
            <Link href="/templates" className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-semibold">
              All {TEMPLATES.length} →
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} ghlsaastheme. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs">
            Independent product for the HighLevel ecosystem. Not affiliated with
            or endorsed by HighLevel.
          </p>
        </div>
      </div>
    </footer>
  );
}
