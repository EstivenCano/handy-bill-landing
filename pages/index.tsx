import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import { Navbar } from '../components/Navbar';

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLocale!, ['common'])),
    },
  };
};

const Home: NextPage = ({
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Handy Bill</title>
      </Head>
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          {t('common:pointOfSales')}
        </a>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <strong>TailSoft</strong>
        </a>
      </footer>
    </div>
  );
};

export default Home;
