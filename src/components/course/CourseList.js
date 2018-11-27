import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";

const CourseList = ({ courses, onDelete }) => (
  <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {courses.map(course => (
        <CourseListRow
        key={course.id}
        course={course}
        onDelete={onDelete} />
      ))}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
