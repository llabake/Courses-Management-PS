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
import { authorInputValidator } from "../../helpers";
import { loadAuthors, saveAuthor } from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";

export class ManageAuthorPage extends Component {
  state = {
    author: Object.assign({}, this.props.author),
    errors: {},
    saving: false,
    isBlocking: false,
    isValid: false,
  };

  updateAuthorState = (event) => {
    const field = event.target.name;
    const { author } = this.state;
    author[field] = event.target.value;
    return this.setState({ author, isBlocking: true });
  };

  saveAuthor = (event) => {
    event.preventDefault();
    if (!this.validate()) {
      return;
    }
    this.setState({ saving: true });
    this.props.saveAuthor(this.state.author)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  };

  validate() {
    const { errors, isValid } = authorInputValidator(this.state);
    this.setState({ isValid, errors });
    return isValid;
  }

  redirect() {
    this.setState({
      saving: false,
      isBlocking: false,
    });
    toastr.success("Author saved successfully");
    this.props.history.push('/authors');
  }

  render() {
    const {
      author, errors, isBlocking, saving, 
    } = this.state;
    return (
      <div>
        <Prompt
          when={isBlocking}
          message="Are you sure you want to go to leave the page"
        />
        <AuthorForm
          author={author}
          errors={errors}
          onSave={this.saveAuthor}
          saving={saving}
          onChange={this.updateAuthorState}
        />
      </div>
    );
  }
}

export const mapStateToProps = (state, { match: { params } }) => {
  const authorId = params.id;
  let author = {
    id: '', firstName: '', lastName: '',
  };

  if (authorId && state.authors.length > 0) {
    author = state.authors.find(authorObj => authorObj.id === authorId);
  }

  return {
    author,
    authors: state.authors,
  };
};

export const mapDispatchToProps = dispatch => ({
  saveAuthor: author => dispatch(saveAuthor(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
