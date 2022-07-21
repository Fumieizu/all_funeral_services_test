import React from 'react';
import { ISVGIcon } from '../model';

export const BuildingIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 16.67h1.67v1.66H.83v-1.66H2.5V2.5a.83.83 0 0 1 .83-.83h13.34a.83.83 0 0 1 .83.83v14.17Zm-1.67 0V3.33H4.17v13.34h11.66Zm-9.16-7.5h2.5v1.66h-2.5V9.17Zm0-3.34h2.5V7.5h-2.5V5.83Zm0 6.67h2.5v1.67h-2.5V12.5Zm4.16 0h2.5v1.67h-2.5V12.5Zm0-3.33h2.5v1.66h-2.5V9.17Zm0-3.34h2.5V7.5h-2.5V5.83Z"
        fill="#82B284"
      />
    </svg>
  );
};
