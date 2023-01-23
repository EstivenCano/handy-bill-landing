import { useCurrentSection } from 'hooks/useCurrentSection';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface Props {
  name: string;
  path: string;
}

export const NavItem: FC<Props> = ({ name, path }) => {
  const { t } = useTranslation();
  const currentSection = useCurrentSection((state) => state.currentSection);

  const isActive = currentSection === name;

  return (
    <li
      key={name}
      className={`nav-item font-bold hover:scale-105 transition-transform ease-linear ${
        isActive ? 'text-primary-700 dark:text-primary-400' : 'text-content'
      }`}
    >
      <Link href={path} aria-current="page">
        {t(`common:${name}`)}
      </Link>
    </li>
  );
};

export default NavItem;
