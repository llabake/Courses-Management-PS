import React from 'react';
import {
  string,
  func,
  arrayOf,
  object,
} from 'prop-types';

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  options,
  error,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    {error && <div className="alert alert-danger">{error}</div>}
    <div className="field">
      <select
        name={name}
        value={value}
        className="form-control"
        onChange={onChange}
      >
        <option value="">{defaultOption}</option>
        {
          options.map(option => (
            <option
              value={option.value}
              key={option.value}
            >
              {option.text}
            </option>
          ))
        }
      </select>
    </div>
  </div>
);

export default SelectInput;
