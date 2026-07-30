import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Root-level 404. Unknown theme slugs land here too: `dynamicParams = false` in
   themes/[slug] rejects them at the routing level, so that segment's own
   not-found boundary would never render. */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="hero-dot-bg">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          <p className="font-display font-bold text-6xl text-slate-200 tracking-tight mb-4">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl tracking-tight text-slate-900 mb-4">
            <span className="font-light">We can&apos;t find that </span>
            <span className="font-bold">page</span>
          </h1>
          <p className="text-slate-500 max-w-md mx-auto mb-8">
            It may have been moved or renamed — and if you were after a theme, it
            might not be in the library yet. The full catalog is one click away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#themes"
              className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold pl-8 pr-3 py-3 rounded-full transition-colors w-full sm:w-auto"
            >
              Browse the library
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/"
              className="text-slate-700 font-semibold px-8 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors w-full sm:w-auto text-center"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
