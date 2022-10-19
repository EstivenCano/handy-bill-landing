import { render, screen } from '@testing-library/react';

import { SunIcon } from './SunIcon';

describe('SunIcon functionality', () => {
  test('Should render content correctly', () => {
    render(<SunIcon />);
    expect(screen.getByRole('img')).toBeVisible();
  });
});
