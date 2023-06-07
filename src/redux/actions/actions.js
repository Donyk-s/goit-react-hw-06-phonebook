

export const addContacts = {
    type: "contacts/addContacts",
    payload: {
      name: "",
      number: "",
    },
  };
  
   
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
