import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from "prop-types";
import LoadingDots from "./LoadingDots";

const Header = ({ loading, courses }) => (
  <nav>
    <Link to="/" className="active">Home</Link>
    {' | '}
    <Link to="/courses" className="active">Courses
      <span className="label label-primary">{loading ? '' : courses.length}</span>
    </Link>
    {' | '}
    <Link to="/about" className="active">About</Link>
    {loading && <LoadingDots interval={100} dots={20} />}
  </nav>
);

Header.propTypes = {
  loading: bool.isRequired,
};

export default Header;
