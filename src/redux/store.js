import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import { ContactsReducer } from '../redux/contactsSlice/ContactsSlice';
import {FilterReducer} from '../redux/filterSlice/FilterSlice.js'

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, ContactsReducer);

export const store = configureStore({
  reducer:{
    contacts: persistedReducer,
    filter: FilterReducer,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store);
