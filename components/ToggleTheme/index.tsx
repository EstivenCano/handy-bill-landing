import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { match } from 'ts-pattern';

import { useThemeContext } from '../../hooks/useTheme';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export const ToggleTheme = () => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);
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
          onMouseOver={() => setShowTooltip(() => true)}
          onMouseOut={() => setShowTooltip(() => false)}
          animate={{
            x: isDark ? 20 : 0,
          }}
        >
          {match(theme)
            .with('dark', () => <MoonIcon />)
            .with('light', () => <SunIcon />)
            .exhaustive()}
        </motion.div>
        <div
          id="toggle-theme-tooltip"
          role="tooltip"
          className={`absolute top-16 right-2 whitespace-nowrap z-10 py-2 px-2 w-fit text-xs text-content bg-foreground rounded-lg shadow-sm ${
            !showTooltip && 'opacity-0'
          } transition-opacity duration-300 tooltip `}
        >
          {match(isDark)
            .with(true, () => t('common:activateLight'))
            .otherwise(() => t('common:activateDark'))}
          <div className="tooltip-arrow" data-popper-arrow />
        </div>
      </div>
    </>
  );
};
