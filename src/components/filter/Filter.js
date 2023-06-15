import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice/FilterSlice';
import css from './FilterStyle.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const handleFilterChange = event => {
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
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

export default Filter;
