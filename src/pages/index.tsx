import React from 'react';
import { Hero, Layout } from '../components';
import SEO from '../components/utilities/seo';

import { siteDescription } from '../data/metadata';

const IndexPage = () => {
  return (
    <Layout>
      <SEO description={siteDescription} />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
