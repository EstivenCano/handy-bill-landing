import { act, renderHook } from '@testing-library/react';

import { useTooltip } from './useTooltip';

describe('useTooltip functionality', () => {
  test('handleShowTooltip should change value of showTooltip to true', () => {
    const { result } = renderHook(useTooltip);

    expect(result.current.showTooltip).toBe(false);

    act(() => {
      result.current.handleShowTooltip();
    });

    expect(result.current.showTooltip).toBe(true);
  });

  test('handleCloseTooltip should change value of showTooltip to false', () => {
    const { result } = renderHook(useTooltip);

    expect(result.current.showTooltip).toBe(false);

    act(() => {
      result.current.handleShowTooltip();
    });

    expect(result.current.showTooltip).toBe(true);

    act(() => {
      result.current.handleCloseTooltip();
    });

    expect(result.current.showTooltip).toBe(false);
  });

  test('If show parameter if false, showTooltip should be false', () => {
    const { result } = renderHook(() => useTooltip(false));

    expect(result.current.showTooltip).toBe(false);
  });
});
