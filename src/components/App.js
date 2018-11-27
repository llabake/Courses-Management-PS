import React, { Component } from 'react';
import { connect } from "react-redux";

import PropTypes from 'prop-types';
import Header from "./common/Header";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export const mapStateToProps = state => ({
  loading: state.ajaxCallsInProgress > 0,
});

// export default App;
export default connect(mapStateToProps)(App);
