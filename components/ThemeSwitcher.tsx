import type { FC } from 'react';

import { useThemeContext } from '../hooks/useTheme';
import type { Theme } from '../models/Theme';

type Props = {
  className: string;
};

const ThemeSwitcher: FC<Props> = ({ className }) => {
  const { setTheme } = useThemeContext();

  return (
    <select
      onChange={(evt) => setTheme(evt.target.value as Theme)}
      className={`text-content bg-foreground border border-edge p-4 w-72 rounded-lg ${
        className ? className : ''
      }`}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default ThemeSwitcher;
