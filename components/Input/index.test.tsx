import { render, screen, waitFor } from '@testing-library/react';

import { Input } from '.';

describe('Input functionality', () => {
  test('It should display an styled input element', async () => {
    render(<Input />);

    await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

    expect(screen.getByRole('textbox')).toBeVisible();

    expect(screen.getByRole('textbox')).toHaveClass('styled-input');
  });

  test('It should display an input element with correct placeholder', async () => {
    render(<Input placeholder="test" />);
    await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test');
  });

  test('It should display an input element with correct value', async () => {
    const mockOnChange = jest.fn();
    render(<Input value={'test'} onChange={mockOnChange} />);
    await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

    expect(screen.getByRole('textbox')).toHaveDisplayValue('test');
  });
});
