import { AnimatePresence, motion } from 'framer-motion';
import { useComponentVisible } from 'hooks/useComponentVisible';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { LaguangeIcon } from 'public/icons/LanguageIcon';
import { match } from 'ts-pattern';

import { Tooltip } from '../Tooltip';

const MenuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      ease: 'easeOut',
      type: 'spring',
    },
  },
  closed: {
    opacity: 0,
    y: -40,
    transition: {
      staggerChildren: 0.1,
      ease: 'easeOut',
    },
  },
};

export const ChangeLocale = () => {
  const { t } = useTranslation();
  const { isComponentVisible, ref, setIsComponentVisible } =
    useComponentVisible(false);
  const { locale: routerLocale, locales, push, asPath } = useRouter();

  const handleLocaleChange = (locale: string) => {
    const path = asPath;
    push(path, path, { locale });
  };

  const handleOpenMenu = () => {
    setIsComponentVisible((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Tooltip title={t('common:changeLanguage')} position="bottom">
        <button
          onClick={handleOpenMenu}
          className="button-outlined mb-auto flex items-center gap-2 px-2"
        >
          <LaguangeIcon />
          <p className="text-content uppercase text-sm">{routerLocale}</p>
        </button>
      </Tooltip>
      <AnimatePresence>
        {match(isComponentVisible)
          .with(true, () => (
            <div ref={ref}>
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={MenuVariants}
                className="mt-12 rounded-md bg-foreground gap-2 right-0 absolute"
              >
                {locales?.map((locale) => (
                  <li
                    key={locale}
                    onClick={() => handleLocaleChange(locale)}
                    className={`px-4 py-2 hover:bg-primary-500/10 cursor-pointer ${
                      locale === routerLocale ? 'text-primary-500' : ''
                    }`}
                  >
                    {t(`common:${locale}`)}
                  </li>
                ))}
              </motion.ul>
            </div>
          ))
          .otherwise(() => null)}
      </AnimatePresence>
    </div>
  );
};
