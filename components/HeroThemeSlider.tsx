"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { THEMES, type Theme } from "@/lib/themes";

/* Newest first — the hero slider is merchandising for the latest drops. */
const SLIDES: Theme[] = [...THEMES]
  .sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)))
  .slice(0, 4);

const ROTATE_MS = 5000;

function SlidePlaceholder({ slug }: { slug: string }) {
  const seed = slug.length % 3;
  return (
    <div className="absolute inset-0 bg-linear-to-br from-orange-50 to-slate-50 flex flex-col justify-center gap-3 p-10">
      <div className="h-3 rounded-full bg-orange-200/70" style={{ width: `${45 + seed * 10}%` }} />
      <div className="h-3 rounded-full bg-slate-200" style={{ width: `${70 - seed * 8}%` }} />
      <div className="h-3 rounded-full bg-slate-200" style={{ width: "35%" }} />
      <div className="mt-3 h-9 w-32 rounded-lg bg-orange-500/25" />
    </div>
  );
}

export default function HeroThemeSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => setIndex((next + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (paused || SLIDES.length < 2) return;
    // Don't auto-rotate for people who've asked for less motion.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const current = SLIDES[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Latest themes"
    >
      <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
        {/* Browser chrome */}
        <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-slate-400 font-mono border border-slate-200 truncate">
            www.yourbrand.com
          </div>
        </div>

        {/* Slides */}
        <div className="relative aspect-16/10 bg-slate-50">
          {SLIDES.map((theme, i) => (
            <div
              key={theme.slug}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              {theme.cover ? (
                <Image
                  src={theme.cover}
                  alt={`${theme.name} theme preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  // Only the first slide is the LCP candidate; the rest lazy-load.
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
              ) : (
                <SlidePlaceholder slug={theme.slug} />
              )}
            </div>
          ))}
        </div>

        {/* Caption + controls */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-t border-slate-100">
          <div className="min-w-0">
            <p aria-live="polite" className="font-bold text-slate-900 text-sm truncate">
              {current.name}
            </p>
            <p className="text-xs text-slate-400 truncate">
              {current.category} · {current.pages} pages
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous theme"
              className="w-9 h-9 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next theme"
              className="w-9 h-9 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {SLIDES.map((theme, i) => (
          <button
            key={theme.slug}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show ${theme.name}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
              i === index ? "w-6 bg-orange-500" : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* Floating card — the reference's "SAY HI!" beat, doing real work here */}
      {current.isNew && (
        <div className="absolute -left-4 sm:-left-8 bottom-24 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 hidden sm:block">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shrink-0" />
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                New drop
              </div>
              <div className="text-xs font-semibold text-slate-800">{current.name}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
