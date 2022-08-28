import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import ThemeSwitcher from '../components/ThemeSwitcher';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Handy Bill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Image
          src="/handyBill.svg"
          width={500}
          height={500}
          alt="handy-bill-logo"
        />
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
