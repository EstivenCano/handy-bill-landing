import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const useMainLogo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setRotation((prevState) => prevState + 45);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [rotation, isInView]);

  return { rotation, ref, isInView };
};
