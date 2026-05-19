export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30">
                <span className="text-white font-black text-[10px] leading-none">PS</span>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">PureSaaS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The premium, SEO + AEO + GEO ready website template built for GHL white-label SaaS sellers.
              Represent your product properly and close more deals.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="text-slate-300 font-semibold mb-4">Template</div>
              <div className="space-y-2.5">
                <a href="#includes" className="block text-slate-500 hover:text-slate-300 transition-colors">What&apos;s Included</a>
                <a href="#pages" className="block text-slate-500 hover:text-slate-300 transition-colors">Pages</a>
                <a href="#pricing" className="block text-slate-500 hover:text-slate-300 transition-colors">Pricing</a>
              </div>
            </div>
            <div>
              <div className="text-slate-300 font-semibold mb-4">Support</div>
              <div className="space-y-2.5">
                <a href="#faq" className="block text-slate-500 hover:text-slate-300 transition-colors">FAQ</a>
                <a href="mailto:hello@growx.com" className="block text-slate-500 hover:text-slate-300 transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-slate-300 font-semibold mb-4">Legal</div>
              <div className="space-y-2.5">
                <a href="#" className="block text-slate-500 hover:text-slate-300 transition-colors">License</a>
                <a href="#" className="block text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-slate-500 hover:text-slate-300 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} PureSaaS. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js · Not affiliated with GoHighLevel, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
