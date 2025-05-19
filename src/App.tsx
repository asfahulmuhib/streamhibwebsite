import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import PaymentSuccessful from './pages/PaymentSuccessful';

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/paymentsuccessfull" element={<PaymentSuccessful />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
