import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from './forma/Forma';
import ContactList from './contacklisst/Contactlist';
import Filter from './filter/Filter';
import css from '../components/App.module.css';

export const App = () => {
  const myContacts = useSelector(state => state.contacts.contacts);

  return (
    <div className={css.baseStyle}>
      <Form />
      <ContactList />
      <Filter contacts={myContacts} />
    </div>
  );
};
