import React, { useCallback, useEffect, useState } from 'react';
import styles from './CompanyInfo.module.scss';
import { CheckIcon } from '../../assets/icons';
import { IconButton } from '../IconButton';
import Input from '../Input';
import { ICompanyInfo, IContactValues } from './model';
import { patchCompanies, patchContacts } from '../../redux/companies/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCompanyById, getError, getContacts } from '../../redux/companies/selectors';
import {
  adaptContractFromServer,
  adaptTypeFromServer,
  adaptContractForServer,
  adaptTypeForServer,
  getPhone,
  adaptFullNameForServer,
  adaptPhoneForServer,
  isEmail,
} from '../../common/utils';
import { COMPANY_MOCK_ID } from '../../common/const';

export const CompanyInfo: React.FC<ICompanyInfo> = ({ title, mode }) => {
  const company = useAppSelector((state) => getCompanyById(state, COMPANY_MOCK_ID));
  const contacts = useAppSelector(getContacts);
  const error = useAppSelector(getError);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [infoValues, setInfoValues] = useState({
    name: '',
    contract: '',
    form: '',
    type: '',
  });

  const [contactValues, setContactValues] = useState<IContactValues>({
    fullName: '',
    phone: '',
    email: '',
  });

  const dispatch = useAppDispatch();

  const handleInfoInputs = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;

    setInfoValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleContactInputs = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;

    setContactValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleEditButtonClick = () => {
    setIsEdit((prev) => !prev);
  };

  const handleDoneButtonClick = useCallback(() => {
    if (mode === 'info') {
      const fields = {
        name: infoValues.name,
        businessEntity: infoValues.form,
        contract: adaptContractForServer(infoValues.contract),
        type: adaptTypeForServer(infoValues.type),
      };
      dispatch(patchCompanies({ id: COMPANY_MOCK_ID, fields: fields }));
      setIsEdit(false);
    }

    if (mode === 'contact' && isEmail(contactValues.email)) {
      if (company) {
        const fullName = adaptFullNameForServer(contactValues.fullName);
        const fields = {
          ...fullName,
          phone: adaptPhoneForServer(contactValues.phone),
          email: contactValues.email,
        };
        dispatch(patchContacts({ id: company.contactId, fields: fields }));
      }
      if (isEmail(contactValues.email)) {
        setIsEdit(false);
      }
    }
  }, [company, contactValues, dispatch, infoValues, mode]);

  useEffect(() => {
    if (mode === 'info') {
      if (company) {
        setInfoValues({
          name: company?.name,
          contract: adaptContractFromServer(company.contract),
          form: company?.businessEntity,
          type: adaptTypeFromServer(company.type),
        });
      }
    }
  }, [company, error, mode]);

  useEffect(() => {
    if (mode === 'contact') {
      if (contacts) {
        setContactValues({
          fullName: `${contacts?.lastname} ${contacts?.firstname} ${
            contacts.patronymic ? contacts.patronymic : ''
          }`,
          phone: contacts.phone,
          email: contacts.email,
        });
      }
    }
  }, [contacts, error, mode]);

  return (
    <div className={styles.Container}>
      <div className={styles.TitleWrapper}>
        <h3 className={styles.Title}>{title}</h3>
        {isEdit ? (
          <IconButton onClick={handleDoneButtonClick} icon={<CheckIcon />} />
        ) : (
          <IconButton onClick={handleEditButtonClick} />
        )}
      </div>
      {mode === 'info' && (
        <table className={styles.Table}>
          <tbody>
            <tr>
              <td className={styles.Table_Field}>Полное название:</td>
              {isEdit ? (
                <td className={styles.Table_Value}>
                  {<Input onChange={handleInfoInputs} name={'name'} value={infoValues.name} />}
                </td>
              ) : (
                <td className={styles.Table_Value}>{infoValues.name}</td>
              )}
            </tr>
            <tr>
              <td className={styles.Table_Field}>Договор:</td>
              {isEdit ? (
                <td className={styles.Table_Value}>
                  {
                    <Input
                      onChange={handleInfoInputs}
                      name={'contract'}
                      value={infoValues.contract}
                      mask={'99999 от 99.99.9999'}
                    />
                  }
                </td>
              ) : (
                <td className={styles.Table_Value}>{infoValues.contract}</td>
              )}
            </tr>
            <tr>
              <td className={styles.Table_Field}>Форма:</td>
              {isEdit ? (
                <td className={styles.Table_Value}>
                  {<Input onChange={handleInfoInputs} name={'form'} value={infoValues.form} />}
                </td>
              ) : (
                <td className={styles.Table_Value}>{infoValues.form}</td>
              )}
            </tr>
            <tr>
              <td className={styles.Table_Field}>Тип:</td>
              {isEdit ? (
                <td className={styles.Table_Value}>
                  {<Input onChange={handleInfoInputs} name={'type'} value={infoValues.type} />}
                </td>
              ) : (
                <td className={styles.Table_Value}>{infoValues.type}</td>
              )}
            </tr>
          </tbody>
        </table>
      )}

      {mode === 'contact' && (
        <table className={styles.Table}>
          <tbody>
            <tr>
              <td className={styles.Table_Field}>ФИО:</td>
              {isEdit ? (
                <td className={styles.Table_Value}>
                  {
                    <Input
                      onChange={handleContactInputs}
                      name={'fullName'}
                      value={contactValues.fullName}
                    />
                  }
                </td>
              ) : (
                <td className={styles.Table_Value}>{contactValues.fullName}</td>
              )}
            </tr>
            <tr>
              <td className={styles.Table_Field}>Телефон:</td>
              {isEdit ? (
                <td className={styles.Table_Value}>
                  {
                    <Input
                      onChange={handleContactInputs}
                      name={'phone'}
                      value={contactValues.phone}
                      mask={'+7 (999) 999-99-99'}
                    />
                  }
                </td>
              ) : (
                <td className={styles.Table_Value}>{getPhone(contactValues.phone)}</td>
              )}
            </tr>
            <tr>
              <td className={styles.Table_Field}>Эл. почта:</td>
              {isEdit ? (
                <td className={styles.Table_Value}>
                  {
                    <Input
                      onChange={handleContactInputs}
                      name={'email'}
                      value={contactValues.email}
                      type={'email'}
                      alert={isEmail(contactValues.email) ? '' : 'Email введен неправильно!'}
                    />
                  }
                </td>
              ) : (
                <td className={styles.Table_Value}>{contactValues.email}</td>
              )}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
