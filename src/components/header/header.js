import { graphql, Link, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types";
import React from "react";
import './header.scss';
import GatsbyImage from 'gatsby-image'

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid (maxWidth: 50) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  `);

  const _image = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === 'profile_472 × 473.jpg'
  );

  if (!_image) {
    return null
  }

  return (
    <header className={'accent-line-top container'}>
        <Link
          to="/"
          className="site-profile"
        >
          <GatsbyImage fluid={_image.node.fluid} />
          <span>{siteTitle}</span>
        </Link>
        <nav>
          <Link activeClassName={'active'} to={"/posts/"}>Posts</Link>
          <Link activeClassName={'active'} to={"/resources/"}>Resources</Link>
          <Link activeClassName={'active'} className={'search-icon'} to={"/search/"} title={'Search'}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" aria-label="Search" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </Link>
        </nav>
    </header>
  );

}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
