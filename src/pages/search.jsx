import React from 'react';
import Search from '../components/search/search';
import Layout from '../components/layouts/Layout';
import SEO from '../components/utilities/seo';

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Search />
  </Layout>
);

export default SearchPage;
