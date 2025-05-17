
import React from 'react';
import Logo from './Logo';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { language } = useLanguage();

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between z-10 sticky top-0 glass-effect">
      <Logo />
      
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <a href="#" onClick={(e) => scrollToSection('hero', e)}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {language === 'id' ? 'Home' : 'Home'}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#fitur" onClick={(e) => scrollToSection('fitur', e)}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {language === 'id' ? 'Fitur' : 'Features'}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#testimoni" onClick={(e) => scrollToSection('testimoni', e)}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {language === 'id' ? 'Testimoni' : 'Testimonials'}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#pricing" onClick={(e) => scrollToSection('pricing', e)}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {language === 'id' ? 'Paket' : 'Pricing'}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
