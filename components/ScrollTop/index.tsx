import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { Tooltip } from '../Tooltip';

interface Props {
  show: boolean;
}

export const ScrollTop: FC<Props> = ({ show }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const scrollToTop = () => {
    router.replace('/?region=home');
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <Tooltip
            position="top"
            title={t('common:scrollToTop')}
            className="fixed z-30 bottom-3 right-3"
          >
            <motion.button
              aria-label="Go to home"
              onClick={scrollToTop}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              className=" button-primary p-2 rounded-full w-9 h-9 z-10"
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
          </Tooltip>
        </>
      )}
    </AnimatePresence>
  );
};
