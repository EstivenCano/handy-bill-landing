import { renderHook } from '@testing-library/react';
import { useInView } from 'framer-motion';
import { act } from 'react-dom/test-utils';

import { useMainLogo } from './useMainLogo';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
jest.mock('framer-motion');

const mockInView = useInView as jest.Mock;

describe('MainLogo state and functionality', () => {
  test('rotation value should change after timeout when element is in viewport', async () => {
    mockInView.mockImplementation(() => true);
    const { result } = renderHook(useMainLogo);

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
    mockInView.mockImplementation(() => false);
    const { result } = renderHook(useMainLogo);

    expect(result.current.rotation).toBe(0);

    await act(() => {
      jest.runAllTimers();
    });

    expect(result.current.rotation).toBe(0);
  });
});
