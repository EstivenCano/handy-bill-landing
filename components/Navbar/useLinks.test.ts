import { renderHook } from '@testing-library/react';

import { useLinks } from './useLinks';

describe('useLink functionality', () => {
  test('useLink hook should return list of links', () => {
    const { result } = renderHook(useLinks);

    expect(result.current.length).toBe(5);
  });
});
