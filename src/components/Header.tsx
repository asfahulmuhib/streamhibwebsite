
import React from 'react';
import Logo from './Logo';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const { language } = useLanguage();

  return (
    <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between z-10 sticky top-0 glass-effect">
      <Logo />
      
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {language === 'id' ? 'Home' : 'Home'}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#fitur">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {language === 'id' ? 'Fitur' : 'Features'}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#testimoni">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {language === 'id' ? 'Testimoni' : 'Testimonials'}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#pricing">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {language === 'id' ? 'Paket' : 'Pricing'}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
