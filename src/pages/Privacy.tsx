import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  const translations = {
    id: {
      title: 'Kebijakan Privasi',
      intro: 'StreamHib menghormati privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengelola data pribadi Anda:',
      data: 'Pengumpulan Data',
      dataText: 'Kami mengumpulkan data yang Anda berikan saat mendaftar, seperti nama, nomor HP, email, dan informasi pembayaran.',
      usage: 'Penggunaan Data',
      usageText: 'Data Anda digunakan untuk menyediakan layanan, memproses pembayaran, dan berkomunikasi dengan Anda.',
      sharing: 'Pembagian Data',
      sharingText: 'Kami tidak membagikan data Anda kecuali diwajibkan oleh hukum atau untuk keperluan investigasi resmi.'
    },
    en: {
      title: 'Privacy Policy',
      intro: 'StreamHib respects your privacy. This policy explains how we handle your personal data:',
      data: 'Data Collection',
      dataText: 'We collect data you provide during registration, such as your name, ohone number, email, and payment information.',
      usage: 'Data Usage',
      usageText: 'Your data is used to provide services, process payments, and communicate with you.',
      sharing: 'Data Sharing',
      sharingText: 'We do not share your data unless required by law or for official investigations.'
    }
  };

  const t = translations[language] || translations.id;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-4">{t.intro}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.data}</h2>
      <p className="mb-4">{t.dataText}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.usage}</h2>
      <p className="mb-4">{t.usageText}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.sharing}</h2>
      <p className="mb-4">{t.sharingText}</p>
    </div>
  );
};

export default Privacy;
