import React from 'react';

export interface IInput {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  isTitle?: boolean;
  className?: string;
  name?: string;
  mask?: string;
  type?: string;
  alert?: string;
}
