import PropTypes from 'prop-types';
import './Filter.css';
import React from 'react';

const Filter = ({ value, onChange }) => {
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
