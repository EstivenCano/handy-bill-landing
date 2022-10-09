import { motion, useCycle } from 'framer-motion';
import * as React from 'react';
import { useRef } from 'react';

import { useDimensions } from '../../../hooks/useDimensions';
import { NavButton } from './NavButton';
import { NavList } from './NavList';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(18px at 29px 18px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const NavMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleToggle = () => {
    toggleOpen();
  };

  return (
    <motion.div
      className="w-32 z-10 md:hidden"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="h-72 w-32 bg-foreground rounded-br-2xl"
        variants={sidebar}
      />
      <NavList />
      <NavButton toggle={handleToggle} />
    </motion.div>
  );
};
