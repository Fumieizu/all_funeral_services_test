import React, { ReactNode } from 'react';

export interface IEditButton {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
  className?: string;
  icon?: ReactNode;
}
