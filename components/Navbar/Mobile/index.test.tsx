import { render, screen } from '@testing-library/react';

import { NavMenu } from '.';

describe('NavMenu functionality', () => {
  test('Should render content correctly', () => {
    render(<NavMenu />);
    expect(
      screen.getByRole('button', {
        name: /main\-menu/i,
      }),
    ).toBeVisible();
  });

  test('Should render list of NavItems', () => {
    render(<NavMenu />);

    expect(screen.getByRole('list')).toBeVisible();

    expect(screen.getAllByRole('link').length).toBe(5);
  });
});
