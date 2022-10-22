import { act, render, screen } from '@testing-library/react';

import { MainLogo } from '.';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

const mainContainer = 'main-container';

describe('MainLogo functionality', () => {
  test('Should be visible after timeout', async () => {
    render(<MainLogo />);

    expect(screen.getByTestId(mainContainer)).not.toBeVisible();

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.getByTestId(mainContainer)).toBeVisible();
  });
});
