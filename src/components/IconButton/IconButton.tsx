import React from 'react';
import styles from './IconButton.module.scss';
import { EditIcon } from '../../assets/icons';
import { IEditButton } from './model';

export const IconButton: React.FC<IEditButton> = ({ onClick, icon, value, className }) => {
  return (
    <button
      onClick={onClick}
      value={`${value ? value : ''}`}
      className={`${styles.IconButton} ${className ? className : ''}`}
    >
      {icon ? icon : <EditIcon />}
    </button>
  );
};
