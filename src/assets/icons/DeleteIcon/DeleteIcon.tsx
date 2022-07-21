import React from 'react';
import { ISVGIcon } from '../model';

export const DeleteIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.12 3.63h13.75a.75.75 0 0 1 0 1.5H3.12a.75.75 0 0 1 0-1.5ZM8.13 7.38c.4 0 .74.33.74.75v5a.75.75 0 0 1-1.5 0v-5c0-.42.34-.76.75-.76ZM11.88 7.38c.4 0 .74.33.74.75v5a.75.75 0 0 1-1.5 0v-5c0-.42.34-.76.76-.76Z"
        fill="#D95151"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.37 3.63c.42 0 .75.33.75.75v11.75h9.75V4.38a.75.75 0 0 1 1.5 0v11.87A1.38 1.38 0 0 1 15 17.63H5a1.38 1.38 0 0 1-1.38-1.38V4.37c0-.4.34-.75.75-.75Z"
        fill="#D95151"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.71 1.71a2 2 0 0 1 1.42-.58h3.74a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-1.5 0V3.13a.5.5 0 0 0-.5-.5H8.13a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V3.13A2 2 0 0 1 6.7 1.7Z"
        fill="#D95151"
      />
    </svg>
  );
};
