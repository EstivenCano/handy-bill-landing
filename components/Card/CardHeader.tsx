import { FC } from 'react';

interface Props {
  title?: string;
  className?: string;
}

export const CardHeader: FC<Props> = ({ title, className }) => {
  return (
    <h2
      className={`font-bold text-transparent bg-clip-text bg-gradient-to-bl from-primary-100 to-primary-600 text-shadow pb-2 ${className}`}
    >
      {title}
    </h2>
  );
};
