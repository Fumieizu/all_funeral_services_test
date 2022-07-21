import React from 'react';
import { ISVGIcon } from '../model';

export const RotationIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#82B284">
        <path d="M17.51 3.29c.42 0 .75.34.75.75v3.75c0 .41-.33.75-.75.75h-3.75a.75.75 0 0 1 0-1.5h3v-3c0-.41.34-.75.75-.75Z" />
        <path d="M11.2 4a6.12 6.12 0 1 0 3.13 10.33.75.75 0 0 1 1.06 1.06 7.62 7.62 0 1 1 0-10.78l-.5.5.5-.5 2.65 2.65a.75.75 0 0 1-1.06 1.06l-2.65-2.65a6.12 6.12 0 0 0-3.14-1.68Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
