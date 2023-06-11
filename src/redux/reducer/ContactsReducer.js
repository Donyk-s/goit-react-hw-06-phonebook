import { createReducer } from "@reduxjs/toolkit";
import { addContacts, delContacts } from "redux/actions/Actions";


const initialState = {
  contacts: [],
};

export const ContactsReducer = createReducer(initialState, {
  [addContacts]:((state, action) => {
    state.contacts.push(action.payload);
  }),
  [delContacts]: ((state, action) => {
    state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
  }),
});


// export const ContactsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'contacts/addContacts':
//         return [...state, action.payload];
//       case 'contacts/delContacts':
//         const updatedContacts = state.filter(contact => contact.id !== action.payload);
//         return updatedContacts;
//       default:
//         return state;
//     }
//   };