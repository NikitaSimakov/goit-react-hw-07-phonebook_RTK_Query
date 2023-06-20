import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react/';

export const contactsApi = createApi({
  reducerPath: 'contact',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://648819000e2469c038fcf0e4.mockapi.io/api/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: 'contacts' }),
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
