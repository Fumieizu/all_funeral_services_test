import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICompaniesList } from './types';

const initialState: ICompaniesList = {
  companies: [],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {},
});

export default companiesSlice.reducer;
