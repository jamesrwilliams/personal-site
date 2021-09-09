import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GlobalStyles from '../../theme/globalStyles';

import '../../styles/index.css';

interface LayoutProps {
    children: React.ReactNode,
}

const LayoutContainer = styled.div`
  padding: 0;
  height: 100%;
`;

const Layout = ({ children }: LayoutProps) => {
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
      <GlobalStyles />
      <Helmet>
        <meta name="netlify-last-deployed" content={data.site.buildTime} />
        <meta name="netlify-build-id" content={buildID} />
        <script type="application/ld+json">
          { JSON.stringify(globalJSONLD, null, 4) }
        </script>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
