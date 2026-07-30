"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { THEMES, type Theme } from "@/lib/themes";
import { NICHES } from "@/lib/niches";

/* Full-bleed showcase on a real horizontal scroll container.
 *
 * The featured panel is 50% wide and always centred; its neighbours land on
 * exactly 25% each for free, since centring a 50% panel leaves 25% either side.
 *
 * Keeping it centred at both ends of the catalog needs an infinite track. The
 * list is rendered three times and we live in the middle copy: when the active
 * index leaves that copy we fold it back by one copy-width with transitions
 * off. Every copy is identical, so the fold is invisible — and it means there's
 * always a real theme on both sides rather than dead space at the extremes.
 *
 * Below md the 25% slots are unusable (97px on a 390px phone), so panels take
 * 85% and the same sequence plays one at a time.
 */

const ROTATE_MS = 4500;
const SETTLE_MS = 180;
/** How long a smooth scroll gets before we fold back into the middle copy. */
const FOLD_AFTER_MS = 700;
const COPIES = 3;

function bestFor(theme: Theme): string {
  const niche = NICHES.find((n) => n.category === theme.category);
  return niche ? `Selling to ${niche.prospect}` : theme.category;
}

function PanelBackground({ theme }: { theme: Theme }) {
  if (theme.cover) {
    return (
      <Image
        src={theme.cover}
        alt=""
        fill
        sizes="(max-width: 768px) 85vw, 50vw"
        className="object-cover object-top"
      />
    );
  }
  return (
    <div className="absolute inset-0 bg-linear-to-br from-orange-500/30 via-slate-800 to-slate-900">
      <div className="absolute inset-x-0 top-0 h-1/2 flex flex-col justify-center gap-3 p-8 opacity-45">
        <div className="h-2.5 w-3/5 rounded-full bg-orange-300/60" />
        <div className="h-2.5 w-4/5 rounded-full bg-white/25" />
        <div className="h-2.5 w-2/5 rounded-full bg-white/25" />
        <div className="mt-2 h-8 w-28 rounded-lg bg-orange-400/40" />
      </div>
    </div>
  );
}

function Panel({ theme, featured }: { theme: Theme; featured: boolean }) {
  return (
    <Link
      href={`/themes/${theme.slug}`}
      tabIndex={featured ? 0 : -1}
      className="group relative block h-full overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-orange-400"
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <PanelBackground theme={theme} />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-slate-950 from-15% via-slate-950/70 via-45% to-transparent" />

      {theme.isNew && (
        <span className="absolute top-5 left-5 z-10 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
          New
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <h3
          className={`font-display font-bold text-white tracking-tight mb-4 transition-all duration-500 ${
            featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          {theme.name}
        </h3>

        <dl className="space-y-2 border-t border-white/15 pt-4">
          {[
            { label: "Technology", value: theme.technology ?? "Next.js · Tailwind" },
            { label: "Released", value: theme.releaseDate ?? "Coming soon" },
            { label: "Best for", value: bestFor(theme) },
          ].map((row) => (
            <div key={row.label} className="flex items-baseline gap-3">
              <dt
                className={`text-white/45 uppercase tracking-wider shrink-0 ${
                  featured ? "text-[10px] w-24" : "text-[9px] w-20"
                }`}
              >
                {row.label}
              </dt>
              <dd
                className={`text-white/90 font-medium leading-snug ${
                  featured ? "text-sm" : "text-xs"
                }`}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <span
          className={`inline-flex items-center gap-2 mt-5 font-bold text-white transition-transform group-hover:translate-x-0.5 ${
            featured ? "text-sm" : "text-xs"
          }`}
        >
          Build with this
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

const total = THEMES.length;
const MIDDLE = total; // first index of the middle copy
const ITEMS: Theme[] = Array.from({ length: total * COPIES }, (_, i) => THEMES[i % total]);

/* Mirrors the width and gap classes on the track/panels below — keep the two in
 * step if either changes.
 *
 * These have to be constants rather than measurements. Panel widths are
 * mid-transition at the moment we need to scroll, so reading the DOM returns
 * the *old* width and centres the panel at 25% instead of 50% — landing it
 * exactly (720-360)/2 = 180px short. Computing from the final layout is the
 * only thing that's correct while animating. */
const LAYOUT = {
  md: { active: 0.5, inactive: 0.25, gap: 6 }, //  md:w-1/2 · md:w-1/4 · md:gap-1.5
  base: { active: 0.85, inactive: 0.85, gap: 4 }, // w-[85%] · gap-1
} as const;

export default function HotThemes() {
  const [active, setActive] = useState(MIDDLE);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [noAnim, setNoAnim] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingFold = useRef<number | null>(null);
  const skipCentre = useRef(false);
  const firstRun = useRef(true);

  const themeIndex = ((active - MIDDLE) % total + total) % total;

  const prefersReduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /** Final-layout geometry. Never derived from live rects — see LAYOUT. */
  const geometry = useCallback(() => {
    const el = trackRef.current;
    if (!el) return null;
    const width = el.clientWidth;
    const l = window.matchMedia("(min-width: 768px)").matches
      ? LAYOUT.md
      : LAYOUT.base;
    return {
      width,
      wActive: width * l.active,
      stride: width * l.inactive + l.gap,
    };
  }, []);

  /* Scrolls ONLY the track. Never scrollIntoView here: it scrolls every
   * scrollable ancestor including the document, which hijacks the page to this
   * section on mount and yanks the reader back on each advance. */
  const centreOn = useCallback(
    (index: number, instant = false) => {
      const el = trackRef.current;
      const g = geometry();
      if (!el || !g) return;
      // Every panel before the active one is inactive, so the offset is a
      // clean multiple of the stride.
      const target = index * g.stride - (g.width - g.wActive) / 2;
      el.scrollTo({
        left: Math.max(0, target),
        behavior: instant || prefersReduced() ? "auto" : "smooth",
      });
    },
    [geometry],
  );

  const nearestToCentre = useCallback(() => {
    const el = trackRef.current;
    const g = geometry();
    if (!el || !g) return active;
    const index = Math.round((el.scrollLeft + (g.width - g.wActive) / 2) / g.stride);
    return Math.min(Math.max(index, 0), ITEMS.length - 1);
  }, [active, geometry]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !onScreen || total < 2 || prefersReduced()) return;
    const id = setInterval(() => setActive((a) => a + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, onScreen]);

  // Centre the active panel, then fold back into the middle copy once the
  // scroll has finished, so the track can run forever in either direction.
  useEffect(() => {
    if (skipCentre.current) {
      skipCentre.current = false;
      return;
    }
    centreOn(active, firstRun.current);
    firstRun.current = false;

    if (active >= MIDDLE + total || active < MIDDLE) {
      const direction = active >= MIDDLE + total ? -1 : 1;
      const id = setTimeout(() => {
        const g = geometry();
        if (!g) return;
        pendingFold.current = direction * total * g.stride;
        skipCentre.current = true;
        setNoAnim(true);
        setActive((a) => a + direction * total);
      }, FOLD_AFTER_MS);
      return () => clearTimeout(id);
    }
  }, [active, centreOn, geometry]);

  // Apply the fold after the DOM has the new widths but before paint, so the
  // scroll correction and the width change land in the same frame.
  useLayoutEffect(() => {
    if (pendingFold.current === null) return;
    const el = trackRef.current;
    if (el) el.scrollLeft += pendingFold.current;
    pendingFold.current = null;
    requestAnimationFrame(() => setNoAnim(false));
  }, [active]);

  const handleScroll = () => {
    if (settleTimer.current) clearTimeout(settleTimer.current);
    // Resolve the active panel only once the gesture settles — doing it per
    // frame would thrash the width transition on every scroll event.
    settleTimer.current = setTimeout(() => {
      const next = nearestToCentre();
      setActive((prev) => (prev === next ? prev : next));
    }, SETTLE_MS);
  };

  return (
    <section
      id="hot-themes"
      className="bg-slate-950 py-16 border-b border-slate-800"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hot themes"
    >
      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Hot right now
          </span>
          <h2 className="text-3xl md:text-4xl tracking-tight text-white">
            <span className="font-light text-slate-400">The themes members </span>
            <span className="font-bold">
              are <span className="kw">picking</span>
            </span>
          </h2>
        </div>
        <p aria-live="polite" className="sr-only">
          Now showing {THEMES[themeIndex].name}
        </p>
        <Link
          href="/#themes"
          className="text-sm font-semibold text-slate-300 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 rounded-full px-5 py-2.5"
        >
          See all {total} themes
        </Link>
      </div>

      <div
        id="hot-themes-track"
        ref={trackRef}
        onScroll={handleScroll}
        className="w-full h-130 md:h-150 flex gap-1 md:gap-1.5 overflow-x-auto no-scrollbar overscroll-x-contain"
      >
        {ITEMS.map((theme, i) => (
          <div
            key={`${theme.slug}-${i}`}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            aria-hidden={i !== active}
            className={`h-full flex-none ${
              noAnim ? "" : "transition-[width] duration-500 ease-out"
            } ${i === active ? "w-[85%] md:w-1/2" : "w-[85%] md:w-1/4"}`}
          >
            <Panel theme={theme} featured={i === active} />
          </div>
        ))}
      </div>

      {/* Dashed switcher — one 2px dash per theme */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex gap-2" role="group" aria-label="Switch theme">
          {THEMES.map((theme, i) => {
            const isActive = i === themeIndex;
            return (
              <button
                key={theme.slug}
                type="button"
                onClick={() => setActive(MIDDLE + i)}
                aria-label={`Show ${theme.name}`}
                aria-current={isActive}
                className="group flex-1 py-2.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
              >
                <span
                  className={`block h-0.5 w-full rounded-full transition-colors duration-300 ${
                    isActive
                      ? "bg-orange-500"
                      : "bg-slate-700 group-hover:bg-slate-500"
                  }`}
                />
              </button>
            );
          })}
        </div>
        <p className="text-center text-slate-600 text-xs mt-1">
          {THEMES[themeIndex].name} · {themeIndex + 1} of {total}
        </p>
      </div>
    </section>
  );
}
