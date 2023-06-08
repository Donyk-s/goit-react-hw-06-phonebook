import React from 'react';

import css from './Contactlist.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { delContacts } from 'redux/actions/actions';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const contactsId = useSelector(state => state.contacts.id);
const dispatch = useDispatch()
  return (
    <ul className={`${css.contList} ${contacts.length ? '' : css.emptyList}`}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.listItem}>
          {contact.name}: {contact.number}
          <button
            className={css.myButton}
            onClick={() => dispatch(delContacts(contactsId ))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};



export default ContactList;
