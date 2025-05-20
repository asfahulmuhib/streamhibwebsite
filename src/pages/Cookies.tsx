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
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-4">{t.intro}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.usage}</h2>
      <p className="mb-4">{t.usageText}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.control}</h2>
      <p className="mb-4">{t.controlText}</p>
    </div>
  );
};

export default Cookies;
