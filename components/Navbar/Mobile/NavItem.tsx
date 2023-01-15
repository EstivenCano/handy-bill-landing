import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const isActive = router.query['region'] === path.split('=')[1];
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
        {name}
      </Link>
    </motion.li>
  );
};
