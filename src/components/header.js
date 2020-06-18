import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <Link
        to="/"
        className="site-profile"
      >
        <img alt={siteTitle} src="https://www.gravatar.com/avatar/b2623db89a42dd363c33d1d4df39654a?s=100" height={100} width={100} />
        <span>{siteTitle}</span>
      </Link>
      <Link to={"/posts/"}>Posts</Link>
      <Link to={"/resume/"}>Resume</Link>
      <Link to={"/search/"}>Search</Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
