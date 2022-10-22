import { MainLogo } from '@/components/MainLogo';
import { Navbar } from '@/components/Navbar';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

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
    <>
      <Head>
        <title>Handy Bill</title>
      </Head>
      <Navbar />
      <main className="flex w-full min-h-screen overflow-hidden flex-col md:flex-row columns-2 justify-around md:px-10 py-10">
        <MainLogo />
        <div className="flex flex-1 justify-center items-center">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            {t('common:pointOfSales')}
          </a>
        </div>
      </main>
      <main className="flex w-full min-h-screen overflow-hidden flex-col md:flex-row columns-2 justify-around md:px-10 py-10"></main>
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
    </>
  );
};

export default Home;
