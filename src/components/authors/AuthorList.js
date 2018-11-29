import React from 'react';
import PropTypes from 'prop-types';
import AuthorListRow from "./AuthorListRow";

const AuthorList = ({ authors, onDelete }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {authors.map(author => (
        <AuthorListRow
          key={author.id}
          author={author}
          onDelete={onDelete} />
      ))}
    </tbody>
  </table>
);

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AuthorList;
