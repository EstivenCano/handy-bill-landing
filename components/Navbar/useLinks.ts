import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useLinks = (): Array<{ path: string; name: string }> => {
  const router = useRouter();

  //Navigate to the selected region on the page when the region query changes
  useEffect(() => {
    const region = router.query.region;
    if (region) {
      const element = document.getElementById(region as string);
      if (element) {
        window.scroll({ top: element.offsetTop, behavior: 'smooth' });
      }
    }
  }, [router.query]);

  return [
    {
      path: '/?region=home',
      name: 'home',
    },
    {
      path: '/?region=about',
      name: 'about',
    },
    {
      path: '/?region=services',
      name: 'services',
    },
    {
      path: '/?region=pricing',
      name: 'pricing',
    },
    {
      path: '/?region=contact',
      name: 'contact',
    },
  ];
};
