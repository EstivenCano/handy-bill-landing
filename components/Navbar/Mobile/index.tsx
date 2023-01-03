import { motion } from 'framer-motion';
import * as React from 'react';

import { useComponentVisible } from '../../../hooks/useComponentVisible';
import { useDimensions } from '../../../hooks/useDimensions';
import { NavButton } from './NavButton';
import { NavList } from './NavList';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 100,
      restDelta: 2,
    },
    height: '270px',
  }),
  closed: {
    clipPath: 'circle(18px at 29px 18px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: {
      height: '35px',
    },
  },
};

export const NavMenu = () => {
  const { isComponentVisible, ref, setIsComponentVisible } =
    useComponentVisible(false);
  const { height } = useDimensions(ref);

  const handleToggle = () => {
    setIsComponentVisible((prevState) => !prevState);
  };

  return (
    <motion.div
      className="fixed w-32 z-10 md:hidden"
      initial={false}
      animate={isComponentVisible ? 'open' : 'closed'}
      custom={height}
      ref={ref}
    >
      <motion.div className="bg-foreground rounded-br-2xl" variants={sidebar} />
      <NavList />
      <NavButton toggle={handleToggle} />
    </motion.div>
  );
};
