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
    clipPath: 'circle(20px at 90px 30px)',
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
      className="absolute top-0 right-0 bottom-0 w-32 z-10 md:hidden"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 right-0 h-72 w-32 bg-foreground rounded-bl-2xl"
        variants={sidebar}
      />
      <NavList />
      <NavButton toggle={handleToggle} />
    </motion.div>
  );
};
