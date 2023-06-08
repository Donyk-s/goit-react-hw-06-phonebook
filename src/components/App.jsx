// import React, { useState, useEffect } from 'react';
// import { Form } from './forma/Forma';
// import ContactList from './contacklisst/Contactlist';
// import { nanoid } from 'nanoid';
// import Filter from './filter/Filter';
// import css from '../components/App.module.css'
// import { useSelector, useDispatch } from "react-redux";


// export const App = () => {
  
//   const myContacts = useSelector(state => state.contacts);
//   const dispatch = useDispatch();


//   const [filter, setFilter] = useState('');
//   useEffect(() => {
//     const savedContacts = localStorage.getItem('contacts');
  
//     if (savedContacts !== null) {
//       setContacts(JSON.parse(savedContacts));
//     }
//   }, []);
  
//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);
//   const handleFilterChange = value => setFilter(value);

//   const formSubmitHandler = (data) => {
//     const isContactExists = contacts.some(
//       (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
//     );
  
//     if (isContactExists) {
//       alert(`${data.name} is already in contacts.`);
//       return;
//     }
  
//     const newContact = { ...data, id: nanoid() };
//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };
  

//   const handleDeleteContact = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };

//   // const filteredContacts = contacts.filter(contact =>
//   //   contact.name.toLowerCase().includes(filter.toLowerCase())
//   // );

//   return (
//     <div className={css.baseStyle}>
//       <Form onSubmit={formSubmitHandler} />
//       <ContactList
//         contacts={myContacts}
//         onDeleteContact={handleDeleteContact}
//       />
//       <Filter filter={filter} onChangeInput={handleFilterChange} />
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react';
import { Form } from './forma/Forma';
import ContactList from './contacklisst/Contactlist';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';
import css from '../components/App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/actions/actions';

export const App = () => {
  const myContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
  
    if (savedContacts !== null) {
      dispatch(addContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(myContacts));
  }, [myContacts]);

  const handleFilterChange = value => setFilter(value);
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
  
    const newContact = { ...data, id: nanoid() };
    dispatch(addContacts([newContact]));
  };
    // const formSubmitHandler = (data) => {
    //   const isContactExists = myContacts.some(
    //     (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    //   );
    
    //   if (isContactExists) {
    //     alert(`${data.name} is already in contacts.`);
    //     return;
    //   }
    
    //   const newContact = { ...data, id: nanoid() };
    //   dispatch(addContacts([newContact]));
    // };
    
  const handleDeleteContact = id => {
    // Implement deletion logic using Redux action
  };

  return (
    <div className={css.baseStyle}>
      <Form onSubmit={formSubmitHandler} />
      <ContactList
        contacts={myContacts}
        onDeleteContact={handleDeleteContact}
      />
      <Filter filter={filter} onChangeInput={handleFilterChange} />
    </div>
  );
};

