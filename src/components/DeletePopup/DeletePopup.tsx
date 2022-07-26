import React from 'react';
import ReactModal from 'react-modal';
import styles from './DeletePopup.module.scss';
import { IDeletePopup } from './model';

export const DeletePopup: React.FC<IDeletePopup> = ({ isOpen, onClose, onClick }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={'В архив?'}
      className={styles.Container}
      ariaHideApp={false}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <p className={styles.Title}>Удалить карточку</p>
      <p className={styles.Text}>Отправить карточку организации в архив?</p>
      <div className={styles.ButtonContainer}>
        <button onClick={onClose} className={styles.Button}>
          отмена
        </button>
        <button onClick={onClick} className={`${styles.Button} ${styles.Button__delete}`}>
          удалить
        </button>
      </div>
    </ReactModal>
  );
};
