import React from 'react';
import { ISVGIcon } from '../model';

export const CheckIcon: React.FC<ISVGIcon> = ({ width = 20, height = 20, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.707 5.29279C16.8946 5.48031 17 5.73462 17 5.99979C17 6.26495 16.8946 6.51926 16.707 6.70679L8.6998 14.7068C8.51211 14.8943 8.25757 14.9996 7.99217 14.9996C7.72677 14.9996 7.47223 14.8943 7.28454 14.7068L3.28096 10.7068C3.09864 10.5182 2.99776 10.2656 3.00004 10.0034C3.00232 9.74119 3.10758 9.49038 3.29316 9.30497C3.47873 9.11956 3.72977 9.01439 3.9922 9.01211C4.25463 9.00983 4.50746 9.11063 4.69623 9.29279L7.99217 12.5858L15.2917 5.29279C15.4794 5.10532 15.7339 5 15.9993 5C16.2647 5 16.5193 5.10532 16.707 5.29279Z"
        fill="#82B284"
      />
    </svg>
  );
};
