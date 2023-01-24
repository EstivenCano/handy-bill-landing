import { renderHook } from '@testing-library/react';

import { useNumberAsCurrency } from './useNumberAsCurrency';

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
