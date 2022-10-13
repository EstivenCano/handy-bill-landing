import React, { FC } from 'react';
import Link from 'next/link'

interface Props {
  name: string;
  path: string;
}

export const NavItem: FC<Props> = ({ name, path }) => {
  return (
    <li key={name} className="nav-item font-bold hover:scale-105">
      <Link href={path} aria-current="page">
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
