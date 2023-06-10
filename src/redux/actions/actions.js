
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction('contacts/addContacts')
export const delContacts = createAction('contacts/delContacts')
export const setStatusFilter  = createAction('contacts/setStatusFilter')
// export const addContacts = (name, number) => ({
//   type: 'contacts/addContacts',
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

   
// export const delContacts = contactsId => {
//     return {
//       type: "contacts/delContacts",
//       payload: contactsId , 
//     };
//   };
  
    // export const setStatusFilter = value => {
    //   return {
    //     type: "filters/statusFilter",
    //     payload: value,
    //   };
    // };
