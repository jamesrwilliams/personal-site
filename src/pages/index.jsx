import React from 'react';
import { Hero, Layout } from '../components';
import SEO from '../components/utilities/seo';

const { siteDescription } = require('../data/metadata');

const IndexPage = () => {
  return (
    <Layout>
      <SEO description={siteDescription} />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
