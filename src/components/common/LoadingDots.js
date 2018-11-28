import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends Component {
  state = {
    frame: 1,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        // eslint-disable-next-line react/no-access-state-in-setstate
        frame: this.state.frame + 1,
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';

    while (dots > 0) {
      text += '.';
      // eslint-disable-next-line no-plusplus
      dots--;
    }

    return (
      <span {...this.props}>
        {text}
&nbsp;
      </span>
    );
  }
}

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number,
};

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3,
};

export default LoadingDots;
