import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useMainLogo } from './useMainLogo';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
jest.mock('framer-motion');

describe('MainLogo state and functionality', () => {
  test('rotation value should change after timeout when element is in viewport', async () => {
    const { result } = renderHook(() => useMainLogo(true));

    expect(result.current.rotation).toBe(0);

    await act(() => {
      jest.runAllTimers();
    });

    expect(result.current.rotation).toBe(45);

    await act(() => {
      jest.runAllTimers();
    });

    expect(result.current.rotation).toBe(90);
  });

  test('rotation value should not change after when element is not in viewport', async () => {
    const { result } = renderHook(() => useMainLogo(false));

    expect(result.current.rotation).toBe(0);

    await act(() => {
      jest.runAllTimers();
    });

    expect(result.current.rotation).toBe(0);
  });
});
