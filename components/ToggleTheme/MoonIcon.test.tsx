import { render, screen } from '@testing-library/react';

import { MoonIcon } from './MoonIcon';

describe('MoonIcon functionality', () => {
  test('Should render content correctly', () => {
    render(<MoonIcon />);
    expect(screen.getByRole('img')).toBeVisible();
  });
});
