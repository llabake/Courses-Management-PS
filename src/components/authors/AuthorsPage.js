import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from "toastr";
import NoCourses from "../common/NoCourses";
import AuthorList from "./AuthorList";
import { loadAuthors, deleteAuthor } from "../../actions/authorActions";

class AuthorsPage extends Component {
  static authorRow(author, index) {
    return <div key={index}>{author.id}</div>;
  }

  state = {
    author: {},
  };

  redirectToAddAuthorPage = () => {
    const { history } = this.props;
    history.push('/author');
  };

  authorCourseExist = (courses, authorId) => courses.some(course => (course.authorId === authorId));

  deleteAuthor = (authorId) => {
    const { history, courses } = this.props;
    if (!this.authorCourseExist(courses, authorId)) {
      this.props.deleteAuthor(authorId).then(() => {
        toastr.success('Author deleted successfully');
        history.push('/authors');
      });
    } else {
      toastr.warning(`This author can not be deleted as they have a course`);
    }
  };

  render() {
    const { authors, loading } = this.props;
    return (
      <div>
        <h1>Authors</h1>
        <input
          type="submit"
          value="Add Author"
          className="btn btn-primary"
          onClick={this.redirectToAddAuthorPage}
        />
        { !loading && !authors.length
          ? (
            <NoCourses
              text="There are no Authors now. Click the Add Author button to add an author" />
          )
          : (
            <AuthorList
            onDelete={this.deleteAuthor}
            authors={authors}
          />
          )
        }
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  courses: state.courses,
  loading: state.ajaxCallsInProgress > 0,
  authors: state.authors,
});

export const mapDispatchToProps = dispatch => ({
  deleteAuthor: author => dispatch(deleteAuthor(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
