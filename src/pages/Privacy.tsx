import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  const translations = {
    id: {
      title: 'Kebijakan Privasi',
      intro: 'StreamHib menghormati privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengelola data pribadi Anda:',
      data: 'Pengumpulan Data',
      dataText: 'Kami mengumpulkan data yang Anda berikan saat mendaftar, seperti nama, email, dan informasi pembayaran.',
      usage: 'Penggunaan Data',
      usageText: 'Data Anda digunakan untuk menyediakan layanan, memproses pembayaran, dan berkomunikasi dengan Anda.',
      sharing: 'Pembagian Data',
      sharingText: 'Kami tidak membagikan data Anda kecuali diwajibkan oleh hukum atau untuk keperluan investigasi resmi.'
    },
    en: {
      title: 'Privacy Policy',
      intro: 'StreamHib respects your privacy. This policy explains how we handle your personal data:',
      data: 'Data Collection',
      dataText: 'We collect data you provide during registration, such as your name, email, and payment information.',
      usage: 'Data Usage',
      usageText: 'Your data is used to provide services, process payments, and communicate with you.',
      sharing: 'Data Sharing',
      sharingText: 'We do not share your data unless required by law or for official investigations.'
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
          <h2 className="text-xl font-semibold text-streamhib-blue">{t.data}</h2>
          <p>{t.dataText}</p>
          <h2 className="text-xl font-semibold text-streamhib-blue">{t.usage}</h2>
          <p>{t.usageText}</p>
          <h2 className="text-xl font-semibold text-streamhib-blue">{t.sharing}</h2>
          <p>{t.sharingText}</p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
