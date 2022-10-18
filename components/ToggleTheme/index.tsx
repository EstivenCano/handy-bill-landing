import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { match } from 'ts-pattern';

import { useComponentVisible } from '../../hooks/useComponentVisible';
import { useThemeContext } from '../../hooks/useTheme';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export const ToggleTheme = () => {
  const { t } = useTranslation();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const { setTheme, theme } = useThemeContext();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <>
      <div
        data-tooltip-target="toggle-theme-tooltip"
        className={`w-14 h-9 mt-0 md:mt-2 rounded-full bg-foreground/90 flex p-1 cursor-pointer`}
        onClick={handleToggle}
      >
        <motion.div
          className="w-7 h-7 rounded-full p-1 bg-primary-600 md:mr-8"
          onMouseOver={() => setIsComponentVisible(() => true)}
          onMouseOut={() => setIsComponentVisible(() => false)}
          animate={{
            x: isDark ? 20 : 0,
          }}
        >
          {match(theme)
            .with('dark', () => <MoonIcon />)
            .with('light', () => <SunIcon />)
            .exhaustive()}
        </motion.div>
        <span
          ref={ref}
          id="toggle-theme-tooltip"
          role="tooltip"
          className={`top-16 right-2 ${
            !isComponentVisible && 'opacity-0'
          } tooltip`}
        >
          {match(isDark)
            .with(true, () => t('common:activateLight'))
            .otherwise(() => t('common:activateDark'))}
        </span>
      </div>
    </>
  );
};
