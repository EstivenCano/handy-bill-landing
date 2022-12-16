import { render, screen } from '@testing-library/react';

import { NavbarBranding } from './NavbarBranding';

describe('NavBranding rendering', () => {
  test('Should render branding image correctly', () => {
    render(<NavbarBranding />);

    expect(screen.getByRole('img')).toBeVisible();
  });
});
