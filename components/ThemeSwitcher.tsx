import type { FC } from 'react';

import { useThemeContext } from '../hooks/useTheme';

type Props = {
  className: string;
};

const ThemeSwitcher: FC<Props> = ({ className }) => {
  const { setTheme } = useThemeContext();

  return (
    <select
      onChange={(evt) => setTheme(evt.target.value)}
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
