import './Filter.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className="filter-label">
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="filter-input"
      />
    </label>
  );
};
