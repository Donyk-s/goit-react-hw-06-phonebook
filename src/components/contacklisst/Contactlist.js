import { useDispatch, useSelector } from 'react-redux';
import { delContacts } from '../../redux/contactsSlice/ContactsSlice';
import css from './Contactlist.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.filter)
  const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))
 
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(delContacts(id));
  };
  return (
    <ul className={`${css.contList} ${contacts.length ? '' : css.emptyList}`}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          <button className={css.myButton} onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

