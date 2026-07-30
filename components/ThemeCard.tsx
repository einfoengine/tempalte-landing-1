import Image from "next/image";
import Link from "next/link";
import type { Theme } from "@/lib/themes";

/* Abstract stand-in for a theme without a real cover yet. Deliberately reads as
   a wireframe, not a screenshot, so it can never be mistaken for a real product
   shot. Layout is derived from the slug so SSR and client agree. */
function CoverPlaceholder({ slug }: { slug: string }) {
  const seed = slug.length % 3;
  return (
    <div className="absolute inset-0 bg-linear-to-br from-orange-50 to-slate-50 flex flex-col gap-2 p-6 justify-center">
      <div className="h-2 rounded-full bg-orange-200/70" style={{ width: `${45 + seed * 10}%` }} />
      <div className="h-2 rounded-full bg-slate-200" style={{ width: `${70 - seed * 8}%` }} />
      <div className="h-2 rounded-full bg-slate-200" style={{ width: "35%" }} />
      <div className="mt-2 flex gap-2">
        <div className="h-6 w-20 rounded-md bg-orange-500/25" />
        <div className="h-6 w-14 rounded-md bg-slate-200" />
      </div>
      <span className="absolute bottom-3 right-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        Cover coming soon
      </span>
    </div>
  );
}

export default function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <Link
      href={`/themes/${theme.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      {/* Cover */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-50 border-b border-slate-100">
        {theme.cover ? (
          <Image
            src={theme.cover}
            alt={`${theme.name} theme preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <CoverPlaceholder slug={theme.slug} />
        )}

        {theme.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            New
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="font-bold text-slate-900 text-base tracking-tight">
            {theme.name}
          </h3>
          <span className="shrink-0 text-[11px] font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
            {theme.category}
          </span>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
          {theme.blurb}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <span>{theme.pages} pages</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-500 group-hover:text-orange-600 transition-colors">
            Build with this →
          </span>
        </div>
      </div>
    </Link>
  );
}
