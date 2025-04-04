
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Marketplace from "@/components/Marketplace";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Plans />
        <Marketplace />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
