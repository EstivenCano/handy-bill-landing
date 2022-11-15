import { FC, ReactNode } from 'react';
import { match } from 'ts-pattern';

interface Props {
  image?: ReactNode;
  className?: string;
}

export const CardImage: FC<Props> = ({ image, className }) => {
  return (
    <>
      {match(image)
        .with(undefined, () => null)
        .otherwise(() => (
          <div className={`relative ${className}`}>{image}</div>
        ))}
    </>
  );
};
