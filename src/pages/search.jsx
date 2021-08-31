import React from 'react';
import Search from '../components/search/search';
import Layout from '../components/Layout/Layout';
import SEO from '../components/utilities/seo';
import Container from '../components/Container';

const SearchPage = () => (
  <Layout>
    <Container>
      <SEO title="Search" />
      <Search />
    </Container>
  </Layout>
);

export default SearchPage;
