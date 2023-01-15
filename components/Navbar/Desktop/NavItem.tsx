import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface Props {
  name: string;
  path: string;
}

export const NavItem: FC<Props> = ({ name, path }) => {
  const router = useRouter();
  const isActive = router.query['region'] === path.split('=')[1];

  return (
    <li
      key={name}
      className={`nav-item font-bold hover:scale-105 transition-transform ease-linear ${
        isActive ? 'text-primary-700 dark:text-primary-400' : 'text-content'
      }`}
    >
      <Link href={path} aria-current="page">
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
