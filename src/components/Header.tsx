import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between z-10">
      <Logo />
    </header>
  );
};

export default Header;
