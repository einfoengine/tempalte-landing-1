"use client";

import { useState } from "react";
import ThemeCard from "@/components/ThemeCard";
import { CATEGORIES, THEMES } from "@/lib/themes";

export default function ThemeGrid() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const visible =
    active === "All" ? THEMES : THEMES.filter((t) => t.category === active);

  return (
    <section id="themes" className="py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section head */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-2">
              <span className="font-light">The </span>
              <span className="font-bold">
                theme <span className="kw">library</span>
              </span>
            </h2>
            <p className="text-slate-500">
              Every theme is included with membership. New drops every month.
            </p>
          </div>
          <span className="text-sm font-medium text-slate-400 shrink-0">
            {visible.length} {visible.length === 1 ? "theme" : "themes"}
          </span>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter themes by category">
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                  isActive
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((theme) => (
              <ThemeCard key={theme.slug} theme={theme} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
            <p className="text-slate-500 font-medium mb-1">
              Nothing in {active} yet.
            </p>
            <p className="text-sm text-slate-400">
              This category is on the roadmap — members get every new drop free.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
