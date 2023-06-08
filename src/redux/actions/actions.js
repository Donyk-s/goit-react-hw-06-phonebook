

import { nanoid } from 'nanoid';

export const addContacts = (name, number) => ({
  type: 'contacts/addContacts',
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

   
export const delContacts = contactsId => {
    return {
      type: "contacts/delContacts",
      payload: contactsId , 
    };
  };
  
  export const setStatusFilter = value => {
    return {
      type: "filters/setStatusFilter",
      payload: value,
    };
  };
