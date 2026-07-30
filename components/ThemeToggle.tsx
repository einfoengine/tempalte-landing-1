"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";

/* Light / dark / system switcher.
 *
 * `system` is the default and a real option, not just an initial value — a lot
 * of people set their OS to switch at sunset and expect sites to follow.
 *
 * The <html> class is applied by the inline script in layout.tsx BEFORE first
 * paint; this component only reads and updates it. Keep the two in sync if the
 * storage key or class name ever changes. */
const KEY = "gw-theme";

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function apply(mode: Mode) {
  const dark = mode === "dark" || (mode === "system" && systemPrefersDark());
  document.documentElement.classList.toggle("dark", dark);
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as Mode | null) ?? "system";
    setMode(stored);
    setMounted(true);

    // Follow the OS while in system mode.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem(KEY) as Mode | null) ?? "system") {
        const current = (localStorage.getItem(KEY) as Mode | null) ?? "system";
        if (current === "system") apply("system");
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const choose = (next: Mode) => {
    setMode(next);
    localStorage.setItem(KEY, next);
    apply(next);
  };

  // Cycle light → dark → system so the control stays a single compact button.
  const next: Mode = mode === "light" ? "dark" : mode === "dark" ? "system" : "light";
  const label =
    mode === "light" ? "Light" : mode === "dark" ? "Dark" : "System";

  return (
    <button
      type="button"
      onClick={() => choose(next)}
      aria-label={`Theme: ${label}. Switch to ${next}.`}
      title={`Theme: ${label} — click for ${next}`}
      className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      {/* Render nothing until mounted: the stored preference isn't known during
          SSR, so committing to an icon would guarantee a hydration mismatch. */}
      {!mounted ? (
        <span className="w-4 h-4" aria-hidden="true" />
      ) : mode === "light" ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : mode === "dark" ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path strokeLinecap="round" d="M8 20h8" />
        </svg>
      )}
    </button>
  );
}
