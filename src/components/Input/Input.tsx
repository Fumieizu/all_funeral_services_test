import React from 'react';
import { IInput } from './model';
import InputMask from 'react-input-mask';
import styles from './Input.module.scss';

export const Input: React.FC<IInput> = ({
  onChange,
  type = 'text',
  name,
  mask,
  isTitle,
  className,
  value,
  alert,
}) => {
  return (
    <label className={styles.Label}>
      <>
        {mask ? (
          <InputMask
            mask={mask}
            type={type}
            className={`${styles.Input} ${isTitle ? styles.Input__title : ''} ${
              className ? className : ''
            }`}
            onChange={onChange}
            value={value}
            name={name}
          />
        ) : (
          <input
            type="text"
            className={`${styles.Input} ${isTitle ? styles.Input__title : ''} ${
              className ? className : ''
            }`}
            onChange={onChange}
            value={value}
            name={name}
          />
        )}
      </>
      {isTitle && <span className={styles.Input_Text}>title text</span>}
      {alert && <span className={styles.Input_Alert}>{alert}</span>}
    </label>
  );
};
