import { render, screen, waitFor } from '@testing-library/react';

import { Spinner } from '.';

describe('Spinner functionality', () => {
  test('It should display an element with status role', async () => {
    render(<Spinner />);

    await waitFor(() => expect(screen.getByRole('status')).toBeVisible());

    expect(screen.getByRole('status')).toBeVisible();
  });

  test('When size is equal to small, the component should have correct class', async () => {
    render(<Spinner size="small" />);
    await waitFor(() => expect(screen.getByRole('status')).toBeVisible());

    const spinnerImage = screen.getByRole('status').firstChild;

    expect(spinnerImage).toHaveClass('w-6 h-6');
  });

  test('When size is equal to medium, the component should have correct class', async () => {
    render(<Spinner size="medium" />);
    await waitFor(() => expect(screen.getByRole('status')).toBeVisible());

    const spinnerImage = screen.getByRole('status').firstChild;

    expect(spinnerImage).toHaveClass('w-8 h-8');
  });

  test('When size is equal to large, the component should have correct class', async () => {
    render(<Spinner size="large" />);
    await waitFor(() => expect(screen.getByRole('status')).toBeVisible());

    const spinnerImage = screen.getByRole('status').firstChild;

    expect(spinnerImage).toHaveClass('w-10 h-10');
  });
});
