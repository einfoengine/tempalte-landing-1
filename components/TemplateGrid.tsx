"use client";

import { useMemo, useState } from "react";
import TemplateCard from "@/components/TemplateCard";
import {
  TEMPLATES,
  MODES,
  PERSONALITIES,
  sortedTemplates,
  type Mode,
  type Personality,
} from "@/lib/templates";

type Sort = "Hot" | "Newest" | "A–Z";

/* Three filter groups only — the plan's rule. Founders choose fast when the
   choices are few and legible. Same demo content across every template means
   design is the only variable, so the filters are all about presentation. */
export default function TemplateGrid({ showHeader = true }: { showHeader?: boolean }) {
  const [sort, setSort] = useState<Sort>("Hot");
  const [mode, setMode] = useState<Mode | "All">("All");
  const [personality, setPersonality] = useState<Personality | "All">("All");

  const visible = useMemo(() => {
    let list = TEMPLATES.filter(
      (t) =>
        (mode === "All" || t.mode === mode) &&
        (personality === "All" || t.personality === personality),
    );
    if (sort === "Hot") list = sortedTemplates(list);
    if (sort === "Newest")
      list = [...list].sort((a, b) => (a.badge === "new" ? -1 : 0) - (b.badge === "new" ? -1 : 0));
    if (sort === "A–Z") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [sort, mode, personality]);

  const pill = (active: boolean) =>
    `text-sm font-semibold px-4 py-2 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
      active
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
    }`;

  return (
    <section
      id="gw-templates"
      className={showHeader ? "py-20 border-t border-slate-100" : "pb-20 scroll-mt-20"}
    >
      <div className="max-w-6xl mx-auto px-6">
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white mb-2">
                <span className="font-light">One website, </span>
                <span className="font-bold">
                  {TEMPLATES.length} <span className="gw-kw">ways</span> to present it.
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Every template is a complete SaaS website. Pick the look that fits
                your brand — we build it for you.
              </p>
            </div>
            <span className="text-sm font-medium text-slate-400 shrink-0">
              {visible.length} {visible.length === 1 ? "template" : "templates"}
            </span>
          </div>
        )}

        {/* Filters — three groups */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1">Sort</span>
            {(["Hot", "Newest", "A–Z"] as Sort[]).map((s) => (
              <button key={s} type="button" onClick={() => setSort(s)} aria-pressed={sort === s} className={pill(sort === s)}>
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1">Mode</span>
            <button type="button" onClick={() => setMode("All")} aria-pressed={mode === "All"} className={pill(mode === "All")}>All</button>
            {MODES.map((m) => (
              <button key={m} type="button" onClick={() => setMode(m)} aria-pressed={mode === m} className={pill(mode === m)}>{m}</button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1">Style</span>
            <button type="button" onClick={() => setPersonality("All")} aria-pressed={personality === "All"} className={pill(personality === "All")}>All</button>
            {PERSONALITIES.map((p) => (
              <button key={p} type="button" onClick={() => setPersonality(p)} aria-pressed={personality === p} className={pill(personality === p)}>{p}</button>
            ))}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="gw-focus-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((t) => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 py-16 text-center">
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">No template matches that combination.</p>
            <p className="text-sm text-slate-400">Clear a filter — every template includes the same pages.</p>
          </div>
        )}

        {/* Apples-to-apples reassurance strip */}
        <div className="mt-8 gw-swipe max-w-none">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="font-semibold text-slate-800 dark:text-slate-100">Every preview uses the same demo content.</strong>{" "}
            So you&apos;re comparing design, not copywriting. When you pick one, we
            build it in your brand with your content.
          </p>
        </div>
      </div>
    </section>
  );
}
