import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

export const TextArea: FC<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
> = (props) => {
  return (
    <div className="styled-input-container">
      <textarea {...props} className="styled-input" />
      <span className="styled-input-span bottom mb-1"></span>
      <span className="styled-input-span right mb-1"></span>
      <span className="styled-input-span top mb-1"></span>
      <span className="styled-input-span left mb-1"></span>
    </div>
  );
};
