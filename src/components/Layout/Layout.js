import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children, wrapperClass, footerHidden = false }) => {

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
    "@context" : "http://schema.org",
    "@type" : "Organization",
    "name" : data.site.siteMetadata.title,
    "url" : "https://jamesrwilliams.ca",
    "logo": "https://jamesrwilliams.ca/favicon.png",
  }

  return (
    <>
      <Helmet>
        <meta name={'last-deployed'} content={data.site.buildTime} />
        <script type="application/ld+json">
          { JSON.stringify(globalJSONLD, null, 4) }
        </script>
      </Helmet>
      <Header />
      <main className={wrapperClass}>
      {children}
      </main>
      { !footerHidden ? <Footer buildID={buildID} buildTime={data.site.buildTime} /> : '' }
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperClass: PropTypes.string
};

export default Layout;
