import { renderHook } from '@testing-library/react';
import { MutableRefObject } from 'react';

import { useDimensions } from './useDimensions';

describe('useDimensions should handle dimensions', () => {
  test('It should return the dimensions of the element', () => {
    const mockRef = {
      current: {
        offsetWidth: 100,
        offsetHeight: 100,
      },
    } as unknown as MutableRefObject<HTMLElement | null>;

    const { result } = renderHook(() => useDimensions(mockRef));

    expect(result.current).toEqual({ width: 100, height: 100 });
  });
});
