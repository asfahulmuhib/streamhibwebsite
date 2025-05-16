
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Sudah 3 minggu live nonstop, mantap banget!",
    author: "Ahmad K.",
    channel: "Music Therapy"
  },
  {
    quote: "Pernah pakai [kompetitor], 2 hari mati. Pindah ke StreamHib, lancar!",
    author: "Budi S.",
    channel: "Relax Zone"
  },
  {
    quote: "Cuma modal HP dan dashboard ini, live terus jalan.",
    author: "Dewi R.",
    channel: "ASMR Indonesia"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-streamhib-blue mb-4">Pengguna Sudah Membuktikan</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Bergabung dengan <span className="font-semibold">50+ channel YouTube</span> yang sudah menggunakan StreamHib untuk menjaga live streaming mereka tetap online 24/7.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 relative">
                <div className="absolute top-4 right-4 text-5xl text-streamhib-red/10 font-serif">"</div>
                <p className="text-lg text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="border-t border-gray-100 pt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-streamhib-blue/10 flex items-center justify-center text-streamhib-blue font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3 text-left">
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.channel}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
