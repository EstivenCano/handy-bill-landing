import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  return (
    <div className="styled-input-container">
      <input {...props} className="styled-input" />
      <span className="styled-input-span bottom"></span>
      <span className="styled-input-span right"></span>
      <span className="styled-input-span top"></span>
      <span className="styled-input-span left"></span>
    </div>
  );
};
