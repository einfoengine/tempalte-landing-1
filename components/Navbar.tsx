"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Plan nav is Templates · UI kits · Packages · Method · Support. UI kits and
   Method are Sprint 2 — added here the moment they exist so nothing 404s. */
const LINKS = [
  { href: "/templates", label: "Templates" },
  { href: "/packages", label: "Packages" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/work", label: "Examples" },
];

const MOBILE_EXTRA = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Support" },
];

function Wordmark() {
  return (
    <span className="font-extrabold text-slate-900 text-lg tracking-tight lowercase">
      ghl<span className="text-orange-600">saas</span>theme
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30">
            <span className="text-white font-black text-[11px] tracking-tight leading-none lowercase">gs</span>
          </div>
          <Wordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`transition-colors ${
                isActive(link.href) ? "text-slate-900 font-semibold" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/templates"
            className="hidden sm:inline-flex bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-md shadow-orange-500/25"
          >
            Browse templates
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden w-10 h-10 -mr-2 flex items-center justify-center text-slate-700"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-current rounded-full transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-current rounded-full transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-current rounded-full transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="md:hidden border-t border-slate-100 bg-white px-6 py-4">
          <div className="flex flex-col">
            {[...LINKS, ...MOBILE_EXTRA].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`py-3 border-b border-slate-100 last:border-0 font-medium ${
                  isActive(link.href) ? "text-orange-600" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/templates" onClick={() => setOpen(false)} className="mt-4 bg-orange-500 text-white font-bold px-5 py-3 rounded-full text-center">
              Browse templates
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
