import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ChangeLocale } from '.';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    asPath: '/',
    locale: 'en',
    locales: ['en', 'es'],
    defaultLocale: 'en',
    push: mockPush,
  })),
}));

describe('ChangeLocale functionality', () => {
  test('It should display an element with button role', async () => {
    render(<ChangeLocale />);

    await waitFor(() => expect(screen.getByRole('button')).toBeVisible());

    expect(screen.getByRole('button')).toBeVisible();
  });

  test('It should display a button with correct text', async () => {
    render(<ChangeLocale />);
    await waitFor(() => expect(screen.getByRole('button')).toBeVisible());

    expect(screen.getByRole('button')).toHaveTextContent('en');
  });

  test('When user clicks on button, it should display locale options and call mockPush after click an option', async () => {
    render(<ChangeLocale />);
    await waitFor(() => expect(screen.getByRole('button')).toBeVisible());

    expect(screen.getByRole('button')).toHaveTextContent('en');

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(screen.getAllByRole('listitem').length).toBe(2));

    userEvent.click(screen.getAllByRole('listitem')[1]);

    await waitFor(() => expect(mockPush).toHaveBeenCalledTimes(1));
  });
});
