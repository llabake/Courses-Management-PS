import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {
  static courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  state = {
    course: {
      title: "",
    },
  };

  redirectToAddCoursePage = () => {
    const { history } = this.props;
    history.push('/course');
  };

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  courses: state.courses,
});

export const mapDispatchToProps = dispatch => ({
  createCourse: course => dispatch(courseActions(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
