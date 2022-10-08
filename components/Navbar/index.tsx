import Image from 'next/image';
import Link from 'next/link';

import { ToggleTheme } from '../ToggleTheme';
import { NavDesktop } from './Desktop';
import { NavMenu } from './Mobile';
import { NavbarBranding } from './NavbarBranding';

export const Navbar = () => {
  return (
    <nav className="px-2 rounded w-full py-2">
      <div className="container flex justify-between items-center mx-auto">
        <NavbarBranding />
        <ToggleTheme />
        <NavDesktop />
        <NavMenu />
      </div>
    </nav>
  );
};
