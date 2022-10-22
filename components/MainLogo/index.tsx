import { LazyMotion, domAnimation, m } from 'framer-motion';

import { useMainLogo } from './useMainLogo';

export const MainLogo = () => {
  const { rotation, ref } = useMainLogo();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        data-testid="main-container"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: rotation }}
        transition={{ duration: 2, type: 'spring' }}
        className="flex relative md:w-96 md:h-96 w-80 h-80 shadow-2xl shadow-primary/20 rounded-full"
      >
        <m.div
          initial={{ rotate: -45 }}
          animate={{ rotate: -45 }}
          className="main-rectangle w-16 h-16 md:w-20 md:h-20 top-0 bottom-0 left-0 right-0 m-auto"
        />
        <m.div
          initial={{ y: 0, rotate: -45 }}
          animate={{ y: -10, rotate: -45 }}
          transition={{
            delay: 3,
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="dark-rentangle-1 w-16 h-16 md:w-20 md:h-20 md:bottom-28 md:right-28 bottom-24 right-24 top-0 left-0  m-auto"
        />
        <m.div
          initial={{ x: 0, rotate: -45 }}
          animate={{ x: -10, rotate: -45 }}
          transition={{
            delay: 0,
            duration: 5,
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="dark-rentangle-2 w-16 h-16 md:w-20 md:h-20 md:right-56 top-0 bottom-0 left-0 right-48 m-auto"
        />
        <m.div
          initial={{ y: 0, rotate: -45 }}
          animate={{ y: 10, rotate: -45 }}
          transition={{
            delay: 1.5,
            duration: 5,
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="dark-rentangle-3 w-16 h-16 md:w-20 md:h-20 md:top-28 md:right-28 top-24 right-24 bottom-0 left-0  m-auto"
        />
        <m.div
          initial={{ y: 0, rotate: 135 }}
          animate={{ y: -10, rotate: 135 }}
          transition={{
            delay: 1.5,
            duration: 5,
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="light-rentangle-1 w-16 h-16 md:w-20 md:h-20 md:bottom-28 md:left-28 bottom-24 left-24 top-0 right-0 m-auto"
        />
        <m.div
          initial={{ x: 0, rotate: -45 }}
          animate={{ x: 10, rotate: -45 }}
          transition={{
            delay: 0,
            duration: 5,
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="light-rentangle-2 w-16 h-16 md:w-20 md:h-20 md:left-56 top-0 bottom-0 left-48 right-0 m-auto"
        />
        <m.div
          initial={{ y: 0, rotate: 135 }}
          animate={{ y: 10, rotate: 135 }}
          transition={{
            delay: 3,
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="light-rentangle-3 w-16 h-16 md:w-20 md:h-20 md:top-28 md:left-28 top-24 left-24 bottom-0 right-0 m-auto"
        />
      </m.div>
    </LazyMotion>
  );
};
