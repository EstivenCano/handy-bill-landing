import { render, screen } from '@testing-library/react';

import { CardContent } from './CardContent';

describe('CardContent should display content', () => {
  test('If the content exists, the correct content must be displayed.', () => {
    render(<CardContent content="Content" />);
    expect(screen.getByText('Content')).toBeVisible();
  });

  test('If the content does not exists, content does not be displayed.', () => {
    render(<CardContent />);
    expect(screen.queryByText('Content')).toBeNull();
  });
});
