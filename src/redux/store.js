import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer,
  middleware: defaultMiddleware =>
    defaultMiddleware().concat(contactsApi.middleware),
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
