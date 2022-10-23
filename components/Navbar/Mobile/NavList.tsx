import { motion } from 'framer-motion';

import { useLinks } from '../useLinks';
import { NavItem } from './NavItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const NavList = () => {
  const links = useLinks();
  return (
    <motion.ul variants={variants} className="p-5 absolute top-8 w-10">
      {links.map((link) => (
        <NavItem key={link.name} {...link} />
      ))}
    </motion.ul>
  );
};
