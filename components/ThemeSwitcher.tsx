import { useTranslation } from 'next-i18next';
import type { FC } from 'react';

import { useThemeContext } from '../hooks/useTheme';
import type { Theme } from '../models/Theme';

type Props = {
  className: string;
};

const ThemeSwitcher: FC<Props> = ({ className }) => {
  const { setTheme, theme } = useThemeContext();
  const { t } = useTranslation();

  return (
    <select
      onChange={(evt) => setTheme(evt.target.value as Theme)}
      className={`text-content bg-foreground border border-edge p-4 w-72 rounded-lg ${
        className ? className : ''
      }`}
      value={theme}
    >
      <option value="light">{t('common:light')}</option>
      <option value="dark">{t('common:dark')}</option>
    </select>
  );
};

export default ThemeSwitcher;
