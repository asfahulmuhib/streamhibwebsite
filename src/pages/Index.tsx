
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50/80 via-white to-blue-50/50">
      <Header />
      <main className="w-full">
        <HeroSection />
        <section id="fitur" className="w-full bg-gradient-cool">
          <FeatureSection />
        </section>
        <Separator className="h-px bg-gray-100" />
        <section id="testimoni" className="w-full">
          <TestimonialsSection />
        </section>
        <Separator className="h-px bg-gray-100" />
        <section id="pricing" className="w-full bg-gradient-modern">
          <PricingSection />
        </section>
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
