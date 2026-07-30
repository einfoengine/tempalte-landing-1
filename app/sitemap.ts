import type { MetadataRoute } from "next";
import { THEMES } from "@/lib/themes";
import { NICHES } from "@/lib/niches";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/* Generated from the catalog, so shipping a theme or a niche adds it to the
   sitemap automatically — nothing to remember, nothing to drift. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/start`, changeFrequency: "monthly", priority: 0.9 },
    // Niche pages are the SEO surface — rank them above individual themes.
    ...NICHES.map((niche) => ({
      url: `${BASE}/niches/${niche.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...THEMES.map((theme) => ({
      url: `${BASE}/themes/${theme.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
