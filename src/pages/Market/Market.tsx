import React, { useEffect, useState, useCallback } from 'react';
import styles from './Market.module.scss';
import { CheckIcon } from '../../assets/icons';
import { SubMenu } from '../../components/SubMenu';
import Header from '../../components/Header';
import { IconButton } from '../../components/IconButton';
import CompanyInfo from '../../components/CompanyInfo';
import { CompanyImages } from '../../components/CompanyImages';
import Input from '../../components/Input';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  fetchAuth,
  fetchCompanies,
  fetchContacts,
  patchCompanies,
} from '../../redux/companies/asyncActions';
import {
  getCompaniesById,
  getCompaniesStatus,
  getCompanyById,
  getCompanyIsLoading,
  getContactsIsLoading,
  getContactsStatus,
  getError,
  getImageStatus,
  getIsAuth,
} from '../../redux/companies/selectors';
import { setAuth } from '../../redux/companies/companiesSlice';
import { COMPANY_MOCK_ID } from '../../common/const';
import { Loader } from '../../components/Loader';
import { Toast } from '../../components/Toast';
import { Footer } from '../../components/Footer';

export const Market: React.FC = () => {
  const company = useAppSelector((state) => getCompanyById(state, COMPANY_MOCK_ID));
  const companyStatus = useAppSelector(getCompaniesStatus);
  const contactsStatus = useAppSelector(getContactsStatus);
  const imagesStatus = useAppSelector(getImageStatus);
  const error = useAppSelector(getError);
  const isCompanyLoading = useAppSelector(getCompanyIsLoading);
  const isContactsLoading = useAppSelector(getContactsIsLoading);
  const isAuth = useAppSelector(getIsAuth);

  const isDataLoading = isCompanyLoading && isContactsLoading;
  const isError =
    contactsStatus === 'error' || companyStatus === 'error' || imagesStatus === 'error';

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>('');

  const companies = useAppSelector(getCompaniesById);

  const dispatch = useAppDispatch();

  const handleEditButtonClick = () => {
    setIsEdit((prev) => !prev);
  };

  const handleInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setTitleValue(value);
  }, []);

  const handleDoneButton = useCallback(() => {
    const fields = {
      shortName: titleValue,
    };
    if (company) {
      dispatch(patchCompanies({ id: company.id, fields: fields }));
    }
    setIsEdit(false);
  }, [company, dispatch, titleValue]);

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      dispatch(fetchAuth('USERNAME'));
    } else {
      dispatch(setAuth());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchCompanies(COMPANY_MOCK_ID));
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    const id = company?.contactId;
    if (id && isAuth) {
      dispatch(fetchContacts(id));
    }
  }, [company?.contactId, dispatch, isAuth]);

  useEffect(() => {
    if (company && companyStatus === 'success' && !error) {
      setTitleValue(company.shortName);
    }
  }, [company, error, companyStatus]);

  return (
    <main className={styles.Container}>
      <SubMenu />
      <div className={styles.MainContent}>
        {!isDataLoading ? (
          <Loader />
        ) : (
          <>
            <Header text={'к списку юридических лиц'} />
            <div className={styles.ContentWrapper}>
              {companies.length ? (
                <>
                  <div className={styles.TitleContainer}>
                    {isEdit ? (
                      <Input isTitle value={titleValue} onChange={handleInputChange} />
                    ) : (
                      <h2 className={styles.Title}>{titleValue}</h2>
                    )}
                    {isEdit ? (
                      <IconButton
                        icon={<CheckIcon />}
                        onClick={handleDoneButton}
                        className={styles.EditButton}
                      />
                    ) : (
                      <IconButton onClick={handleEditButtonClick} className={styles.EditButton} />
                    )}
                  </div>
                  <CompanyInfo title={'общая информация'} mode={'info'} />
                  <CompanyInfo title={'контактные данные'} mode={'contact'} />
                  <CompanyImages />
                </>
              ) : (
                <h2>не найдено информации о компании</h2>
              )}
              <Footer />
            </div>
          </>
        )}
      </div>
      <>{isError && <Toast />}</>
    </main>
  );
};
