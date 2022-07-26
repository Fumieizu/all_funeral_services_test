import React from 'react';
import styles from './SubMenu.module.scss';
import { BuildingIcon } from '../../assets/icons';

export const SubMenu: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>честный агент</h1>
        <span className={styles.SubTitle}>менеджер процесса</span>
      </div>
      <ul className={styles.List}>
        <li className={styles.List_Item}>
          <BuildingIcon />
          <p className={styles.List_ItemText}>Организации</p>
        </li>
      </ul>
    </div>
  );
};
