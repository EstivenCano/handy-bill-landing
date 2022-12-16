import { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  title?: string;
  titleIcon?: ReactNode;
}

export const CardHeader: FC<Props> = ({ className, title, titleIcon }) => {
  return (
    <div className="flex justify-between">
      <h2
        className={`font-bold text-transparent bg-clip-text bg-gradient-to-bl from-primary-100 to-primary-600 text-shadow pb-2 ${className}`}
      >
        {title}
      </h2>
      {titleIcon}
    </div>
  );
};
