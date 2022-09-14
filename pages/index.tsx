import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { match } from 'ts-pattern';

import ThemeSwitcher from '../components/ThemeSwitcher';
import { useThemeContext } from '../hooks/useTheme';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};

const Home = ({ locale }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { theme } = useThemeContext();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Handy Bill</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>{locale}</h1>
        {match(theme)
          .with('light', () => (
            <Image
              src="/images/handyBill.svg"
              width={500}
              height={500}
              alt="handy-bill-logo"
            />
          ))
          .with('dark', () => (
            <Image
              src="/images/handyBillDark.svg"
              width={500}
              height={500}
              alt="handy-bill--dark-logo"
            />
          ))
          .exhaustive()}

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          Hello
        </a>
      </main>

      <ThemeSwitcher className="mt-12" />

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
