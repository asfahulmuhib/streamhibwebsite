
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Solusi Live Streaming 24/7 Tanpa Ribet, Tanpa Khawatir",
    description: "Komputer cepat panas. HP cepat rusak. Internet sering putus. StreamHib hadir sebagai server live streaming siap pakai — kamu tinggal upload video, atur jadwal, dan kami yang jaga supaya live-mu terus tayang. Bahkan saat kamu tidur."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Feature */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-streamhib-blue">
              {features[0].title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {features[0].description}
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 bg-gray-100 rounded-xl overflow-hidden">
            <div className="relative aspect-video bg-streamhib-blue/10 rounded-xl overflow-hidden border-2 border-streamhib-blue/20">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Dashboard UI Mockup */}
                <div className="w-[90%] h-[90%] bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Header */}
                  <div className="h-12 bg-streamhib-blue flex items-center px-4">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-white text-sm">StreamHib Dashboard</div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex h-[calc(100%-3rem)]">
                    {/* Sidebar */}
                    <div className="w-1/4 bg-gray-100 p-4">
                      <div className="h-8 w-full bg-white rounded mb-4 animate-pulse"></div>
                      <div className="h-6 w-full bg-white rounded mb-3 animate-pulse"></div>
                      <div className="h-6 w-full bg-white rounded mb-3 animate-pulse"></div>
                      <div className="h-6 w-full bg-white rounded mb-3 animate-pulse"></div>
                      <div className="h-6 w-full bg-white rounded mb-3 animate-pulse"></div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="w-3/4 p-4">
                      <div className="h-10 w-3/4 bg-gray-100 rounded mb-6 animate-pulse"></div>
                      <div className="flex gap-4 mb-6">
                        <div className="h-24 w-1/3 bg-gray-100 rounded animate-pulse"></div>
                        <div className="h-24 w-1/3 bg-gray-100 rounded animate-pulse"></div>
                        <div className="h-24 w-1/3 bg-gray-100 rounded animate-pulse"></div>
                      </div>
                      <div className="h-40 w-full bg-streamhib-red/20 rounded flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-streamhib-red flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <div className="h-8 w-1/4 rounded bg-streamhib-blue animate-pulse"></div>
                        <div className="h-8 w-1/4 rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs py-1 px-2 rounded flex items-center">
                <div className="h-1.5 w-1.5 bg-red-500 rounded-full animate-live-dot mr-1"></div>
                <span>LIVE</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Grid - Enhanced for better visibility */}
        <div className="relative">
          {/* Background elements for emphasis */}
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-br from-blue-100/50 to-purple-100/50 blur-3xl -z-10"></div>
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-blue-100/50 to-purple-100/50 blur-3xl -z-10"></div>
          
          {/* Main content */}
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl shadow-xl border border-white/60 p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-streamhib-blue mb-8 text-center relative">
              <span className="relative inline-block">
                Manfaat Utama
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-streamhib-red via-streamhib-light-blue to-streamhib-blue rounded-full"></div>
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Live langsung dari server, tanpa komputer",
                "Bisa diakses dari HP/laptop (web-based)",
                "Tidak pernah mati sendiri (stabil 24/7)",
                "Fitur jadwal otomatis, bisa live berkali-kali",
                "Cocok untuk ASMR, musik santai, hujan, dll",
                "Tidak perlu skill teknis — cukup klik & jalan"
              ].map((benefit, index) => (
                <Card key={index} className="border-none bg-gradient-to-br from-white/90 to-blue-50/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-streamhib-red to-streamhib-light-blue text-white flex items-center justify-center shadow-md">
                        <span className="text-lg">✓</span>
                      </div>
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
