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
 const contactsInitialState = {
     contacts: [],
     filter: ""
 }
 const rootReducer = (state = contactsInitialState) =>{
  return state;
 }
 const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);