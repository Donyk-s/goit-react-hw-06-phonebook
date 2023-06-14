import { createSlice } from "@reduxjs/toolkit";


const ContactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts: (state, action) => {
        state.contacts = [...state.contacts, action.payload]
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


