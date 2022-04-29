import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  removeContact,
} from "./contacts-operations";
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    },
    [fetchContacts.pending]: (state) => {
      state.loading = true;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = [...state.items, payload];
    },
    [addContact.pending]: (state) => {
      state.loading = true;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [removeContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== payload);
    },
    [removeContact.pending]: (state) => {
      state.loading = true;
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
