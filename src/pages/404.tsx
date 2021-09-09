import React from 'react';

import {Link} from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/utilities/seo';
import PageHeader from '../components/PageHeader/PageHeader';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" path="404" />
    <PageHeader title="404: Not Found" />
    <div className="container">
      <div>
        <h1>404 Page Not Found</h1>
        <p>
          You just hit a route that does not exist... the sadness. Please check the URL or visit my
          <Link to="/">homepage</Link>
          {' '}
          or try my
          <Link to="/posts">posts</Link>
          .
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
