import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  test('Should open the menu when user clicks on it', async () => {
    render(<NavMenu />);

    expect(screen.queryByRole('link', { name: 'home' })).toBeNull();

    await userEvent.click(
      screen.getByRole('button', {
        name: /main\-menu/i,
      }),
    );

    expect(
      screen.getByRole('link', {
        name: /home/i,
      }),
    ).toBeVisible();
  });
});
