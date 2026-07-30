import Link from "next/link";
import { NICHES } from "@/lib/niches";

/* Route-absolute hrefs — see Navbar. The "#" placeholders are legal pages that
   don't exist yet; they stay inert links rather than fake routes. */
const COLUMNS = [
  {
    title: "Themes",
    links: [
      { href: "/#themes", label: "Browse the library" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/start", label: "Start my build" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/#faq", label: "FAQ" },
      { href: "mailto:hello@growx.com", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "License" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30">
                <span className="text-white font-black text-[10px] leading-none">GX</span>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">Theme Club</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium, SEO + AEO + GEO ready themes for GoHighLevel agencies and
              white-label SaaS sellers. One membership, every theme, new drops
              every month.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-slate-300 font-semibold mb-4">{col.title}</div>
                <div className="space-y-2.5">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Niche links live in the footer so every niche page is reachable
            from every page on the site — the internal linking is what makes
            the SEO surface actually compound. */}
        <div className="border-t border-slate-800 pt-8 pb-8 mb-4">
          <div className="text-slate-300 font-semibold mb-4 text-sm">
            GoHighLevel niches
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {NICHES.map((niche) => (
              <Link
                key={niche.slug}
                href={`/niches/${niche.slug}`}
                className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
              >
                {niche.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Theme Club. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js · Not affiliated with GoHighLevel, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
