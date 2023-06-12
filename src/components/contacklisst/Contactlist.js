// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { delContacts } from 'redux/actions/Actions';
// import css from './Contactlist.module.css';

// const ContactList = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const dispatch = useDispatch();

//   const handleDeleteContact = id => {
//     dispatch(delContacts(id));
//   };

//   return (
//     <ul className={`${css.contList} ${contacts.length ? '' : css.emptyList}`}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id} className={css.listItem}>
//           <p>Name: {name}</p>
//           <p>Number: {number}</p>
//           <button
//             className={css.myButton}
//             onClick={() => handleDeleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delContacts } from '../../redux/contactsSlice/ContactsSlice';
import css from './Contactlist.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(delContacts(id));
  };

  return (
    <ul className={`${css.contList} ${contacts.length ? '' : css.emptyList}`}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          <button
            className={css.myButton}
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
