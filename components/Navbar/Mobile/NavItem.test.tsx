import { useCurrentSection } from '@/hooks/useCurrentSection';
import { render, screen } from '@testing-library/react';

import { NavItem } from './NavItem';

const originalState = useCurrentSection.getState();
beforeEach(() => {
  useCurrentSection.setState(originalState);
});

describe('NavItem functionality', () => {
  test('Should render content correctly', () => {
    render(<NavItem path="/" name="home" />);
    expect(
      screen.getByRole('link', {
        name: /home/i,
      }),
    ).toBeVisible();
  });
});
