import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavButton } from './NavButton';

describe('NavButton functionality', () => {
  const mockToggle = jest.fn();
  test('Should be render correct content', () => {
    render(<NavButton toggle={mockToggle} />);
    expect(
      screen.getByRole('button', {
        name: /main\-menu/i,
      }),
    ).toBeVisible();
  });

  test('Should call toggle function when onClick event is activate', async () => {
    render(<NavButton toggle={mockToggle} />);
    await userEvent.click(
      screen.getByRole('button', {
        name: /main\-menu/i,
      }),
    );
    expect(mockToggle).toBeCalledTimes(1);
  });
});
