import React from 'react';
import { ISVGIcon } from '../model';

export const MarketIcon: React.FC<ISVGIcon> = ({ width = 20, height = 18, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 10.04v5.63h.83v1.66H1.67v-1.66h.83v-5.63A3.75 3.75 0 0 1 1.36 5l2.26-3.92a.83.83 0 0 1 .72-.41h11.32a.83.83 0 0 1 .72.41l2.25 3.9a3.75 3.75 0 0 1-1.13 5.05Zm-1.67.6a3.75 3.75 0 0 1-3.12-1.13 3.75 3.75 0 0 1-5.42 0 3.75 3.75 0 0 1-3.12 1.13v5.03h11.66v-5.03Zm-11-8.3L2.8 5.83A2.08 2.08 0 0 0 6.52 7.7a.83.83 0 0 1 1.55 0 2.08 2.08 0 0 0 3.87 0 .83.83 0 0 1 1.54 0 2.08 2.08 0 1 0 3.72-1.86l-2.02-3.5H4.83Z"
        fill="#F7F7F7"
      />
    </svg>
  );
};
