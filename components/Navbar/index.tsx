import { ToggleTheme } from '../ToggleTheme';
import { NavDesktop } from './Desktop';
import { NavMenu } from './Mobile';

export const Navbar = () => {
  return (
    <nav className="px-2 rounded w-full py-2 flex justify-between fixed z-40 bg-background/90 shadow-md shadow-content/5">
      <NavMenu />
      <NavDesktop />
      <ToggleTheme />
    </nav>
  );
};
