import { render, screen, waitFor } from '@testing-library/react';

import { TextArea } from '.';

describe('TextArea functionality', () => {
  test('It should display an styled text area element', async () => {
    render(<TextArea />);

    await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

    expect(screen.getByRole('textbox')).toBeVisible();

    expect(screen.getByRole('textbox')).toHaveClass('styled-input');
  });

  test('It should display a text area element with correct placeholder', async () => {
    render(<TextArea placeholder="test" />);
    await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test');
  });

  test('It should display a text area element with correct value', async () => {
    const mockOnChange = jest.fn();
    render(<TextArea value={'test'} onChange={mockOnChange} />);
    await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

    expect(screen.getByRole('textbox')).toHaveDisplayValue('test');
  });
});
