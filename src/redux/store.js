import { configureStore } from "@reduxjs/toolkit";
import { ContactsReducer } from '../redux/reducer/ContactsReducer';
import { FilterReducer } from "./reducer/FilterReducer";

export const store = configureStore({ 
  reducer:{
    contacts: ContactsReducer,
  filter: FilterReducer
  }  
})

