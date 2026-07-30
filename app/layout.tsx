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
  title: "Theme Club - Premium GoHighLevel Themes, One Membership",
  description:
    "Every theme, funnel and snapshot your GHL agency needs, in one membership. Engineered for GoHighLevel agencies and SaaS resellers, with new drops every month.",
  openGraph: {
    title: "Theme Club - Premium GoHighLevel Themes, One Membership",
    description:
      "One membership. Every theme, funnel and snapshot - built for GoHighLevel agencies and SaaS resellers. New drops monthly, full source included.",
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
