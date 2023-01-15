import { render, screen } from '@testing-library/react';

import { NavItem } from './NavItem';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '',
      query: '',
    };
  },
}));

describe('NavItem functionality', () => {
  test('Should render content correctly', () => {
    render(<NavItem path="/" name="Home" />);
    expect(
      screen.getByRole('link', {
        name: /home/i,
      }),
    ).toBeVisible();
  });
});
