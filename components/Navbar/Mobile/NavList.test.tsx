import { render, screen } from '@testing-library/react';

import { NavList } from './NavList';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '',
      query: '',
    };
  },
}));

describe('NavList functionality', () => {
  test('Should render content correctly', () => {
    render(<NavList />);

    expect(screen.getAllByRole('link').length).toBe(5);
  });
});
