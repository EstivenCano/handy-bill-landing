import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useCurrentSection } from './useCurrentSection';

const originalState = useCurrentSection.getState();
beforeEach(() => {
  useCurrentSection.setState(originalState);
});

describe('useCurrentSection should handle current component', () => {
  test('Default value should be "home"', async () => {
    const { result } = renderHook(() => useCurrentSection());

    expect(result.current.currentSection).toBe('home');
  });

  test('Should change currentSection to "about"', async () => {
    const { result } = renderHook(() => useCurrentSection());

    act(() => {
      result.current.setCurrentSection('about');
    });

    expect(result.current.currentSection).toBe('about');
  });
});
