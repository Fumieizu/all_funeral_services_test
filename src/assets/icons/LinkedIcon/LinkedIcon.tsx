import React from 'react';
import { ISVGIcon } from '../model';

export const LinkedIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.25 10a2.59 2.59 0 0 1 2.58-2.58h3.34V5.83H5.83a4.17 4.17 0 0 0 0 8.34h3.34v-1.59H5.83A2.59 2.59 0 0 1 3.25 10Zm3.42.83h6.66V9.17H6.67v1.66Zm7.5-5h-3.34v1.59h3.34a2.59 2.59 0 0 1 0 5.16h-3.34v1.59h3.34a4.17 4.17 0 0 0 0-8.34Z"
        fill="#82B284"
      />
    </svg>
  );
};
