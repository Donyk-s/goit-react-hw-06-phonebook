// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import css from './FilterStyle.module.css';

// const Filter = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const contacts = useSelector(state => state.contacts.contacts);

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleFilterChange = event => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <>
//       <label className={css.labelInput}>
//         Find contacts by name
//         <br />
//         <input
//           className={css.input}
//           onChange={handleFilterChange}
//           value={searchQuery}
//           type="text"
//           name="filter"
//         />
//       </label>

//       <ul>
//         {filteredContacts.map(contact => (
//           <li key={contact.id}>{contact.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Filter;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice/FilterSlice';
import css from './FilterStyle.module.css';

const Filter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    setSearchQuery(event.target.value);
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <label className={css.labelInput}>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={handleFilterChange}
          value={searchQuery}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

export default Filter;
