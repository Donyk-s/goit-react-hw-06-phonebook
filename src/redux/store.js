// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";

// // const contactsInitialState = {
// //     contacts: [],
// //     filter: ""
// //   }
// // export const store = configureStore({
// //   reducer: rootReducer,
// // });
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
// import { addContacts } from "./actions/actions";

const contactsInitialState = {
  contacts: [],
  filter: ""
};

const rootReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
      case 'contacts/addContacts':
        return {
          ...state,
          contacts: [...state.contacts, action.payload]
        };
      case 'contacts/delContacts':
        return {
          ...state,
          contacts: state.contacts.filter(contact => !action.payload.includes(contact.id))
        };
      default:
        return state;
    }
  };
  

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
