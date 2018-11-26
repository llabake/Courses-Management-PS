import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  bool,
  shape,
  arrayOf,
  func,
} from 'prop-types';
import { loadCourses, saveCourse } from '../../actions/courseActions';
import CourseForm from "./CourseForm";

export class ManageCoursePage extends Component {
  state = {
    course: Object.assign({}, this.props.course),
    errors: {},
  };

  // eslint-disable-next-line consistent-return
  componentWillReceiveProps = (nextProps) => {
    if (this.props.course.id !== nextProps.course.id) {
      return this.setState({
        course: Object.assign({}, nextProps.course),
      });
    }
  };

  updateCourseState = (event) => {
    const field = event.target.name;
    const { course } = this.state;
    course[field] = event.target.value;
    return this.setState({ course });
  };

  saveCourse = (event) => {
    event.preventDefault();
    this.props.saveCourse(this.state.course);
    this.props.history.push('/courses');
  };

  render() {
    const { course, errors } = this.state;
    const { authors } = this.props;
    return (
      <CourseForm
        course={course}
        errors={errors}
        allAuthors={authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
      />
    );
  }
}

const getCourseById = (courses, id) => {
  const course = courses.filter(element => element.id === id);
  if (course.length) return course[0];
  return null;
};


export const mapStateToProps = (state, { match: { params } }) => {
  const courseId = params.id;
  let course = {
    id: '', watchHref: '', title: '', authorId: '', length: '', category: '',
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => ({
    value: author.id,
    text: `${author.firstName} ${author.lastName}`,
  }));

  return {
    course,
    authors: authorsFormattedForDropdown,
  };
};

export const mapDispatchToProps = dispatch => ({
  // createCourse: course => dispatch(loadCourses()),
  saveCourse: course => dispatch(saveCourse(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);