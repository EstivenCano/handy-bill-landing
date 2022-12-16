import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ScrollTop } from '.';

describe('ScrollTop functionality', () => {
  test('It should be visible when show prop is true', async () => {
    render(<ScrollTop show={true} />);

    await waitFor(() =>
      expect(screen.getByRole('button').style.opacity).toBe('1'),
    );

    expect(screen.getByRole('button')).toBeVisible();
  });

  test('It should not be visible when show prop is false', () => {
    render(<ScrollTop show={false} />);

    expect(screen.queryByRole('button')).toBeNull();
  });

  test('It should display tooltip when mouse is hover and be hide when mouse unhover', async () => {
    render(<ScrollTop show={true} />);

    await waitFor(() => expect(screen.queryByRole('tooltip')).toBeNull());

    userEvent.hover(screen.getByRole('button'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeVisible());

    userEvent.unhover(screen.getByRole('button'));

    await waitFor(() => expect(screen.getByRole('tooltip')).not.toBeVisible());
  });
});
