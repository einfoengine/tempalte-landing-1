import Image from "next/image";
import Link from "next/link";
import type { Template } from "@/lib/templates";
import { OFFER, price } from "@/lib/offer";

const BADGE_LABEL: Record<string, string> = {
  hot: "Flagship",
  new: "New",
  updated: "Updated",
};

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
        Preview coming soon
      </span>
    </div>
  );
}

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-slate-50 border-b border-slate-100">
        {template.cover ? (
          <Image
            src={template.cover}
            alt={`${template.name} template preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <CoverPlaceholder slug={template.slug} />
        )}

        {template.badge && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            {BADGE_LABEL[template.badge]}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="font-bold text-slate-900 text-base tracking-tight">
            {template.name}
          </h3>
          <div className="flex gap-1.5 shrink-0">
            <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              {template.mode}
            </span>
            <span className="text-[11px] font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
              {template.personality}
            </span>
          </div>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
          {template.blurb}
        </p>
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="text-slate-400 font-medium">
            Multi-page site · built in your brand
          </span>
          <span className="text-slate-500 font-semibold">
            {price(OFFER.price)}{" "}
            <span className="text-slate-400 font-normal">built for you</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
