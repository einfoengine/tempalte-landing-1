"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

/* Staggered reveal for a group of elements.
 *
 * Animates each DIRECT CHILD individually, one after another, instead of
 * sliding the whole block in as one lump.
 *
 * The stagger is done in CSS with nth-child delays, so this adds NO wrapper
 * element per child. That matters: wrapping every card in its own div would
 * break `gw-focus-grid > a` and put a non-grid element between a grid container
 * and its items. Give this component the grid classes and its children stay
 * real grid items.
 *
 * Same three safety properties as Reveal: visible without JS, no flash
 * (useLayoutEffect), and fully disabled under reduced motion. Fires in both
 * scroll directions, with the entry direction taken from live geometry.
 */
export default function RevealGroup({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Use "ul"/"ol" when the children are list items, so semantics survive. */
  as?: "div" | "ul" | "ol" | "dl";
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.gwStagger = "pending";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const setFrom = (node: HTMLElement) => {
      const from = node.getBoundingClientRect().top > 0 ? "16px" : "-16px";
      if (node.style.getPropertyValue("--gw-reveal-from") !== from) {
        node.style.setProperty("--gw-reveal-from", from);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const node = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          node.dataset.gwStagger = "in";
        } else {
          setFrom(node);
          node.dataset.gwStagger = "pending";
        }
      },
      { threshold: 0, rootMargin: "-6% 0px -6% 0px" },
    );
    observer.observe(el);

    /* IntersectionObserver only fires on CHANGE, so an anchor jump that takes a
       group from below the viewport to above it produces no callback and the
       direction goes stale. rAF-throttled, writes only when the value changes. */
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (el.dataset.gwStagger === "pending") setFrom(el);
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
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
