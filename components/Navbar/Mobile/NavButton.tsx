import { SVGMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    className="stroke-content"
    fill="content"
    strokeWidth={1.5}
    strokeLinecap="round"
    {...props}
  />
);

export const NavButton: FC<{ toggle: () => void }> = ({ toggle }) => (
  <button
    aria-label="main-menu"
    className="outline-none border-none cursor-pointer absolute top-1.5 left-5 w-5 h-5 border-r-2 bg-transparent"
    onClick={toggle}
  >
    <svg width="18" height="24" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
