import { render, screen } from '@testing-library/react';

import { NavDesktop } from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '',
      query: '',
    };
  },
}));

describe('NavDesktop functionality', () => {
  test('Should render list of NavItems', () => {
    render(<NavDesktop />);

    expect(screen.getByRole('list')).toBeVisible();

    expect(screen.getAllByRole('link').length).toBe(5);
  });

  test('Should render branding image correctly', () => {
    render(<NavDesktop />);

    expect(screen.getByRole('img')).toBeVisible();
  });
});
