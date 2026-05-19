export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30">
            <span className="text-white font-black text-[10px] tracking-tight leading-none">PS</span>
          </div>
          <span className="font-extrabold text-slate-900 text-lg tracking-tight">PureSaaS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#includes" className="hover:text-slate-900 transition-colors">What&apos;s Included</a>
          <a href="#pages" className="hover:text-slate-900 transition-colors">Pages</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <a
          href="#pricing"
          className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-orange-500/25"
        >
          Get the Template — $97
        </a>
      </div>
    </header>
  );
}
