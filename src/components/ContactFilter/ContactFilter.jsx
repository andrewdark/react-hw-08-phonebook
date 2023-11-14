import css from './ContactFilter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filtersSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.form}>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <input
        id="filter"
        className={css.inp}
        type="text"
        name="filter"
        onChange={event => {
          dispatch(setFilter(event.target.value.toLowerCase()));
        }}
        required
      />
    </div>
  );
};
