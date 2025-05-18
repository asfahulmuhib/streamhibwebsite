import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

const PaymentSuccessfull: React.FC = () => {
  const { language } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285722165165?text=Halo%20kak%2C%20saya%20sudah%20order%20paket%20di%20StreamHib%2C%20bisa%20segera%20dibuatkan%20servernya%3F", "_blank", "noopener,noreferrer");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/streamhib", "_blank", "noopener,noreferrer");
  };

  const translations = {
    id: {
      title: 'Terimakasih Sudah Order!',
      message: 'Permintaan Anda sudah kami terima. Silakan hubungi kami melalui WhatsApp atau Telegram untuk segera dibuatkan server.',
      buttonWhatsApp: 'Hubungi via WhatsApp',
      buttonTelegram: 'Hubungi via Telegram',
    },
    en: {
      title: 'Thank You for Your Order!',
      message: 'We have received your request. Please contact us via WhatsApp or Telegram to have your server set up immediately.',
      buttonWhatsApp: 'Contact via WhatsApp',
      buttonTelegram: 'Contact via Telegram',
    },
  } as const;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-16">
      <div className="max-w-md mx-auto text-center space-y-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold text-streamhib-blue">
          {translations[language].title}
        </h1>
        <p className="text-lg text-gray-600">
          {translations[language].message}
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-lg"
          >
            {translations[language].buttonWhatsApp}
          </Button>
          <Button
            onClick={handleTelegramClick}
            className="bg-[#1E90FF] hover:bg-[#147BC9] text-white font-semibold text-lg"
          >
            {translations[language].buttonTelegram}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccessfull;
