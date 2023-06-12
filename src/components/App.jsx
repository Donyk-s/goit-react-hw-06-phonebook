// import React, {  useState } from 'react';
// import { Form } from './forma/Forma';
// import ContactList from './contacklisst/Contactlist';
// import Filter from './filter/Filter';
// import css from '../components/App.module.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContacts, delContacts } from '../redux/contactsSlice/ContactsSlice';

// export const App = () => {
//   const myContacts = useSelector(state => state.contacts.contacts);
//   const dispatch = useDispatch();
//   // const [filter, setFilter] = useState('');
 
//   const [searchQuery, setSearchQuery] = useState('');
//   const handleSearchInputChange = event => {
//     setSearchQuery(event.target.value);
//   };
  

//   // const handleFilterChange = value => {
//   //   setFilter(value);
//   //   console.log(value);
//   // };
  
//   const formSubmitHandler = (data) => {
//     const isContactExists = myContacts.some(
//       (contact) => {
//         if (typeof contact.name === 'string' && typeof data.name === 'string') {
//           return contact.name.toLowerCase() === data.name.toLowerCase();
//         }
//         return false;
//       }
//     );
//     if (isContactExists) {
//       alert(`${data.name} is already in contacts.`);
//       return;
//     }
//     dispatch(addContacts({ ...data }));
//   };
//   const handleDeleteContact = id => {
//     dispatch(delContacts(id));
//   };
//   const filteredContacts = filteredContacts.filter(contact => {
//     const name = contact.name.toLowerCase();
//     const query = searchQuery.toLowerCase();
//     return name.includes(query);
//   });
  


//   // const filteredContacts = myContacts.filter(({ name }) => {
//   //   if (typeof name === 'string') {
//   //     return name.toLowerCase().includes(filter.toLowerCase());
//   //   }
//   //   return false;
//   // });
//   return (
//     <div className={css.baseStyle}>
//       <Form onSubmit={formSubmitHandler} />
//       <ContactList
//         contacts={filteredContacts}
//         onDeleteContact={handleDeleteContact}
//       />
//       <Filter searchQuery={searchQuery} onChangeInput={handleSearchInputChange} />

//       {/* <Filter filter={filter} onChangeInput={handleFilterChange} /> */}
//     </div>
//   );
// };


import React, { useState } from 'react';
import { Form } from './forma/Forma';
import ContactList from './contacklisst/Contactlist';
import Filter from './filter/Filter';
import css from '../components/App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, delContacts } from '../redux/contactsSlice/ContactsSlice';

export const App = () => {
  const myContacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const formSubmitHandler = (data) => {
    const isContactExists = myContacts.some(
      (contact) => {
        if (typeof contact.name === 'string' && typeof data.name === 'string') {
          return contact.name.toLowerCase() === data.name.toLowerCase();
        }
        return false;
      }
    );
    if (isContactExists) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(addContacts({ ...data }));
  };

  const handleDeleteContact = id => {
    dispatch(delContacts(id));
  };

  const filteredContacts = myContacts.filter(contact => {
    const name = contact.name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return name.includes(query);
  });

  return (
    <div className={css.baseStyle}>
      <Form onSubmit={formSubmitHandler} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
      <Filter searchQuery={searchQuery} onChangeInput={handleSearchInputChange} />
    </div>
  );
};







