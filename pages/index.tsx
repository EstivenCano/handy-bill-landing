import { MainLogo } from '@/components/MainLogo';
import { Navbar } from '@/components/Navbar';
import { Spinner } from '@/components/Spinner';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { match } from 'ts-pattern';

const About = dynamic(() => import('sections/About'));
const Services = dynamic(() => import('sections/Services'));
const HomePage = dynamic(() => import('sections/HomePage'));
const Contact = dynamic(() => import('sections/Contact'));
const Pricing = dynamic(() => import('sections/Pricing'));
const Footer = dynamic(() => import('sections/Footer'));

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? defaultLocale!, [
        'common',
        'about',
        'services',
        'pricing',
        'contact',
      ])),
    },
  };
};

const Home: NextPage = ({
  _props,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  const [loadingTheme, setLoadingTheme] = useState(true);

  useEffect(() => {
    setLoadingTheme(false);
  }, []);

  return (
    <>
      <Head>
        <title>
          {`${t('common:handyBill')} - ${t('common:pointOfSales')}`}
        </title>
        <meta name="description" content={`${t('common:handyDescription')}`} />
      </Head>
      {match(loadingTheme)
        .with(false, () => (
          <>
            <Navbar />
            <main>
              <HomePage />
              <About />
              <Services />
              <Pricing />
              <Contact />
            </main>
            <Footer />
          </>
        ))
        .otherwise(() => null)}
    </>
  );
};

export default Home;
