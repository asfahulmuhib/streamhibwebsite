
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between z-10">
      <Logo />
      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden sm:flex border-streamhib-blue text-streamhib-blue hover:bg-streamhib-blue/5">
          Masuk
        </Button>
        <Button className="bg-streamhib-red hover:bg-streamhib-red/90 text-white">
          Daftar Sekarang
        </Button>
      </div>
    </header>
  );
};

export default Header;
