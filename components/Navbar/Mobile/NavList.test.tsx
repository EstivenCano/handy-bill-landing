import { render, screen } from '@testing-library/react';

import { NavList } from './NavList';

describe('NavList functionality', () => {
  test('Should render content correctly', () => {
    render(<NavList />);

    expect(screen.getAllByRole('link').length).toBe(5);
  });
});
