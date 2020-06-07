import React from "react";
import Search from "../components/search/search"
import Layout from "../components/layout";
import SEO from "../components/seo";

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Search" />
      <h1>Search</h1>
      <Search />
    </Layout>
  );
};

export default SearchPage;
