import React from 'react';
import {
  string,
  shape,
  arrayOf,
  bool,
  func,
  object,
} from 'prop-types';
import TextInput from '../common/TextInput';

const AuthorForm = ({
  author,
  onSave,
  onChange,
  saving,
  errors,
}) => (
  <form>
    <h1>Manage Authors</h1>
    <TextInput
        name="firstName"
        label="First Name"
        value={author.firstName}
        onChange={onChange}
        error={errors.firstName}
      />

    <TextInput
      name="lastName"
      label="Last Name"
      value={author.lastName}
      onChange={onChange}
      error={errors.lastName}
      />

    <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
  </form>
);

export default AuthorForm;
