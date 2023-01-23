import { useCurrentSection } from '@/hooks/useCurrentSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import type { FC } from 'react';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    display: 'block',
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

export const NavItem: FC<{ path: string; name: string }> = ({ path, name }) => {
  const { t } = useTranslation();
  const currentSection = useCurrentSection((state) => state.currentSection);

  const isActive = currentSection === name;

  return (
    <motion.li
      className={`text-base font-bold my-3 before:border-l-2 before:mr-2 before:border-l-primary-700 ${
        isActive ? 'text-primary-700 dark:text-primary-400' : 'text-content'
      }`}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={path} aria-current="page">
        {t(`common:${name}`)}
      </Link>
    </motion.li>
  );
};
