import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Terms = () => {
  const { language } = useLanguage();

  const translations = {
    id: {
      title: 'Syarat dan Ketentuan',
      welcome: 'Selamat datang di StreamHib. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat berikut:',
      usage: 'Penggunaan yang Dilarang',
      usageText: 'Pengguna dilarang menggunakan layanan untuk aktivitas ilegal, termasuk perjudian online, penyebaran konten ilegal, atau aktivitas yang merugikan pihak lain.',
      responsibility: 'Tanggung Jawab Pengguna',
      responsibilityText: 'Pengguna bertanggung jawab penuh atas semua aktivitas yang dilakukan menggunakan layanan StreamHib. StreamHib tidak bertanggung jawab atas pelanggaran hukum yang dilakukan oleh pengguna.',
      termination: 'Hak Penghentian Layanan',
      terminationText: 'StreamHib berhak menghentikan layanan tanpa pemberitahuan jika pengguna terdeteksi melanggar Syarat dan Ketentuan ini.',
      law: 'Hukum yang Berlaku',
      lawText: 'Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia.'
    },
    en: {
      title: 'Terms and Conditions',
      welcome: 'Welcome to StreamHib. By using our services, you agree to comply with the following terms:',
      usage: 'Prohibited Use',
      usageText: 'Users are prohibited from using the service for illegal activities, including online gambling, distribution of illegal content, or activities that harm others.',
      responsibility: 'User Responsibility',
      responsibilityText: 'Users are fully responsible for all activities conducted using StreamHib services. StreamHib is not liable for any legal violations committed by users.',
      termination: 'Right to Terminate Service',
      terminationText: 'StreamHib reserves the right to terminate service without notice if a user is found to violate these Terms and Conditions.',
      law: 'Governing Law',
      lawText: 'These Terms and Conditions are governed by the laws of the Republic of Indonesia.'
    }
  };

  const t = translations[language] || translations.id;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-4">{t.welcome}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.usage}</h2>
      <p className="mb-4">{t.usageText}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.responsibility}</h2>
      <p className="mb-4">{t.responsibilityText}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.termination}</h2>
      <p className="mb-4">{t.terminationText}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{t.law}</h2>
      <p className="mb-4">{t.lawText}</p>
    </div>
  );
};

export default Terms;
