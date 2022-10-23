import React from 'react';

import { useLinks } from '../useLinks';
import NavItem from './NavItem';

export const NavList = () => {
  const links = useLinks();
  return (
    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
      {links.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default NavList;
