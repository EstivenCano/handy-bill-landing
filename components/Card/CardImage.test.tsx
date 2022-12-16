import { render, screen } from '@testing-library/react';
import Image from 'next/image';

import { CardImage } from './CardImage';

describe('CardImage should display content', () => {
  test('If the image exists, the correct content must be displayed.', () => {
    render(
      <CardImage
        image={
          <Image
            src="/../../public/images/handyBill.svg"
            alt="test image"
            width={50}
            height={50}
          />
        }
      />,
    );
    expect(screen.getByRole('img')).toBeVisible();
  });

  test('If the image does not exists, content does not be displayed.', () => {
    render(<CardImage />);
    expect(screen.queryByText('img')).toBeNull();
  });
});
