import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const handleTryNowClick = () => {
    window.open("http://emuhib.com", "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285722165165?text=Kak%20aku%20ingin%20pesan%20streamhib%2C%20transfer%20kemana%3F", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-blue-50/50 to-white/80 -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-4 border-streamhib-blue/20 animate-pulse-light"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-4 border-streamhib-blue/10 animate-pulse-light" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-streamhib-red/10 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20 -z-5"></div>
      
      {/* Live Indicator */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 bg-black/80 text-white py-1 px-3 rounded-full">
        <div className="h-2 w-2 bg-red-500 rounded-full animate-live-dot"></div>
        <span className="text-xs font-semibold">LIVE</span>
      </div>

      <div className="max-w-[800px] mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          <span className="text-xl md:text-2xl font-semibold block mb-2 text-gradient">Bikin Live Jadi Cuan</span>
          <span className="text-gradient">Live YouTube 24/7</span> <span className="text-streamhib-red">Tanpa Komputer</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          StreamHib bantu kamu live video nonstop, langsung dari server. 
          <span className="font-semibold block mt-2">Tanpa install, tanpa takut mati sendiri. Setting 1x, live terus!</span>
        </h2>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleTryNowClick}
            size="lg"
            className="bg-streamhib-red hover:bg-streamhib-red/90 text-white font-semibold text-lg"
          >
            <Play className="h-5 w-5 mr-2" /> Coba Gratis Sekarang
          </Button>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-lg shadow-sm"
          >
            <MessageCircle className="h-5 w-5 mr-2" /> Pesan Via Whatsapp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
