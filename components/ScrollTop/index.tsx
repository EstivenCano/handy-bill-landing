import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import type { FC } from 'react';

import { useScrollTop } from './useScrollTop';

interface Props {
  show: boolean;
}

export const ScrollTop: FC<Props> = ({ show }) => {
  const { handleCloseTooltip, handleShowTooltip, showTooltip, t } =
    useScrollTop(show);

  return (
    <AnimatePresence>
      {show && (
        <>
          <Link
            data-tooltip-target="scroll-top-tooltip"
            href={'/#home'}
            about="Go to home"
          >
            <motion.button
              aria-label="Go to home"
              onMouseOver={handleShowTooltip}
              onMouseOut={handleCloseTooltip}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              className="fixed bottom-3 right-3 p-2 button-primary rounded-full w-9 h-9"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </Link>
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: showTooltip ? 1 : 0,
            }}
            transition={{
              duration: 0.02,
            }}
            exit={{ opacity: 0 }}
            id="scroll-top-tooltip"
            role="tooltip"
            className="fixed bottom-16 right-3 tooltip"
          >
            {t('common:scrollToTop')}
          </motion.span>
        </>
      )}
    </AnimatePresence>
  );
};
