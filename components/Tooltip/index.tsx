import { AnimatePresence, motion } from 'framer-motion';
import { FC, cloneElement } from 'react';
import { match } from 'ts-pattern';

import { useTooltip } from './useTooltip';

interface Props {
  className?: string;
  positionDistance?: number;
  position?: 'top' | 'bottom' | 'left' | 'right';
  onClick?: () => void;
  title: string;
  children: React.ReactElement;
}

export const Tooltip: FC<Props> = ({
  className,
  positionDistance = 11,
  children,
  title,
  onClick,
  position,
}) => {
  const { handleCloseTooltip, handleShowTooltip, showTooltip } =
    useTooltip(false);

  const positionClass = match(position)
    .with('top', () => `bottom-${positionDistance} right-0`)
    .with('bottom', () => `top-${positionDistance} right-0`)
    .with('left', () => `right-${positionDistance} top-0`)
    .with('right', () => `left-${positionDistance} top-0`)
    .otherwise(() => `bottom-${positionDistance} right-0`);

  return (
    <div
      className={`${className}`}
      onClick={onClick}
      data-tooltip-target={`${title}-tooltip`}
    >
      {cloneElement(children, {
        onMouseOver: handleShowTooltip,
        onMouseOut: handleCloseTooltip,
      })}
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            exit={{ opacity: 0 }}
            id={`${title}-tooltip`}
            role="tooltip"
            className={`tooltip z-50 ${positionClass}`}
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
