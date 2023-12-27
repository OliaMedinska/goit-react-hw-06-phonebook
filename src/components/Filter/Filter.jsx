import './Filter.css';
import { useDispatch } from 'react-redux';
import { setFilter } from './../../redux/filtersSlice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <label className="filter-label">
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        className="filter-input"
      />
    </label>
  );
};
