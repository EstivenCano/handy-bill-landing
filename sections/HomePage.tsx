import { MainLogo } from '@/components/MainLogo';
import { ScrollTop } from '@/components/ScrollTop';
import { useCurrentSection } from '@/hooks/useCurrentSection';
import { useIsInViewport } from '@/hooks/useIsInViewport';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRef } from 'react';

const HomePage = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInViewPort = useIsInViewport(ref);
  const setCurrentSection = useCurrentSection(
    (state) => state.setCurrentSection,
  );

  return (
    <motion.section
      id="home"
      className="flex w-full min-h-screen overflow-hidden flex-col lg:flex-row items-center md:pl-10 py-10 bg-gradient-to-br from-background via-background to-primary-300/70 dark:to-primary-700/40"
    >
      <motion.div
        ref={ref}
        className="flex flex-0 lg:flex-1 justify-center"
        onViewportEnter={() => setCurrentSection('home')}
      >
        <MainLogo isInViewPort={isInViewPort} />
      </motion.div>
      <div className="flex flex-1 flex-col justify-center items-center py-5 pl-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          {t('common:handyBill')}
        </h1>
        <hr className="border-transparent bg-primary-700 border-2 m-1 w-72" />
        <hr className="border-transparent bg-content border-2 m-1 w-72" />
        <h2 className="font-bold text-xl md:text-2xl mt-3 text-transparent bg-clip-text bg-gradient-to-tr from-primary-100 to-primary-600 text-shadow">
          {t('common:pointOfSales')}
        </h2>
        <p className="text-content text-center max-w-lg text-lg md:text-xl py-10 px-5">
          {t('common:handyDescription')}
        </p>
        <div className="flex gap-4">
          <Link
            about={`${t('common:goTo')} ${t('common:about')}`}
            aria-current="page"
            href={`/?region=about`}
          >
            <button className="button-outlined">{t('common:moreInfo')}</button>
          </Link>
          <Link
            about={`${t('common:goTo')} ${t('common:contact')}`}
            aria-current="page"
            href={`/?region=contact`}
          >
            <button className="button-primary">{t('common:getADemo')}</button>
          </Link>
        </div>
      </div>
      <ScrollTop show={!isInViewPort} />
    </motion.section>
  );
};

export default HomePage;
