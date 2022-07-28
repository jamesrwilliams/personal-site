import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero, Layout } from '../components';
import SEO from '../components/utilities/seo';

const { siteDescription } = require('../data/metadata');

const IndexPage = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allMdx(limit: 5, sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        nodes {
          ...blogFields
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO description={siteDescription} />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
