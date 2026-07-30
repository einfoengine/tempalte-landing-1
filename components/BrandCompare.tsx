"use client";

import { useCallback, useRef, useState } from "react";

/* Drag-to-compare: a generic template on the left, the same page rebranded on
 * the right. Proves "your brand, not ours" in a way a sentence can't.
 *
 * Built natively — pointer events + a clip inset. No animation library.
 *
 * Accessibility: the handle is a real slider (role, aria-value*, tabIndex) and
 * responds to arrow/Home/End keys, so it works without a pointer. Both panels
 * are aria-hidden decoration; the surrounding copy carries the meaning.
 */

/* A tiny fake page. `branded` swaps the neutral greys for the brand colour.
 *
 * The mini page stays LIGHT in dark mode on purpose: it depicts a website, so
 * it should behave like a screenshot, not like site chrome. Inverting it made
 * the template-vs-brand comparison unreadable.
 *
 * The frame is 16:10 with a min-height floor: in a narrow column the ratio
 * alone gives less height than this content needs and the card row clips.
 * If you add anything here, re-check the floor. */
function MiniPage({ branded }: { branded: boolean }) {
  const accent = branded ? "bg-orange-500" : "bg-slate-300";
  const accentSoft = branded ? "bg-orange-200" : "bg-slate-200";
  return (
    <div className="absolute inset-0 bg-white select-none flex flex-col">
      {/* Nav is a FULL-WIDTH colour band on purpose: the brand-carrying pieces
          (logo, CTA) all sit on the left, so without something spanning the
          whole width the two halves looked identical until you dragged to the
          very edge — the comparison demonstrated nothing at rest. */}
      <div
        className={`flex items-center gap-2 px-4 py-2.5 mb-3 ${
          branded ? "bg-orange-500" : "bg-slate-100"
        }`}
      >
        <div className={`w-4 h-4 rounded ${branded ? "bg-white" : "bg-slate-300"}`} />
        <div
          className={`h-1.5 w-12 rounded-full ${
            branded ? "bg-white/70" : "bg-slate-300"
          }`}
        />
        <div className="ml-auto flex gap-1.5">
          <div className={`h-1 w-7 rounded-full ${branded ? "bg-white/50" : "bg-slate-300"}`} />
          <div className={`h-1 w-7 rounded-full ${branded ? "bg-white/50" : "bg-slate-300"}`} />
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col flex-1">
      {/* hero */}
      <div className="h-2 w-4/5 rounded-full bg-slate-800/80 mb-1.5" />
      <div className="h-2 w-3/5 rounded-full bg-slate-800/80 mb-2.5" />
      <div className="h-1 w-full rounded-full bg-slate-200 mb-1" />
      <div className="h-1 w-5/6 rounded-full bg-slate-200 mb-3" />
      <div className="flex gap-2 mb-3">
        <div className={`h-5 w-16 rounded-full ${accent}`} />
        <div className="h-5 w-12 rounded-full border border-slate-200" />
      </div>
      {/* cards */}
        <div className="grid grid-cols-3 gap-1.5 mt-auto">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded border border-slate-200 p-1.5">
              <div className={`h-1 w-6 rounded-full ${accentSoft} mb-1`} />
              <div className="h-1 w-full rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BrandCompare() {
  const [pos, setPos] = useState(52);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(Math.max(pct, 4), 96));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(p - step, 4));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(p + step, 96));
    else if (e.key === "Home") setPos(4);
    else if (e.key === "End") setPos(96);
    else return;
    e.preventDefault();
  };

  return (
    <div>
      <div
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative w-full aspect-16/10 min-h-52 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden cursor-ew-resize touch-none bg-white"
      >
        {/* Base: the generic template */}
        <div aria-hidden="true" className="absolute inset-0">
          <MiniPage branded={false} />
        </div>

        {/* Overlay: the same page in your brand, revealed by the handle */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <MiniPage branded />
        </div>

        {/* Labels */}
        <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider bg-slate-900/75 text-white px-2 py-0.5 rounded-full pointer-events-none">
          Template
        </span>
        <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2 py-0.5 rounded-full pointer-events-none">
          Your brand
        </span>

        {/* Handle */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare the plain template with your branded version"
          aria-valuemin={4}
          aria-valuemax={96}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% branded`}
          onKeyDown={onKeyDown}
          className="absolute inset-y-0 -ml-5 w-10 flex items-center justify-center cursor-ew-resize focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white/95 shadow-[0_0_6px_rgba(15,23,42,0.35)]" />
          <span className="relative w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-500 dark:text-slate-400 text-xs font-bold">
            <span aria-hidden="true">↔</span>
          </span>
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-2.5 text-center">
        Drag the handle — or focus it and use the arrow keys.
      </p>
    </div>
  );
}
