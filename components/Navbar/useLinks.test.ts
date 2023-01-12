import { renderHook } from '@testing-library/react';
import React from 'react';

import { useLinks } from './useLinks';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '',
      query: '',
    };
  },
}));

describe('useLink functionality', () => {
  test('useLink hook should return list of links', () => {
    const { result } = renderHook(useLinks);

    expect(result.current.length).toBe(5);
  });
});
