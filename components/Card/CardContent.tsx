import { FC, ReactNode } from 'react';
import { match } from 'ts-pattern';

interface Props {
  content?: ReactNode;
  className?: string;
}

export const CardContent: FC<Props> = ({ content, className }) => {
  return (
    <span>
      {match(content)
        .with(undefined, () => null)
        .otherwise(() => (
          <span>
            <hr className="my-5 border-content/20" />
            <div className={`flex  ${className}`}>{content}</div>
          </span>
        ))}
    </span>
  );
};
