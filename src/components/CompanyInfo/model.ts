export interface ICompanyInfo {
  title: string;
  mode: 'info' | 'contact';
}

export interface IInfoValues {
  name: string;
  businessEntity: string;
  contract: string;
  type: string;
}

export interface IContactValues {
  fullName: string;
  phone: string;
  email: string;
}
