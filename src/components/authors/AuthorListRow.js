/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthorListRow = ({ author, onDelete }) => {
  const deleteAuthor = () => (
    onDelete(author.id)
  );
  return (
    <tr>
      <td><Link to={`/author/${author.id}`}>{author.id}</Link></td>
      <td>
        {author.firstName} 
        {' '}
        {author.lastName}
      </td>
      <td
        className="btn btn-xs btn-danger"
        onClick={deleteAuthor}
      >
        Delete
      </td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AuthorListRow;
