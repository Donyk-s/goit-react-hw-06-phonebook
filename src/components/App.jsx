import React, { useEffect, useState } from 'react';
import { Form } from './forma/Forma';
import ContactList from './contacklisst/Contactlist';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';
import css from '../components/App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {addContacts, delContacts } from '../redux/contactsSlice/ContactsSlice';

export const App = () => {
  const myContacts = useSelector(state => state.contacts.contacts);
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
  const handleDeleteContact = id => {
    dispatch(delContacts(id));
  };

 
  const filteredContacts = myContacts.filter(({ name }) => {
    if (typeof name === 'string') {
      return name.toLowerCase().includes(filter.toLowerCase());
    }
    return false;
  });
  return (
    <div className={css.baseStyle}>
      <Form onSubmit={formSubmitHandler} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
      <Filter filter={filter} onChangeInput={handleFilterChange} />
    </div>
  );
};


