import { combineReducers } from 'redux';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { contactsApi } from './contactsApi';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
