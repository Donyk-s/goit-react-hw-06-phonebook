import { createSlice } from "@reduxjs/toolkit";

const ContactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts: (state, action) => {
        state.contacts.push(action.payload)
      },
   
    delContacts(state, action) {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addContacts, delContacts } = ContactsSlice.actions;
export const ContactsReducer = ContactsSlice.reducer;



