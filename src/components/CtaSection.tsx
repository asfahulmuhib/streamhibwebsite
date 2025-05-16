
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 px-4 bg-streamhib-blue text-white relative overflow-hidden">
      {/* Visual elements in the background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full bg-white/10"></div>
        
        <div className="absolute top-1/4 left-1/6 h-1 w-16 bg-streamhib-red rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/6 h-1 w-16 bg-streamhib-red -rotate-45"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Untuk Live Streaming 24/7?
        </h2>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Tanpa perlu khawatir tentang koneksi internet atau perangkat yang panas.
          <br />Biarkan StreamHib yang bekerja untuk kamu.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-streamhib-red hover:bg-streamhib-red/90 text-white font-semibold text-lg">
            🎬 Coba Gratis Sekarang
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 font-semibold text-lg">
            🚀 Lihat Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
