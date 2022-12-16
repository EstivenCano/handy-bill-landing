import { AnimatePresence, motion } from 'framer-motion';
import { FC, cloneElement } from 'react';
import { match } from 'ts-pattern';

import { useThemeContext } from '../../hooks/useTheme';
import { useTooltip } from './useTooltip';

interface Props {
  className?: string;
  positionDistance?: 1 | 2 | 3 | 4;
  position?: 'top' | 'bottom' | 'left' | 'right';
  onClick?: () => void;
  title: string;
  children: React.ReactElement;
}

export const Tooltip: FC<Props> = ({
  className,
  positionDistance = 1,
  children,
  title,
  onClick,
  position,
}) => {
  const { theme } = useThemeContext();
  const { handleCloseTooltip, handleShowTooltip, showTooltip } =
    useTooltip(false);

  const positionClass = match({
    position: position,
    distance: positionDistance,
  })
    .with({ position: 'top', distance: 1 }, () => `bottom-11 right-0`)
    .with({ position: 'top', distance: 2 }, () => `bottom-14 right-0`)
    .with({ position: 'top', distance: 3 }, () => `bottom-16 right-0`)
    .with({ position: 'top', distance: 4 }, () => `bottom-20 right-0`)
    .with({ position: 'bottom', distance: 1 }, () => `top-11 right-0`)
    .with({ position: 'bottom', distance: 2 }, () => `top-14 right-0`)
    .with({ position: 'bottom', distance: 3 }, () => `top-16 right-0`)
    .with({ position: 'bottom', distance: 4 }, () => `top-20 right-0`)
    .with({ position: 'left', distance: 1 }, () => `right-11 right-0`)
    .with({ position: 'left', distance: 2 }, () => `right-14 right-0`)
    .with({ position: 'left', distance: 3 }, () => `right-16 right-0`)
    .with({ position: 'left', distance: 4 }, () => `right-20 right-0`)
    .with({ position: 'right', distance: 1 }, () => `left-11 right-0`)
    .with({ position: 'right', distance: 2 }, () => `left-14 right-0`)
    .with({ position: 'right', distance: 3 }, () => `left-16 right-0`)
    .with({ position: 'right', distance: 4 }, () => `left-20 right-0`)
    .otherwise(() => `bottom-11 right-0`);

  return (
    <div
      className={`${className}`}
      onClick={onClick}
      data-tooltip-target={`${title}-tooltip`}
      data-tooltip-placement={position}
    >
      <div className="relative">
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
              className={`tooltip z-50 ${positionClass} ${match(theme)
                .with('dark', () => 'text-primary')
                .otherwise(() => null)}`}
            >
              {title}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
