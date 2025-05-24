import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const RenewalSuccessfull: React.FC = () => {
  const { language } = useLanguage();
  const [isAgreed, setIsAgreed] = useState(false); // State untuk checkbox

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285722165165?text=Halo%20kak%2C%20saya%20sudah%20perpanjang%20paket%20di%20StreamHib%2C%20bisa%20segera%20diperbarui%20servernya%3F", "_blank", "noopener,noreferrer");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/streamhib", "_blank", "noopener,noreferrer");
  };

  const translations = {
    id: {
      title: 'Terimakasih Sudah Memperpanjang!',
      message: 'Perpanjangan layanan Anda sudah kami terima. Silakan setujui Syarat dan Ketentuan kami sebelum menghubungi untuk konfirmasi.',
      checkboxLabel: 'Saya setuju dengan ',
      termsLink: 'Syarat dan Ketentuan',
      buttonWhatsApp: 'Hubungi via WhatsApp',
      buttonTelegram: 'Hubungi via Telegram',
    },
    en: {
      title: 'Thank You for Renewing!',
      message: 'We have received your renewal request. Please agree to our Terms and Conditions before contacting us for server updates.',
      checkboxLabel: 'I agree to the ',
      termsLink: 'Terms and Conditions',
      buttonWhatsApp: 'Contact via WhatsApp',
      buttonTelegram: 'Contact via Telegram',
    },
  } as const;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-16">
      <div className="max-w-md mx-auto text-center space-y-6 animate-fade-in">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold text-streamhib-blue">
          {translations[language].title}
        </h1>
        <p className="text-lg text-gray-600">
          {translations[language].message}
        </p>
        <div className="flex items-center justify-center space-x-2">
          <input
            type="checkbox"
            id="terms-agreement"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="h-5 w-5 text-streamhib-blue border-gray-300 rounded focus:ring-streamhib-blue"
          />
          <label htmlFor="terms-agreement" className="text-gray-600">
            {translations[language].checkboxLabel}
            <Link to="/terms" className="text-streamhib-blue hover:underline">
              {translations[language].termsLink}
            </Link>
          </label>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={handleWhatsAppClick}
            disabled={!isAgreed}
            className={`${
              isAgreed ? 'bg-[#25D366] hover:bg-[#128C7E]' : 'bg-gray-300 cursor-not-allowed'
            } text-white font-semibold text-lg`}
          >
            {translations[language].buttonWhatsApp}
          </Button>
          <Button
            onClick={handleTelegramClick}
            disabled={!isAgreed}
            className={`${
              isAgreed ? 'bg-[#1E90FF] hover:bg-[#147BC9]' : 'bg-gray-300 cursor-not-allowed'
            } text-white font-semibold text-lg`}
          >
            {translations[language].buttonTelegram}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RenewalSuccessfull;
