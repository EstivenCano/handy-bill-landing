import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type DefaultContext = {
  theme: string;
  setTheme: (value: string) => void;
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
  }, [context.theme]);

  return context;
};

type Props = {
  children?: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const handleSetTheme = (value: string) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
