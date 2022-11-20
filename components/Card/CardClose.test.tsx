import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CardClose } from './CardClose';

const mockOnClose = jest.fn();

describe('CardClose should display content', () => {
  test('If CardClose receives onClose prop, it should display correct content', async () => {
    render(<CardClose onClose={mockOnClose} />);

    expect(screen.getByRole('img')).toBeVisible();

    expect(screen.queryByRole('tooltip')).toBeNull();

    userEvent.hover(screen.getByRole('img'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeVisible());

    await userEvent.click(screen.getByRole('img'));

    expect(mockOnClose).toBeCalledTimes(1);
  });

  test('If CardClose does not receive onClose prop, it should not display content', () => {
    render(<CardClose />);
    expect(screen.queryByRole('img')).toBeNull();

    expect(screen.queryByRole('tooltip')).toBeNull();
  });
});
