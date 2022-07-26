import React, { useCallback, useState } from 'react';
import { IHeader } from './model';
import { ArrowIcon, LinkedIcon, DeleteIcon, RotationIcon } from '../../assets/icons';
import styles from './Header.module.scss';
import { IconButton } from '../IconButton';
import { deleteCompany } from '../../redux/companies/asyncActions';
import { useAppDispatch } from '../../redux/hooks';
import { COMPANY_MOCK_ID } from '../../common/const';
import { DeletePopup } from '../DeletePopup';

export const Header: React.FC<IHeader> = ({ text }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handlePopupClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handlePopupOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleDeleteClick = useCallback(() => {
    dispatch(deleteCompany(COMPANY_MOCK_ID));
    setIsOpen(false);
  }, [dispatch]);

  return (
    <div className={styles.Container}>
      <div className={styles.Content_Wrapper}>
        <IconButton icon={<ArrowIcon />} className={`${styles.Button} ${styles.Button__Arrow}`} />
        <p className={styles.Text}>{text}</p>
      </div>
      <div className={`${styles.Content_Wrapper} ${styles.Content_Wrapper__Tools}`}>
        <IconButton icon={<LinkedIcon />} className={styles.Button} />
        <IconButton icon={<RotationIcon />} className={styles.Button} />
        <IconButton icon={<DeleteIcon />} onClick={handlePopupOpen} className={styles.Button} />
      </div>
      {isOpen && (
        <DeletePopup isOpen={isOpen} onClose={handlePopupClose} onClick={handleDeleteClick} />
      )}
    </div>
  );
};
