import { render, screen } from '@testing-library/react';

import { CardHeader } from './CardHeader';

describe('CardHeader should display content', () => {
  test('If the title exists, the correct content must be displayed.', () => {
    render(<CardHeader title="title" />);
    expect(screen.getByText('title')).toBeVisible();
  });

  test('If the title does not exists, content does not be displayed.', () => {
    render(<CardHeader />);
    expect(screen.queryByText('title')).toBeNull();
  });
});
