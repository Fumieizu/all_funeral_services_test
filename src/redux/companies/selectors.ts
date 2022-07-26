import { RootState } from '../store';

export const getIsAuth = (state: RootState) => state.companiesReducer.isAuth;

export const getCompaniesById = (state: RootState) => state.companiesReducer.companies;

export const getCompanyById = (state: RootState, id: string) =>
  state.companiesReducer.companies.find((item) => item.id === id);

export const getCompaniesStatus = (state: RootState) => state.companiesReducer.companiesStatus;

export const getError = (state: RootState) => state.companiesReducer.error;

export const getContacts = (state: RootState) => state.companiesReducer.contacts;

export const getContactsStatus = (state: RootState) => state.companiesReducer.contactsStatus;

export const getImageStatus = (state: RootState) => state.companiesReducer.imageStatus;

export const getCompanyIsLoading = (state: RootState) => state.companiesReducer.companyIsLoading;

export const getContactsIsLoading = (state: RootState) => state.companiesReducer.contactsIsLoading;
