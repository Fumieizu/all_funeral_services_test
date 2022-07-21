import React from 'react';
import { ISVGIcon } from '../model';

export const EditIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.34 2.6c.69-.7 1.8-.7 2.48 0l1.7 1.7c.7.68.7 1.8 0 2.48L6.2 18.1a.75.75 0 0 1-.53.22H2.53a.75.75 0 0 1-.75-.75v-3.12c0-.2.08-.4.22-.53L13.34 2.59Zm1.42 1.05a.25.25 0 0 0-.36 0L3.28 14.77v2.06h2.07L16.47 5.72c.1-.1.1-.26 0-.36l-1.71-1.7Z"
        fill="#82B284"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m5.8 17.16-2.84-2.83 1.07-1.06 2.82 2.82-1.06 1.07ZM14.99 7.96l-2.83-2.83 1.06-1.06 2.83 2.83-1.06 1.06Z"
        fill="#82B284"
      />
    </svg>
  );
};
