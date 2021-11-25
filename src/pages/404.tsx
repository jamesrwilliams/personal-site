import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layouts/Layout';
import SEO from '../components/utilities/seo';
import PageHeader from '../components/PageHeader/PageHeader';
import Container from '../components/Container';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" path="404" />
    <PageHeader title="404 Page Not Found" />
    <Container>
      <p style={{ fontSize: '2rem', marginBottom: '10rem' }}>
        You just hit a route that does not exist, or it did and now does not. Please check the URL
        or visit the <Link to="/">homepage</Link> or try my <Link to="/posts">posts</Link>.
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
