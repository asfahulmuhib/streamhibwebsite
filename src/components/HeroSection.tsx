
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Animated Waves Background */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-4 border-streamhib-blue/30 animate-pulse-light"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-4 border-streamhib-blue/20 animate-pulse-light" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-streamhib-blue/10 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Live Indicator */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 bg-black/80 text-white py-1 px-3 rounded-full">
        <div className="h-2 w-2 bg-red-500 rounded-full animate-live-dot"></div>
        <span className="text-xs font-semibold">LIVE</span>
      </div>

      <div className="max-w-[800px] mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-streamhib-blue mb-4 leading-tight">
          Live YouTube 24/7 <span className="text-streamhib-red">Tanpa Komputer</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          StreamHib bantu kamu live video nonstop, langsung dari server. 
          <span className="font-semibold block mt-2">Tanpa install, tanpa takut mati sendiri. Setting 1x, live terus!</span>
        </h2>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-streamhib-red hover:bg-streamhib-red/90 text-white font-semibold text-lg">
            🎬 Coba Gratis Sekarang
          </Button>
          <Button variant="outline" size="lg" className="border-streamhib-blue text-streamhib-blue hover:bg-streamhib-blue/5 font-semibold text-lg">
            🚀 Mulai Live Hari Ini
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
