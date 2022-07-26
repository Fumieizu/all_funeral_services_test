import React, { useRef, useCallback } from 'react';
import styles from './CompanyImages.module.scss';
import { AddIcon, CloseIcon } from '../../assets/icons';
import { IconButton } from '../IconButton';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCompanyById, getImageStatus } from '../../redux/companies/selectors';
import { COMPANY_MOCK_ID } from '../../common/const';
import { deleteImage, postImages } from '../../redux/companies/asyncActions';

export const CompanyImages: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const company = useAppSelector((state) => getCompanyById(state, COMPANY_MOCK_ID));
  const imageStatus = useAppSelector(getImageStatus);
  const dispatch = useAppDispatch();

  const handleChangeFile = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const files = evt.target.files;
      if (files && company) {
        dispatch(postImages({ id: company.id, files: files[0] }));
      }
    },
    [company, dispatch],
  );

  const handleDeleteButton = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>): void => {
      const value = evt.currentTarget.value;
      if (company) {
        dispatch(deleteImage({ id: company.id, name: value }));
      }
    },
    [company, dispatch],
  );

  return (
    <div className={styles.Container}>
      <div className={styles.TitleWrapper}>
        <h3 className={styles.Title}>приложенные фото</h3>
      </div>
      {company?.photos.length ? (
        <ul className={styles.List}>
          {company?.photos.map(({ thumbpath, name }) => (
            <li key={name} className={styles.List_item}>
              <img src={thumbpath} width="160" height="160" alt="фото организации" />
              <div className={styles.List_itemInfo}>
                <p className={styles.List_itemInfo_text}>Надгробный камень.jpg</p>
                <span className={styles.List_itemInfo_date}>11 июня 2018</span>
              </div>
              <IconButton
                icon={<CloseIcon width={'12'} height={'12'} />}
                onClick={handleDeleteButton}
                value={name}
                className={styles.DeleteButton}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.Empty}>
          <p className={styles.Empty_Text}>Добавьте фото</p>
        </div>
      )}
      <button
        disabled={imageStatus === 'loading'}
        onClick={() => inputFileRef?.current?.click()}
        className={styles.AddButton}
      >
        <span className={styles.AddButton_icon}>
          <AddIcon />
        </span>
        добавить изображение
      </button>
      <input ref={inputFileRef} name="file" type="file" onChange={handleChangeFile} hidden />
    </div>
  );
};
