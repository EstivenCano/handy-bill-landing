import links from '../links.json';
import { NavItem } from './NavItem';
import NavList from './NavList';
import { NavbarBranding } from './NavbarBranding';

export const NavDesktop = () => {
  return (
    <>
      <NavbarBranding />
      <div
        className="ml-auto hidden w-full md:block md:w-auto"
        id="navbar-default"
      >
        <NavList />
      </div>
    </>
  );
};
