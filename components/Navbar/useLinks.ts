import { useTranslation } from 'next-i18next';

export const useLinks = (): Array<{ path: string; name: string }> => {
  const { t } = useTranslation();

  return [
    {
      path: '/#home',
      name: `${t('common:home')}`,
    },
    {
      path: '/#about',
      name: `${t('common:about')}`,
    },
    {
      path: '/#services',
      name: `${t('common:services')}`,
    },
    {
      path: '/#pricing',
      name: `${t('common:pricing')}`,
    },
    {
      path: '/#contact',
      name: `${t('common:contact')}`,
    },
  ];
};
