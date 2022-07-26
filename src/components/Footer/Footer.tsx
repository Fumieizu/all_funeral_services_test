import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <p className={styles.Text}>© 1992 - 2020 Честный Агент © Все права защищены.</p>
        <a className={styles.Link} href="tel: +74951502112">
          8 (495) 150-21-12
        </a>
      </div>
    </footer>
  );
};
