import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <div className="jumbotron">
      <h3 className="text-center" id="text">This is embarrassing, something is missing......</h3>
      <p className="text-center"><Link to="/">Home</Link></p>
    </div>
  </div>
);

export default NotFound;
