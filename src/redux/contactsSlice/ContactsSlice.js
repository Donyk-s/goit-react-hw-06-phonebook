import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const ContactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts(state, action) {
      const newContact = {
        ...action.payload,
        id: nanoid(),
      };
      state.contacts.push(newContact);
    },
    delContacts(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const ContactsReducer = ContactsSlice.reducer;
export const { addContacts, delContacts } = ContactsSlice.actions;
