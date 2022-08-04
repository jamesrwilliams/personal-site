import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GlobalStyles from '../../theme/globalStyles';
import ThemeContext from '../../context/ThemeContext';

import { themes } from '../../theme/themes';

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
    <ThemeContext.Consumer>
      {({darkModeActive}) => (
        <ThemeProvider theme={themes[darkModeActive ? 'dark' : 'light']}>
          <LayoutContainer>
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
            <GlobalStyles />
          </LayoutContainer>
        </ThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
