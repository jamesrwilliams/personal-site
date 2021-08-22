import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import PropTypes from 'prop-types';

import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import '../../styles/index.css';

interface LayoutProps {
    children: React.ReactNode,
    footerHidden?: boolean;
}

const LayoutContainer = styled.div`
    background: #eee;
    padding: 0;
`;

const Layout = ({ children, footerHidden = false }: LayoutProps) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              buildTime,
              siteMetadata {
                  title,
                  buildId,
              }
          }
      }
  `);

  const buildID = data.site.siteMetadata.buildId;

  const globalJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.site.siteMetadata.title,
    url: 'https://jamesrwilliams.ca',
    logo: 'https://jamesrwilliams.ca/favicon.png',
  };

  return (
    <LayoutContainer>
      <Helmet>
        <meta name="last-deployed" content={data.site.buildTime} />
        <script type="application/ld+json">
          { JSON.stringify(globalJSONLD, null, 4) }
        </script>
      </Helmet>
      <Header />
      {children}
      { !footerHidden ? <Footer buildID={buildID} buildTime={data.site.buildTime} /> : '' }
    </LayoutContainer>
  );
};

Layout.propTypes = {
  /*
    Optionally hide the footer on certain pages.
     */
  footerHidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
