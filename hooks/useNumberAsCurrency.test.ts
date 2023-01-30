import { renderHook } from '@testing-library/react';

import { useNumberAsCurrency } from './useNumberAsCurrency';

//Mock the Intl API to prevent errors during testing and return a fixed value
jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(() => {
  return {
    resolvedOptions: () => {
      return {
        locale: 'en-US',
      };
    },
  } as unknown as Intl.DateTimeFormat;
});

describe('useNumberAsCurrency should handle currency', () => {
  test('It should return the formatted number', () => {
    const { result } = renderHook(() => useNumberAsCurrency());

    expect(result.current.numberAsCurrency(1000)).toBe('$1,000');
  });

  test('It should return the formatted number with a custom currency', () => {
    const { result } = renderHook(() => useNumberAsCurrency());

    expect(result.current.numberAsCurrency(1000, 'USD')).toBe('$1,000');
  });
});
