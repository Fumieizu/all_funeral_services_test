import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '../../common/const';
import axios from '../../axios';
import { ICompanyFields, IContactsFields } from './types';

export const fetchAuth = createAsyncThunk(ApiRoutes.Auth, async (name: string) => {
  const result = await axios.get(`${ApiRoutes.Auth}/?user=${name}`);
  window.localStorage.setItem('token', result.headers.authorization);
  axios.defaults.headers.common['Authorization'] = result.headers.authorization;
});

export const fetchCompanies = createAsyncThunk(`${ApiRoutes.Companies}/get`, async (id: string) => {
  const { data } = await axios.get(`${ApiRoutes.Companies}/${id}`);

  return data;
});

export const patchCompanies = createAsyncThunk(
  `${ApiRoutes.Companies}/patch`,
  async ({ id, fields }: { id: string; fields: ICompanyFields }) => {
    await axios.patch(`${ApiRoutes.Companies}/${id}`, fields);
  },
);

export const deleteCompany = createAsyncThunk(
  `${ApiRoutes.Companies}/delete`,
  async (id: string) => {
    await axios.delete(`${ApiRoutes.Companies}/${id}`);
  },
);

export const fetchContacts = createAsyncThunk(`${ApiRoutes.Contacts}`, async (id: string) => {
  const { data } = await axios.get(`${ApiRoutes.Contacts}/${id}`);

  return data;
});

export const patchContacts = createAsyncThunk(
  `${ApiRoutes.Contacts}/patch`,
  async ({ id, fields }: { id: string; fields: IContactsFields }) => {
    await axios.patch(`${ApiRoutes.Contacts}/${id}`, fields);
  },
);

export const postImages = createAsyncThunk(
  `${ApiRoutes.Companies}/image`,
  async ({ id, files }: { id: string; files: File }) => {
    const formData = new FormData();
    formData.append('file', files);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post(`${ApiRoutes.Companies}/${id}/image`, formData, config);
    return data;
  },
);

export const deleteImage = createAsyncThunk(
  `${ApiRoutes.Companies}/image/delete`,
  async ({ id, name }: { id: string; name: string }) => {
    await axios.delete(`${ApiRoutes.Companies}/${id}/image/${name}`);
  },
);
