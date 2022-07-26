import React from 'react';
import { ISVGIcon } from '../model';

export const SpinnerIcon: React.FC<ISVGIcon> = ({ width = 32, height = 32, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="1s"
        repeatCount="indefinite"
      />
      <path
        d="M29.96 15.17A14.1 14.1 0 0 0 22.1 3.22 14.54 14.54 0 0 0 6.97 5.38a14.01 14.01 0 0 0-4.63 13.77 13.91 13.91 0 0 0 9.84 10.37c5.87 1.66 11.24-1.16 14.55-5.97-2.97 3.98-7.52 6.64-12.56 5.72a12.97 12.97 0 0 1-10.34-9.7A12.55 12.55 0 0 1 9.78 5.96c4.88-2.82 11.74-1.74 14.97 3.07A9.96 9.96 0 0 1 26.4 13c.25 1.16.17 2.4.33 3.57.17 1.08 1.08 2.49 2.32 1.74 1.07-.66.99-2.07.9-3.15.09.58 0-.33 0 0Z"
        fill="#82B284"
      />
    </svg>
  );
};
