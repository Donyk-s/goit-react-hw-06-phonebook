import React, { useState, useEffect } from 'react';
import { Form } from './forma/Forma';
import ContactList from './contacklisst/Contactlist';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';
import css from '../components/App.module.css'
import { useSelector } from "react-redux";


export const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  ]);
  const myContacts = useSelector(state => state.contacts);
 


  const [filter, setFilter] = useState('');
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
  
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const handleFilterChange = value => setFilter(value);

  const formSubmitHandler = (data) => {
    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );
  
    if (isContactExists) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
  
    const newContact = { ...data, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

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

