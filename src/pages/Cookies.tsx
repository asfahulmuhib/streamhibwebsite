import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Cookies = () => {
  const { language } = useLanguage();

  const translations = {
    id: {
      title: 'Kebijakan Cookies',
      intro: 'StreamHib menggunakan Cookies untuk meningkatkan pengalaman Anda di situs kami:',
      usage: 'Penggunaan Cookies',
      usageText: 'Cookies digunakan untuk mengingat preferensi Anda, seperti pilihan bahasa, dan untuk analitik situs.',
      control: 'Kontrol Cookies',
      controlText: 'Anda dapat mengatur penggunaan Cookies melalui pengaturan browser Anda.'
    },
    en: {
      title: 'Cookies Policy',
      intro: 'StreamHib uses cookies to enhance your experience on our site:',
      usage: 'Cookies Usage',
      usageText: 'Cookies are used to remember your preferences, such as language settings, and for site analytics.',
      control: 'Cookies Control',
      controlText: 'You can manage cookies through your browser settings.'
    }
  };

  const t = translations[language] || translations.id;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-streamhib-blue text-center">
          {t.title}
        </h1>
        <p className="text-lg text-gray-600 text-center">
          {t.intro}
        </p>
        <div className="space-y-4 text-gray-600">
          <h2 className="text-xl font-semibold text-streamhib-blue">{t.usage}</h2>
          <p>{t.usageText}</p>
          <h2 className="text-xl font-semibold text-streamhib-blue">{t.control}</h2>
          <p>{t.controlText}</p>
        </div>
      </div>
    </section>
  );
};

export default Cookies;
