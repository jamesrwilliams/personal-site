import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import './header.scss';

const Header = ({ siteTitle }) => (
  <header className={'accent-line-top'}>
    <div className="container">
      <Link
        to="/"
        className="site-profile"
      >
        <span>{siteTitle}</span>
      </Link>
      <nav>
        <Link activeClassName={'active'} to={"/posts/"}>Posts</Link>
        <Link activeClassName={'active'} to={"/search/"}>Search</Link>
      </nav>
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
