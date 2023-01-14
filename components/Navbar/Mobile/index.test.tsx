import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavMenu } from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '',
      query: '',
    };
  },
}));

describe('NavMenu functionality', () => {
  test('Should render content correctly', () => {
    render(<NavMenu />);
    expect(
      screen.getByRole('button', {
        name: /main\-menu/i,
      }),
    ).toBeVisible();
  });

  test('Should render list of NavItems', async () => {
    render(<NavMenu />);

    userEvent.click(
      screen.getByRole('button', {
        name: /main\-menu/i,
      }),
    );

    expect(screen.getByRole('list')).toBeVisible();

    await waitFor(() => expect(screen.getAllByRole('link').length).toBe(5));
  });
});
