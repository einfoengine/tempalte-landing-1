"use client";

import { useEffect, useRef } from "react";

/* Thin emerald reading-progress bar pinned under the navbar.
 *
 * Writes the width directly to the node inside a rAF — no state, so scrolling
 * never triggers a React render. Hidden entirely under reduced-motion and for
 * screen readers (it's decorative; the scrollbar already conveys position). */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      el.style.transform = `scaleX(${Math.min(Math.max(pct, 0), 100) / 100})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="sticky top-16 z-40 h-0.5 bg-transparent">
      <div
        ref={ref}
        className="h-full bg-linear-to-r from-orange-500 to-orange-400 origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
