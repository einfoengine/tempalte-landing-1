"use client";

import { useState } from "react";

/* "New themes every month" is the club's retention hook, so the footer is the
   natural place to capture intent for it.

   Deliberately NOT a fake newsletter box: with no ESP wired up, a normal form
   would swallow addresses silently. This opens the visitor's mail client with
   their address prefilled, so the signup actually reaches a real inbox. Swap
   this for a real ESP/GHL form post when one exists — the mailto is the honest
   stopgap, not the destination. */
export default function FooterSignup() {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const address = email.trim();
    if (!address) return;
    const subject = encodeURIComponent("Notify me about new theme drops");
    const body = encodeURIComponent(`Please add me to the new-drop list: ${address}`);
    window.location.href = `mailto:hello@growx.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submit} className="mt-5">
      <label htmlFor="footer-drop-email" className="block text-sm font-semibold text-slate-200 mb-1">
        The drop list
      </label>
      <p className="text-xs text-slate-400 mb-3">
        One email per new template. That&apos;s the list.
      </p>
      <div className="flex gap-2 max-w-sm">
        <input
          id="footer-drop-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@agency.com"
          className="flex-1 min-w-0 rounded-full bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 focus:border-slate-600"
        />
        <button
          type="submit"
          className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Notify me
        </button>
      </div>
    </form>
  );
}
