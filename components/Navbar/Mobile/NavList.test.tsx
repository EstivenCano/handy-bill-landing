import { render, screen } from '@testing-library/react';

import links from '../links.json';
import { NavList } from './NavList';

describe('NavList functionality', () => {
  test('Should render content correctly', () => {
    render(<NavList />);
    links.forEach(({ name }) => {
      expect(
        screen.getByRole('link', {
          name: name,
        }),
      ).toBeVisible();
    });
  });
});
