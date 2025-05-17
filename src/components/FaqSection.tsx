import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Apakah harus install sesuatu?",
    answer: "Tidak. StreamHib berbasis web, bisa dibuka dari HP atau laptop."
  },
  {
    question: "Apa yang terjadi kalau internet saya mati?",
    answer: "Tidak masalah. Streaming jalan di server, bukan di perangkat kamu."
  },
  {
    question: "Bisa jadwal live otomatis?",
    answer: "Bisa. Tinggal atur jamnya, lalu sistem kami otomatis mulai/stopkan live."
  },
  {
    question: "Video-nya bisa di-loop?",
    answer: "Bisa. Kamu upload 1 video, akan terus diputar selama live aktif."
  },
  {
    question: "Bagaimana cara mulai streaming?",
    answer: "Cukup daftar, upload video kamu, atur jadwal (opsional), dan klik Start Streaming. Sistem kami akan otomatis menjalankan live streaming ke channel YouTube-mu."
  },
  {
    question: "Apakah ada batasan durasi live streaming?",
    answer: "Tidak ada batasan durasi. Kamu bisa live 24/7 tanpa henti selama akun berlangganan aktif."
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-streamhib-blue mb-12 text-center">
          Pertanyaan Umum
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-streamhib-blue/10">
              <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-streamhib-blue text-left py-3">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-left py-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
