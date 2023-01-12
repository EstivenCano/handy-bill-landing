import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useLinks = (): Array<{ path: string; name: string }> => {
  const { t } = useTranslation();
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
      name: `${t('common:home')}`,
    },
    {
      path: '/?region=about',
      name: `${t('common:about')}`,
    },
    {
      path: '/?region=services',
      name: `${t('common:services')}`,
    },
    {
      path: '/?region=pricing',
      name: `${t('common:pricing')}`,
    },
    {
      path: '/?region=contact',
      name: `${t('common:contact')}`,
    },
  ];
};
