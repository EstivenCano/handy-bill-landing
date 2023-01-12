import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { match } from 'ts-pattern';

import type { Theme } from '../models/Theme';

type DefaultContext = {
  theme: Theme;
  setTheme: (value: Theme) => void;
};

export const THEME_CONTEXT_DEFAULT: DefaultContext = {
  theme: 'light',
  setTheme: () => null,
};

export const ThemeContext = createContext(THEME_CONTEXT_DEFAULT);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext used outside ThemeContext provider');
  }
  useEffect(() => {
    document.body.classList.value =
      'transition-colors ease-in-out duration-200';
    document.body.classList.add(`theme-${context.theme}`);
    localStorage.setItem('theme', context.theme);
  }, [context.theme]);

  return context;
};

type Props = {
  children?: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  //MediaQuery listener to change current theme depending on user's preferences
  const mqListener = useCallback(
    (e: MediaQueryListEvent) => handleSetTheme(e.matches ? 'dark' : 'light'),
    [],
  );

  const handleSetTheme = (value: Theme) => {
    setTheme(value);
    match(value)
      .with('dark', () => document.documentElement.classList.add('dark'))
      .otherwise(() => document.documentElement.classList.remove('dark'));
  };

  //Listen any changes on prefers-color-scheme property to change the current theme
  useEffect(() => {
    const darkPreference = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkPreference.matches) {
      handleSetTheme('dark');
    }
    darkPreference.addEventListener('change', mqListener);
    return () => darkPreference.removeEventListener('change', mqListener);
  }, [mqListener]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
