import { Navbar } from '@/components/Navbar';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { About } from 'sections/About';
import { Contact } from 'sections/Contact';
import { HomePage } from 'sections/HomePage';
import { Pricing } from 'sections/Pricing';
import { Services } from 'sections/Services';

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
        <title>
          {`${t('common:handyBill')} - ${t('common:pointOfSales')}`}
        </title>
      </Head>
      <Navbar />
      <main>
        <HomePage />
        <About />
        <Services />
        <Pricing />
        <Contact />
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
    </>
  );
};

export default Home;
