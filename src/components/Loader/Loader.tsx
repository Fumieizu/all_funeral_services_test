import React from 'react';
import styles from './Loader.module.scss';
import { SpinnerIcon } from '../../assets/icons';

export const Loader: React.FC = () => {
  return (
    <div className={styles.Container}>
      <SpinnerIcon />
    </div>
  );
};
