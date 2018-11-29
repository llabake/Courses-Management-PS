import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from "toastr";
import { deleteCourse } from '../../actions/courseActions';
import CourseList from './CourseList';
import { sortCourses } from "../../helpers";
import NoCourses from "../common/NoCourses";

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

  deleteCourse = (courseId) => {
    const { history } = this.props;
    this.props.deleteCourse(courseId).then(() => {
      toastr.success('Course deleted successfully');
      history.push('/courses');
    });
  };

  render() {
    const { courses, loading } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        { !loading && !courses.length
          ? (
            <NoCourses
              text="There are no courses now. Click the Add Course button to add courses" />
          )
          : <CourseList courses={courses} onDelete={this.deleteCourse} />}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { courses } = state;
  sortCourses(courses);
  return {
    courses,
    loading: state.ajaxCallsInProgress > 0,
  };
};


export const mapDispatchToProps = dispatch => ({
  deleteCourse: course => dispatch(deleteCourse(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
