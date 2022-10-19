import { act, renderHook } from '@testing-library/react';
import type { FC, ReactNode } from 'react';

import { ThemeProvider, useThemeContext } from './useTheme';

const wrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('useTheme should handle current theme', () => {
  test('Default theme should be light', () => {
    const { result } = renderHook(useThemeContext, { wrapper });

    expect(result.current.theme).toBe('light');
  });

  test('Should set theme to dark if matchMedia matches with it', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });

    const { result } = renderHook(useThemeContext, { wrapper });

    expect(result.current.theme).toBe('dark');
  });

  test('setTheme should change theme value', () => {
    const { result } = renderHook(useThemeContext, { wrapper });

    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.setTheme('light');
    });

    expect(result.current.theme).toBe('light');
  });
});
