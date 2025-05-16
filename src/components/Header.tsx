
import React from 'react';
import Logo from './Logo';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between z-10 sticky top-0 glass-effect">
      <Logo />
      
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#fitur">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Fitur
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#testimoni">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Testimoni
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#pricing">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Paket
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
