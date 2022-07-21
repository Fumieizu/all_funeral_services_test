import React from 'react';
import { ISVGIcon } from '../model';

export const ExitIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.96 5.55 17.4 10l-4.45 4.45M6.23 10h10.52M11.8 18.13H3.12V1.88h8.68"
        stroke="#F7F7F7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
