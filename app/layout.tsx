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
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PureSaaS - The Conversion-Ready Website Template for GHL SaaS Sellers",
  description:
    "Stop losing deals to a generic website. PureSaaS is a premium 11-page Next.js template built for GoHighLevel white-label SaaS sellers - launch a professional marketing site in days.",
  openGraph: {
    title: "PureSaaS - The Website Template Built for GHL SaaS Sellers",
    description:
      "11 pages, 67+ components, 4 design themes. Engineered around the conversion logic of selling a GHL-powered SaaS. One-time purchase. Instant access.",
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
