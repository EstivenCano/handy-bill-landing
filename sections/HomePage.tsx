import { MainLogo } from '@/components/MainLogo';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="flex w-full min-h-screen overflow-hidden flex-col md:flex-row items-center md:pl-10 py-10 bg-gradient-to-br from-background via-background to-primary-700/40"
    >
      <MainLogo />
      <div className="flex flex-1 flex-col justify-center items-center py-2 pl-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          {t('common:handyBill')}
        </h1>
        <hr className="border-transparent bg-primary-700 border-2 m-1 w-72" />
        <hr className="border-transparent bg-content border-2 m-1 w-72" />
        <h2 className="text-primary-600 font-bold text-xl md:text-2xl mt-3">
          {t('common:pointOfSales')}
        </h2>
        <p className="text-content text-center max-w-lg text-md md:text-xl py-10 px-5">
          {t('common:handyDescription')}
        </p>
        <button className="button-outlined">
          <Link about="Go to about" href="/#about">
            Know more
          </Link>
        </button>
      </div>
    </section>
  );
};
