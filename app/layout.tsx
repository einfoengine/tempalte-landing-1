import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  /* Theme pages set relative openGraph images, which need an absolute base to
     resolve. Set NEXT_PUBLIC_SITE_URL in the deploy env or share links will
     point at localhost. */
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "ghlsaastheme — Launch-Ready SaaS Websites for HighLevel Agencies",
  description:
    "Conversion-ready website templates for HighLevel SaaS agencies. Pick one — we build your website from it in your brand, wire your GoHighLevel, and support it free for 4 months. Not a file. A finished website.",
  openGraph: {
    title: "ghlsaastheme — Launch-Ready SaaS Websites for HighLevel Agencies",
    description:
      "Pick a template. We build your website from it in your brand, wire your GHL embeds, and launch it — with 4 months of technical support free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint so a dark-mode visitor never sees a white
            flash. Must stay in sync with ThemeToggle (same key, same class).
            Wrapped in try/catch because localStorage throws in some privacy
            modes — a failure here should fall back to light, not blank the page. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var m=localStorage.getItem('gw-theme')||'system';var d=m==='dark'||(m==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
