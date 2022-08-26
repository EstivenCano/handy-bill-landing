import { render, screen } from '@testing-library/react';

import Home from '../pages/index';

describe(`it should render info correctly`, () => {
  render(<Home />);

  it(`should render main message`, () => {
    expect(
      screen.getByRole(`link`, {
        name: `Next.js + Tailwind example`,
      }),
    ).toBeVisible();
  });
});
