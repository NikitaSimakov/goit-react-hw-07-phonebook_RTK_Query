import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react/';

export const contactsApi = createApi({
  reducerPath: 'contact',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://648819000e2469c038fcf0e4.mockapi.io/api/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: 'contacts' }),
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({ url: `contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: 'contacts',
        body: { name, number },
        method: 'POST',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
