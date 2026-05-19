import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhatYouGet from "@/components/WhatYouGet";
import TemplateFeatures from "@/components/TemplateFeatures";
import KeySections from "@/components/KeySections";
import ForWhom from "@/components/ForWhom";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <ProblemSection />
        <SolutionSection />
        <WhatYouGet />
        <TemplateFeatures />
        <KeySections />
        <ForWhom />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
