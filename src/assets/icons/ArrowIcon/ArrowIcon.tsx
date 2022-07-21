import React from 'react';
import { ISVGIcon } from '../model';

export const ArrowIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#82B284">
        <path d="M2.25 10c0-.41.34-.75.75-.75h14a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" />
        <path d="M2.25 10c0-.2.08-.39.22-.53l6-6a.75.75 0 1 1 1.06 1.06L4.06 10l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1-.22-.53Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
