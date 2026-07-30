import Link from "next/link";

/* Standard interior-page header — the light/bold + lime-keyword pattern used on
   the theme and niche pages, factored out so every page opens the same way. */
export default function PageHero({
  id = "page-header",
  eyebrow,
  titleLight,
  titleBold,
  keyword,
  subtitle,
  backLink,
  children,
}: {
  /** One PageHero per page, so a fixed default id is collision-safe. */
  id?: string;
  eyebrow?: string;
  titleLight: string;
  titleBold: string;
  /** Highlighted word appended after titleBold, inside the lime swash. */
  keyword?: string;
  subtitle?: string;
  backLink?: { href: string; label: string };
  /** Optional slot below the subtitle — CTAs, meta, a stat row. */
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="gw-hero-dot-bg pt-12 pb-16">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {backLink && (
          <Link
            href={backLink.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8"
          >
            ← {backLink.label}
          </Link>
        )}

        {eyebrow && (
          <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-100 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            {eyebrow}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-slate-900 leading-[1.05] tracking-tight mb-5 max-w-3xl">
          <span className="font-light text-slate-500">{titleLight} </span>
          <span className="font-bold">
            {titleBold}
            {keyword && (
              <>
                {" "}
                <span className="gw-kw">{keyword}</span>
              </>
            )}
          </span>
        </h1>

        {subtitle && (
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
