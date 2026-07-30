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
import { TEMPLATES, sortedTemplates, type Template } from "@/lib/templates";
import { OFFER, price } from "@/lib/offer";

/* Full-bleed showcase on a real horizontal scroll container. Featured panel is
 * 50% wide and always centred; neighbours fall to 25% each for free. Infinite
 * loop via three rendered copies, folded back into the middle copy. */

const ROTATE_MS = 3200;
const SETTLE_MS = 180;
/* Must stay comfortably under ROTATE_MS: the fold back into the middle copy has
   to finish before the next auto-advance fires, or the two fight each other. */
const FOLD_AFTER_MS = 700;
const COPIES = 3;

const ORDERED = sortedTemplates();

const BADGE_LABEL: Record<string, string> = {
  hot: "Flagship",
  new: "New drop",
  updated: "Updated",
};

function PanelBackground({ template }: { template: Template }) {
  if (template.cover) {
    return (
      <Image
        src={template.cover}
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

function Panel({ template, featured }: { template: Template; featured: boolean }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      tabIndex={featured ? 0 : -1}
      className="group relative block h-full overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-orange-400"
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <PanelBackground template={template} />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 from-15% via-slate-950/70 via-45% to-transparent" />

      {template.badge && (
        <span className="absolute top-5 left-5 z-10 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
          {BADGE_LABEL[template.badge]}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <h3
          className={`font-display font-bold text-white tracking-tight mb-4 transition-all duration-500 ${
            featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          {template.name}
        </h3>
        <dl className="space-y-2 border-t border-white/15 pt-4">
          {[
            { label: "Style", value: template.personality },
            { label: "Mode", value: template.mode },
            { label: "Price", value: `${price(OFFER.price)} built for you` },
          ].map((row) => (
            <div key={row.label} className="flex items-baseline gap-3">
              <dt className={`text-white/45 uppercase tracking-wider shrink-0 ${featured ? "text-[10px] w-20" : "text-[9px] w-16"}`}>
                {row.label}
              </dt>
              <dd className={`text-white/90 font-medium leading-snug ${featured ? "text-sm" : "text-xs"}`}>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
        <span className={`inline-flex items-center gap-2 mt-5 font-bold text-white transition-transform group-hover:translate-x-0.5 ${featured ? "text-sm" : "text-xs"}`}>
          View template <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

const total = ORDERED.length;
const MIDDLE = total;
const ITEMS: Template[] = Array.from({ length: total * COPIES }, (_, i) => ORDERED[i % total]);

const LAYOUT = {
  md: { active: 0.5, inactive: 0.25, gap: 6 },
  base: { active: 0.85, inactive: 0.85, gap: 4 },
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

  const templateIndex = ((active - MIDDLE) % total + total) % total;

  const prefersReduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const geometry = useCallback(() => {
    const el = trackRef.current;
    if (!el) return null;
    const width = el.clientWidth;
    const l = window.matchMedia("(min-width: 768px)").matches ? LAYOUT.md : LAYOUT.base;
    return { width, wActive: width * l.active, stride: width * l.inactive + l.gap };
  }, []);

  const centreOn = useCallback(
    (index: number, instant = false) => {
      const el = trackRef.current;
      const g = geometry();
      if (!el || !g) return;
      const target = index * g.stride - (g.width - g.wActive) / 2;
      el.scrollTo({ left: Math.max(0, target), behavior: instant || prefersReduced() ? "auto" : "smooth" });
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
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !onScreen || total < 2 || prefersReduced()) return;
    const id = setInterval(() => setActive((a) => a + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, onScreen]);

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

  useLayoutEffect(() => {
    if (pendingFold.current === null) return;
    const el = trackRef.current;
    if (el) el.scrollLeft += pendingFold.current;
    pendingFold.current = null;
    requestAnimationFrame(() => setNoAnim(false));
  }, [active]);

  const handleScroll = () => {
    if (settleTimer.current) clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      const next = nearestToCentre();
      setActive((prev) => (prev === next ? prev : next));
    }, SETTLE_MS);
  };

  return (
    <section
      id="gw-hot-templates"
      className="bg-slate-950 py-16 border-b border-slate-800"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hot templates"
    >
      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">The designs</span>
          <h2 className="text-3xl md:text-4xl tracking-tight text-white">
            <span className="font-light text-slate-400">Start with the </span>
            <span className="font-bold">flagship or the <span className="gw-kw">new one</span></span>
          </h2>
        </div>
        <p aria-live="polite" className="sr-only">Now showing {ORDERED[templateIndex].name}</p>
        <Link href="/templates" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 rounded-full px-5 py-2.5">
          See all {total} templates
        </Link>
      </div>

      <div
        id="gw-hot-templates-track"
        ref={trackRef}
        onScroll={handleScroll}
        className="w-full h-130 md:h-150 flex gap-1 md:gap-1.5 overflow-x-auto gw-no-scrollbar overscroll-x-contain"
      >
        {ITEMS.map((template, i) => (
          <div
            key={`${template.slug}-${i}`}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            aria-hidden={i !== active}
            className={`h-full flex-none ${noAnim ? "" : "transition-[width] duration-500 ease-out"} ${
              i === active ? "w-[85%] md:w-1/2" : "w-[85%] md:w-1/4"
            }`}
          >
            <Panel template={template} featured={i === active} />
          </div>
        ))}
      </div>

      {/* Arrows + dashed switcher. Arrows step `active` by ±1; the infinite-loop
          fold handles crossing out of the middle copy, so they wrap forever in
          both directions with no dead end at either end of the catalog. */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setActive((a) => a - 1)}
            aria-label="Previous template"
            className="shrink-0 w-10 h-10 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            <span aria-hidden="true" className="text-lg leading-none">←</span>
          </button>

          <div className="flex gap-2 flex-1" role="group" aria-label="Switch template">
            {ORDERED.map((t, i) => {
              const isActive = i === templateIndex;
              return (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => setActive(MIDDLE + i)}
                  aria-label={`Show ${t.name}`}
                  aria-current={isActive}
                  className="group flex-1 py-2.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
                >
                  <span className={`block h-0.5 w-full rounded-full transition-colors duration-300 ${isActive ? "bg-orange-500" : "bg-slate-700 group-hover:bg-slate-500"}`} />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setActive((a) => a + 1)}
            aria-label="Next template"
            /* Identical treatment to the Previous button — a solid accent on one
               and an outline on the other read as two different kinds of control. */
            className="shrink-0 w-10 h-10 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            <span aria-hidden="true" className="text-lg leading-none">→</span>
          </button>
        </div>
        <p className="text-center text-slate-600 text-xs mt-1">
          {ORDERED[templateIndex].name} · {templateIndex + 1} of {total}
        </p>
      </div>
    </section>
  );
}
