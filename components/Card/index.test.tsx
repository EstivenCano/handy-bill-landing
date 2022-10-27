import { render, screen } from '@testing-library/react';

import { Card } from './index';

describe('Card component content', () => {
  test('It should display corrent content', () => {
    render(<Card content="Content" title="Title" />);

    expect(screen.getByRole('article')).toBeVisible();
    expect(
      screen.getByRole('heading', { name: 'Title', level: 2 }),
    ).toBeVisible();
    expect(screen.getByText('Content')).toBeVisible();
  });
});
