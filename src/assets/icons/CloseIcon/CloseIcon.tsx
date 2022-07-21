import React from 'react';
import { ISVGIcon } from '../model';

export const CloseIcon: React.FC<ISVGIcon> = ({ width = 12, height = 12, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.2 2.07 5.13 6 1.2 9.93l.87.87L6 6.87l3.93 3.93.87-.87L6.87 6l3.93-3.93-.87-.87L6 5.13 2.07 1.2l-.87.87Z"
        fill="#F7F7F7"
      />
    </svg>
  );
};
