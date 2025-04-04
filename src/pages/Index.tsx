
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import ProcessSection from "@/components/ProcessSection";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Showcase />
        <ProcessSection />
        <FeatureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
