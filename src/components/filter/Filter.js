import React from 'react';
import PropTypes from 'prop-types';
import css from './FilterStyle.module.css';

const Filter = ({ searchQuery, onChangeInput }) => {
  
  const handleFilterChange = event => {
    onChangeInput(event.target.value);
    
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

Filter.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Filter;
