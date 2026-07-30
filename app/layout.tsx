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
    "Conversion-ready website templates for HighLevel SaaS agencies — a proven content system inside, customized by our team, live in 5–7 days, maintained after launch. Not a file. A launch.",
  openGraph: {
    title: "ghlsaastheme — Launch-Ready SaaS Websites for HighLevel Agencies",
    description:
      "Pick a template. We brand it, wire your GHL embeds, and launch it — then keep it maintained. Template + customization + maintenance, from $497 launched.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
