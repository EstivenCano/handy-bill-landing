import { render, screen, waitFor } from '@testing-library/react';

import { Snackbar } from '.';

describe('Snackbar functionality', () => {
  test('It should display correct content when is open an it has success property', async () => {
    render(
      <Snackbar isOpen={true} message="test" type="success" timeout={50} />,
    );

    await waitFor(() => expect(screen.getByRole('alert')).toBeVisible());

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByRole('alert')).toHaveClass(
      'text-primary-500 border-primary-500/20',
    );

    await waitFor(() =>
      expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
    );
  });

  test('It should display correct content when is open an it has error property', async () => {
    render(<Snackbar isOpen={true} message="test" type="error" timeout={50} />);
    await waitFor(() => expect(screen.getByRole('alert')).toBeVisible());

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByRole('alert')).toHaveClass(
      'text-red-500 border-red-500/20',
    );

    await waitFor(() =>
      expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
    );
  });

  test('It should display correct content when is open an it has warning property', async () => {
    render(
      <Snackbar isOpen={true} message="test" type="warning" timeout={50} />,
    );
    await waitFor(() => expect(screen.getByRole('alert')).toBeVisible());

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByRole('alert')).toHaveClass(
      'text-yellow-500 border-yellow-500/20',
    );

    await waitFor(() =>
      expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
    );
  });

  test('It should display correct content when is open an it has info property', async () => {
    render(<Snackbar isOpen={true} message="test" type="info" timeout={50} />);
    await waitFor(() => expect(screen.getByRole('alert')).toBeVisible());

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByRole('alert')).toHaveClass(
      'text-content border-content/20',
    );

    await waitFor(() =>
      expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
    );
  });

  test('It should not display any content when is open is equal to false', async () => {
    render(<Snackbar isOpen={false} message="test" type="info" />);
    await waitFor(() =>
      expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
    );

    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
});
