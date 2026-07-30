import type { MetadataRoute } from "next";
import { TEMPLATES } from "@/lib/templates";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/* Generated from the catalog — shipping a template adds it automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/templates", priority: 0.9, freq: "weekly" },
    { path: "/packages", priority: 0.9, freq: "monthly" },
    { path: "/how-it-works", priority: 0.7, freq: "monthly" },
    { path: "/work", priority: 0.7, freq: "monthly" },
    { path: "/start", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.6, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "monthly" },
    { path: "/terms", priority: 0.3, freq: "monthly" },
    { path: "/refund-policy", priority: 0.3, freq: "monthly" },
  ];

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    ...pages.map((p) => ({ url: `${BASE}${p.path}`, changeFrequency: p.freq, priority: p.priority })),
    ...TEMPLATES.map((t) => ({
      url: `${BASE}/templates/${t.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
