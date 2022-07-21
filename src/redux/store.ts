import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';

export const store = configureStore({
  reducer: {
    companiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
