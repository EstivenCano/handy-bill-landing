import { MutableRefObject, useEffect, useMemo, useState } from 'react';

export const useIsInViewport = (ref: MutableRefObject<HTMLElement | null>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window !== 'undefined') {
      // Client side
      return new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      );
    }
  }, []);

  useEffect(() => {
    ref.current && observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
