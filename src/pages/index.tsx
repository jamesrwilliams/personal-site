import React from 'react';
import { Hero, Layout } from '../components';
import {Meta} from "../components/utilities/Meta";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export const Head = () => (
  <Meta />
)

export default IndexPage;
