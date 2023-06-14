// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
// import css from './Forma.module.css';
// import { useDispatch } from 'react-redux';
// import { addContacts } from '../../redux/contactsSlice/ContactsSlice';

// export const Form = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();
//   const handleChange = event => {
//     const { name, value } = event.currentTarget

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (name.includes(' ') || number.includes(' ')) {
//       return;
//     }
//     const contact = {
//       id: nanoid(),
//       name: name.trim(),
//       number: number.trim(),
//     };
//     dispatch(addContacts(contact));
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <div className={css.container}>
//       Phonebook
//       <form onSubmit={handleSubmit} className={css.formBox}>
//         <label className={css.labelInput}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <br />
//         <label className={css.labelInput}>
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             onChange={handleChange}
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button type="submit" className={css.myButton}>
//           Add Contact
//         </button>
//       </form>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Forma.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice/ContactsSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isContactExists, setIsContactExists] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
    );

    if (isExists) {
      setIsContactExists(true);
      return;
    }

    const contact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    dispatch(addContacts(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setIsContactExists(false);
  };

  return (
    <div className={css.container}>
      Phonebook
      <form onSubmit={handleSubmit} className={css.formBox}>
        <label className={css.labelInput}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={css.labelInput}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        {isContactExists && <p className={css.errorMessage}>Contact already exists!</p>}
        <button type="submit" className={css.myButton}>
          Add Contact
        </button>
      </form>
    </div>
  );
};
