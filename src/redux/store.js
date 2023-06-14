import { persistStore, persistReducer,  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ContactsReducer } from '../redux/contactsSlice/ContactsSlice';
import {FilterReducer} from '../redux/filterSlice/FilterSlice.js'
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  contacts: ContactsReducer,
  filter: FilterReducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
