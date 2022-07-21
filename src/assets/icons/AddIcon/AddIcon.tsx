import React from 'react';
import { ISVGIcon } from '../model';

export const AddIcon: React.FC<ISVGIcon> = ({ width = 16, height = 16, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.9 8c0-.33.27-.6.6-.6h11a.6.6 0 1 1 0 1.2h-11a.6.6 0 0 1-.6-.6Z"
        fill="#82B284"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.9c.33 0 .6.27.6.6v11a.6.6 0 1 1-1.2 0v-11c0-.33.27-.6.6-.6Z"
        fill="#82B284"
      />
    </svg>
  );
};
