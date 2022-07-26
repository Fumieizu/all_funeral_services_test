export interface IContract {
  no: string;
  issue_date: string;
}

export interface ICompanyFields {
  name?: string;
  businessEntity?: string;
  contract?: IContract;
  type?: string[];
  shortName?: string;
}

export interface IContactsFields {
  lastname?: string;
  firstname?: string;
  patronymic?: string;
  phone?: string;
  email?: string;
}

export interface IPhoto {
  name: string;
  filepath: string;
  thumbpath: string;
}

export interface ICompaniesList {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: IContract;
  type: string[];
  status: string;
  photos: IPhoto[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICompanies {
  companies: ICompaniesList[];
  contacts: IContacts | null;
  companiesStatus: 'loading' | 'success' | 'error';
  contactsStatus: 'loading' | 'success' | 'error';
  imageStatus: null | 'loading' | 'success' | 'error';
  companyIsLoading: boolean;
  contactsIsLoading: boolean;
  error: string | undefined | null;
  isAuth: boolean;
}

export interface IContacts {
  id: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
