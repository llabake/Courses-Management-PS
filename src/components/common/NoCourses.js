import React from 'react';
import PropTypes from 'prop-types';

const NoCourses = ({ text }) => (
  <div className="text-center">
    <h4>
      {text}
    </h4>
  </div>
);

NoCourses.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoCourses;
