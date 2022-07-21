import React from 'react';
import { ISVGIcon } from '../model';

export const HomeIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.18 7.54 18.7 9a1 1 0 0 1 .24 1.07.92.92 0 0 1-.86.62h-1.3v7.75c0 .31-.23.56-.52.56H3.74a.54.54 0 0 1-.53-.56V10.7H1.92a.92.92 0 0 1-.86-.62A1 1 0 0 1 1.3 9l8.08-7.75a.89.89 0 0 1 1.24 0L13.5 4.5l-.04-1.8c0-.3.24-.55.53-.55h2.66c.29 0 .53.25.53.56v4.83Z"
        stroke="#F7F7F7"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
