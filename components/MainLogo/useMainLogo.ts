import { useEffect, useState } from 'react';

export const useMainLogo = (isInViewPort: boolean) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isInViewPort) {
      const timer = setTimeout(() => {
        setRotation((prevState) => prevState + 45);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [rotation, isInViewPort]);

  return { rotation };
};
