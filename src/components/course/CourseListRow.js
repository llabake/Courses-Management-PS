/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseListRow = ({ course, onDelete }) => {
  const deleteCourse = () => (
    onDelete(course.id)
  );
  return (
    <tr>
      <td><a href={`/course/${course.watchHref}`} target="_blank" rel="noopener noreferrer">Watch</a></td>
      <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td
        className="btn btn-xs btn-danger"
        onClick={deleteCourse}
      >
Delete
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CourseListRow;
