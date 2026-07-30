import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import HotThemes from "@/components/HotThemes";
import ThemeGrid from "@/components/ThemeGrid";
import HowItWorks from "@/components/HowItWorks";
import TemplateFeatures from "@/components/TemplateFeatures";
import ForWhom from "@/components/ForWhom";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

/* Done-for-you order: what it is → why it matters → the menu → how the build
 * works → quality → who it's for → proof → price → objections → close.
 *
 * Deliberately NOT mounted (files still on disk):
 * - Testimonials — presents named people, named companies and specific metrics
 *   as "real feedback", but this product has no customer history yet. Publishing
 *   invented endorsements is a legal exposure, not just a taste problem. Re-add
 *   once the quotes are real and consented to, rewritten for the built-for-you
 *   model ("deployed PureSaaS" no longer describes what a customer does).
 * - WhatYouGet / KeySections — PureSaaS's own spec sheet (11 pages, 67+
 *   components, its 18 home sections). That's theme-detail content, not
 *   club-level. Belongs on /themes/puresaas.
 * - ProblemSection / SolutionSection — single-template funnel copy.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <HotThemes />
        <ThemeGrid />
        <HowItWorks />
        <TemplateFeatures />
        <ForWhom />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
