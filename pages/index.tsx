import { Navbar } from '@/components/Navbar';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { lazy } from 'react';

const About = lazy(() => import('sections/About'));
const Services = lazy(() => import('sections/Services'));
const HomePage = lazy(() => import('sections/HomePage'));
const Contact = lazy(() => import('sections/Contact'));
const Pricing = lazy(() => import('sections/Pricing'));

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLocale!, [
        'common',
        'about',
        'services',
        'pricing',
      ])),
    },
  };
};

const Home: NextPage = ({
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>
          {`${t('common:handyBill')} - ${t('common:pointOfSales')}`}
        </title>
        <meta name="description" content={`${t('common:handyDescription')}`} />
      </Head>
      <Navbar />
      <main>
        <HomePage />
        <About />
        <Services />
        <Pricing />
        <Contact />
      </main>
    </>
  );
};

export default Home;
