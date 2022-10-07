import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useComponentVisible } from './useComponentVisible';

describe('useComponentVisible should handle visibility of a component', () => {
  test('When user clicks outside the component, isComponentVisible should be false', async () => {
    const MockComponent = () => {
      const { ref, isComponentVisible } = useComponentVisible(true);
      return (
        <>
          <div ref={ref}>{isComponentVisible && <h1>isVisible</h1>}</div>
          <button>Test</button>
        </>
      );
    };
    render(<MockComponent />);

    expect(screen.getByRole('heading')).toBeVisible();

    userEvent.click(screen.getByRole('button'));

    await waitForElementToBeRemoved(() => screen.getByRole('heading'));
  });

  test('setIsComponentVisible should change value of isComponentVisible', async () => {
    const MockComponent = () => {
      const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);
      return (
        <>
          <div ref={ref}>{isComponentVisible && <h1>isVisible</h1>}</div>
          <button onClick={() => setIsComponentVisible(true)}>Test</button>
        </>
      );
    };
    render(<MockComponent />);

    expect(screen.queryByRole('heading')).toBeNull();

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => screen.getByRole('heading'));

    expect(screen.getByRole('heading')).toBeVisible();
  });
});
