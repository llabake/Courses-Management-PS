import React from 'react';
import {
  string,
  func,
} from 'prop-types';

const TextInput = ({
  name, label, onChange, placeholder, value, error, 
}) => {
  let wrapperClass = 'form-group';
  if (error && error.length) {
    wrapperClass = `${wrapperClass} has-error`;
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      {
        error && <div className="alert alert-danger">{error}</div>
      }
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
