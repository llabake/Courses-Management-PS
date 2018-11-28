import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import Header from "./common/Header";

class App extends Component {
  render() {
    const { loading, courses } = this.props;
    return (
      <div className="container-fluid">
        <Header loading={loading} courses={courses} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export const mapStateToProps = state => ({
  loading: state.ajaxCallsInProgress > 0,
  courses: state.courses
});

export default withRouter(connect(mapStateToProps)(App));
