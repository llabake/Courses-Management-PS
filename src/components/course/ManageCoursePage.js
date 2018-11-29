import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Prompt } from 'react-router-dom';
import toastr from "toastr";
import {
  bool,
  shape,
  arrayOf,
  func,
} from 'prop-types';
import { saveCourse } from '../../actions/courseActions';
import CourseForm from "./CourseForm";
import { inputValidator } from "../../helpers";

export class ManageCoursePage extends Component {
  state = {
    course: Object.assign({}, this.props.course),
    errors: {},
    saving: false,
    isBlocking: false,
    isValid: false,
  };

  // eslint-disable-next-line consistent-return
  componentWillReceiveProps = (nextProps) => {
    if (this.props.course.id !== nextProps.course.id) {
      return this.setState({
        course: Object.assign({}, nextProps.course),
      });
    }
  };

  validate() {
    const { errors, isValid } = inputValidator(this.state);
    this.setState({ isValid, errors });
    return isValid;
  }


  updateCourseState = (event) => {
    const field = event.target.name;
    const { course } = this.state;
    course[field] = event.target.value;
    return this.setState({ course, isBlocking: true });
  };

  redirect() {
    this.setState({
      saving: false,
      isBlocking: false,
    });
    toastr.success("Course saved successfully");
    this.props.history.push('/courses');
  }

  saveCourse = (event) => {
    event.preventDefault();
    if (!this.validate()) {
      return;
    }
    this.setState({ saving: true });
    this.props.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  };

  render() {
    const { course, errors, isBlocking } = this.state;
    const { authors } = this.props;
    return (
      <div>
        <Prompt
          when={isBlocking}
          message="Are you sure you want to go to leave the page"
        />
        <CourseForm
          course={course}
          errors={errors}
          allAuthors={authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving}
        />
      </div>
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
  saveCourse: course => dispatch(saveCourse(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
