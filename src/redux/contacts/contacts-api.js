import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61fe50b5a58a4e00173c97d8.mockapi.io/contacts",
  }),
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    fetchContacts: build.query({
      query: () => "",
      providesTags: ["Contacts"],
    }),
    addContact: build.mutation({
      query: (contact) => ({
        url: "",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    removeContact: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
