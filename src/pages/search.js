import React from "react";
import Search from "../components/search/search"
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeader from '../components/page-header/page-header'

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Search" />
      <Search />
    </Layout>
  );
};

export default SearchPage;
