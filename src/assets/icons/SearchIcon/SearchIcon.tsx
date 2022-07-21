import React from 'react';
import { ISVGIcon } from '../model';

export const SearchIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.61" cy="8.61" r="6.5" stroke="#F7F7F7" strokeWidth="2" />
      <path d="M4.6 8.6a4 4 0 0 1 4-4" stroke="#F7F7F7" strokeLinecap="round" />
      <path
        d="m12.25 14.46 2.12-2.12 3.55 3.54A1.5 1.5 0 1 1 15.81 18l-3.56-3.54Z"
        fill="#F7F7F7"
      />
    </svg>
  );
};
