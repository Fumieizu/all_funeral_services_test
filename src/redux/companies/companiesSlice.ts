import { createSlice } from '@reduxjs/toolkit';
import { ICompanies, IContacts } from './types';
import {
  deleteCompany,
  deleteImage,
  fetchAuth,
  fetchCompanies,
  fetchContacts,
  patchCompanies,
  patchContacts,
  postImages,
} from './asyncActions';

const initialState: ICompanies = {
  companies: [],
  contacts: null,
  companiesStatus: 'loading',
  contactsStatus: 'loading',
  imageStatus: null,
  companyIsLoading: false,
  contactsIsLoading: false,
  error: null,
  isAuth: false,
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    //Auth
    builder.addCase(fetchAuth.fulfilled, (state) => {
      state.isAuth = true;
    });
    //Companies get
    builder.addCase(fetchCompanies.pending, (state) => {
      state.companiesStatus = 'loading';
      state.companies = [];
    });
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companiesStatus = 'success';
      state.companies = [action.payload];
      state.companyIsLoading = true;
    });
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      state.companiesStatus = 'error';
      state.error = action.error.message;
      state.companies = [];
    });
    //Companies patch
    builder.addCase(patchCompanies.pending, (state) => {
      state.companiesStatus = 'loading';
    });
    builder.addCase(patchCompanies.fulfilled, (state, action) => {
      const index = state.companies.findIndex((item) => item.id === action.meta.arg.id);
      if (index !== -1) {
        state.companies = state.companies.map((item) => ({
          ...item,
          ...action.meta.arg.fields,
        }));
      }
      state.error = null;
      state.companiesStatus = 'success';
    });
    builder.addCase(patchCompanies.rejected, (state, action) => {
      state.error = action.error.message;
      state.companiesStatus = 'error';
      console.log(action);
    });
    //Companies delete
    builder.addCase(deleteCompany.pending, (state) => {
      state.companiesStatus = 'loading';
    });
    builder.addCase(deleteCompany.fulfilled, (state, action) => {
      const index = state.companies.findIndex((item) => item.id === action.meta.arg);
      if (index !== -1) {
        state.companies.splice(index, 1);
      }
      state.companiesStatus = 'success';
    });
    builder.addCase(deleteCompany.rejected, (state, action) => {
      state.error = action.error.message;
      state.companiesStatus = 'error';
    });
    //Contacts get
    builder.addCase(fetchContacts.pending, (state) => {
      state.contactsStatus = 'loading';
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contactsStatus = 'success';
      state.contacts = action.payload;
      state.contactsIsLoading = true;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.contactsStatus = 'error';
      state.contacts = null;
      state.error = action.error.message;
    });
    //Contacts patch
    builder.addCase(patchContacts.pending, (state) => {
      state.contactsStatus = 'loading';
    });
    builder.addCase(patchContacts.fulfilled, (state, action) => {
      state.contacts = { ...state.contacts, ...(action.meta.arg.fields as IContacts) };
      state.contactsStatus = 'success';
    });
    builder.addCase(patchContacts.rejected, (state, action) => {
      state.error = action.error.message;
      state.contactsStatus = 'error';
    });
    //Images post
    builder.addCase(postImages.pending, (state, action) => {
      state.error = action.payload;
      state.imageStatus = 'loading';
    });
    builder.addCase(postImages.fulfilled, (state, action) => {
      const findItem = state.companies.find((item) => item.id === action.meta.arg.id);
      if (findItem) {
        findItem.photos = [...findItem.photos, action.payload];
      }
      state.error = null;
      state.imageStatus = 'success';
    });
    builder.addCase(postImages.rejected, (state, action) => {
      state.error = action.error.message;
      state.imageStatus = 'error';
    });
    //Image Delete
    builder.addCase(deleteImage.pending, (state) => {
      state.imageStatus = 'loading';
    });
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      const findItem = state.companies.find((item) => item.id === action.meta.arg.id);
      if (findItem) {
        findItem.photos = findItem.photos.filter((item) => item.name !== action.meta.arg.name);
      }
      state.imageStatus = 'success';
    });
    builder.addCase(deleteImage.rejected, (state, action) => {
      state.error = action.error.message;
      state.imageStatus = 'error';
    });
  },
});

export const { setAuth } = companiesSlice.actions;

export default companiesSlice.reducer;
