import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import ThemeProvider from '../hooks/useTheme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
