import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { getError } from '../../redux/companies/selectors';

export const Toast: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [errorText, setErrorText] = useState<string>('');
  const error = useAppSelector(getError);

  useEffect(() => {
    if (error) {
      setErrorText(error);
    }
  }, [error]);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  return (
    <>
      {isVisible &&
        createPortal(
          <div className={styles.Container}>
            <p className={styles.Text}>Что-то пошло не так, проверьте подключение к интернету!</p>
            <p>{`Текст ошибки: ${errorText}`}</p>
          </div>,
          document.body,
        )}
    </>
  );
};
