import Link from "next/link";

/* Route-absolute hrefs ("/#themes", not "#themes") — this renders on
   /themes/[slug] too, where a bare hash would look for an anchor that
   isn't on the page and silently do nothing. */
const LINKS = [
  { href: "/#themes", label: "Themes" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30">
            <span className="text-white font-black text-[10px] tracking-tight leading-none">GX</span>
          </div>
          <span className="font-extrabold text-slate-900 text-lg tracking-tight">Theme Club</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/start"
          className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-md shadow-orange-500/25"
        >
          Start my build
        </Link>
      </div>
    </header>
  );
}
