
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

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-streamhib-blue/5 via-blue-50/50 to-streamhib-red/5">
      <Header />
      <main>
        <HeroSection />
        <section id="fitur">
          <FeatureSection />
        </section>
        <section id="testimoni">
          <TestimonialsSection language={language} />
        </section>
        <section id="pricing">
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
