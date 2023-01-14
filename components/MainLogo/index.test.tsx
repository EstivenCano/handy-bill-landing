import { render, screen } from '@testing-library/react';

import { MainLogo } from '.';

const mainContainer = 'main-container';

describe('MainLogo functionality', () => {
  test('Should be visible after timeout', async () => {
    render(<MainLogo isInViewPort={true} />);

    expect(screen.getByTestId(mainContainer)).toBeVisible();
  });
});
