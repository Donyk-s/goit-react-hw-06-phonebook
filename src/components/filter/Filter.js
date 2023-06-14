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
