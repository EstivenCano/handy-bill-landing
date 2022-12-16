import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tooltip } from '.';

describe('Tooltip functionality', () => {
  test('It should display tooltip when mouse is hover and be hide when mouse unhover', async () => {
    render(
      <Tooltip title="Test">
        <button>button</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).toBeNull();

    userEvent.hover(screen.getByRole('button'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeVisible());
  });

  test('It should display tooltip when mouse is hover and be hide when mouse unhover', async () => {
    render(
      <Tooltip title="Test">
        <button>button</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).toBeNull();

    userEvent.hover(screen.getByRole('button'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeVisible());

    userEvent.unhover(screen.getByRole('button'));

    await waitFor(() => expect(screen.getByRole('tooltip')).not.toBeVisible());
  });
});
