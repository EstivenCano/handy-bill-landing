import { motion } from 'framer-motion';
import { match } from 'ts-pattern';

import { useThemeContext } from '../../hooks/useTheme';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export const ToggleTheme = () => {
  const { setTheme, theme } = useThemeContext();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div
      className={`w-14 h-9 mt-0 md:mt-2 rounded-full bg-foreground/90 flex p-1 cursor-pointer`}
      onClick={handleToggle}
    >
      <motion.div
        className="w-7 h-7 rounded-full p-1 bg-primary-600 md:mr-8"
        animate={{
          x: isDark ? 20 : 0,
        }}
      >
        {match(theme)
          .with('dark', () => <MoonIcon />)
          .with('light', () => <SunIcon />)
          .exhaustive()}
      </motion.div>
    </div>
  );
};
