import React from 'react';
import { ISVGIcon } from '../model';

export const ChatIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <g opacity=".9" stroke="#F7F7F7" strokeMiterlimit="22.93" strokeLinecap="round">
        <path
          clipRule="evenodd"
          d="M15.66 4.35A7.95 7.95 0 0 0 10 2 8 8 0 0 0 3.8 15.07a3 3 0 0 1-1.26 1.46.75.75 0 0 0 .22 1.4c.17.03.37.05.56.05.98 0 2.02-.34 2.88-.93a8.01 8.01 0 0 0 9.45-12.7h0Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M6.27 10h7.46M6.27 7.81h7.46M6.27 12.19h7.46" />
      </g>
    </svg>
  );
};
