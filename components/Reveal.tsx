"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

/* Fade-and-lift a block as it scrolls into view — BOTH directions, every time.
 *
 * The observer is never disconnected, so a section re-animates whenever it
 * re-enters view, scrolling down or back up.
 *
 * Direction comes from the entry's own geometry rather than from tracking
 * scroll direction: if the block sits below the viewport it rises from below,
 * if it sits above it drops from above. That's self-correcting — it stays right
 * even after a jump-link, a resize, or a restored scroll position, where a
 * remembered "last scroll direction" would be stale.
 *
 * Three safety properties, unchanged:
 *  1. NO-JS SAFE — children render visible by default; the hidden state is only
 *     applied after mount, so content is never stranded invisible.
 *  2. NO FLASH — applied in useLayoutEffect, before the browser paints.
 *  3. REDUCED MOTION — bails out entirely, with a CSS override as backstop.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  /** ms — stagger siblings slightly, keep it under ~200 or it feels sluggish. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.gwReveal = "pending";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /** Which side of the viewport is it on? Below → rise up; above → drop down. */
    const setFrom = (node: HTMLElement) => {
      const from = node.getBoundingClientRect().top > 0 ? "14px" : "-14px";
      if (node.style.getPropertyValue("--gw-reveal-from") !== from) {
        node.style.setProperty("--gw-reveal-from", from);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const node = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          node.dataset.gwReveal = "in";
        } else {
          setFrom(node);
          node.dataset.gwReveal = "pending";
        }
      },
      /* A margin on both edges gives the toggle some hysteresis: a block has to
         be meaningfully inside the viewport to reveal, and meaningfully outside
         to reset, so it can't flicker while parked on the boundary. */
      { threshold: 0, rootMargin: "-8% 0px -8% 0px" },
    );
    observer.observe(el);

    /* The observer only fires when intersection CHANGES. An anchor jump or a
       back-to-top can take a block straight from below the viewport to above it
       without ever intersecting, so no callback runs and the direction goes
       stale — it would then drop in from the wrong side. This keeps the
       direction honest, rAF-throttled and only writing when the value changes. */
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (el.dataset.gwReveal === "pending") setFrom(el);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
