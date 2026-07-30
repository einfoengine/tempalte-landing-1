"use client";

import { useRef } from "react";

/* 3D magnetic card: tilts toward the cursor and carries an emerald spotlight.
 *
 * Takes `children` so the card itself stays a SERVER component — only this thin
 * wrapper ships to the browser.
 *
 * Writes CSS custom properties and the transform directly on the node rather
 * than going through React state: a pointermove setState would re-render on
 * every mouse frame. This touches style props and never re-renders.
 *
 * Deliberately restrained: MAX_TILT is 6°, because anything steeper makes the
 * cover screenshot look warped and blurs the text on it — the card is showing a
 * product photo, not being a toy. */
const MAX_TILT = 6;

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useRef(true);

  // Fine pointer + motion allowed only. On touch there is no hover to tilt
  // toward, and a tilt that sticks after a tap reads as a rendering bug.
  const check = () => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    enabled.current = check();
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    // Spotlight follows the cursor in both cases.
    el.style.setProperty("--gw-x", `${x}px`);
    el.style.setProperty("--gw-y", `${y}px`);

    if (!enabled.current) return;
    // -1..1 from centre, then inverted on X so the card leans *into* the cursor.
    const px = (x / r.width - 0.5) * 2;
    const py = (y / r.height - 0.5) * 2;
    el.style.transform = `perspective(900px) rotateX(${(-py * MAX_TILT).toFixed(2)}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg) scale(1.015)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onBlur={reset}
      className={`gw-spotlight gw-tilt relative rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
