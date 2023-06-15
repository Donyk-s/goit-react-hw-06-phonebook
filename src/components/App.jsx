import React from 'react';
import { Form } from './forma/Forma';
import ContactList from './contacklisst/Contactlist';
import Filter from './filter/Filter';
import css from '../components/App.module.css';

export const App = () => {
  return (
    <div className={css.baseStyle}>
      <Form />
      <ContactList />
      <Filter/>
    </div>
  );
};
