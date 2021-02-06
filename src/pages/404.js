import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/utilities/seo'
import PageHeader from '../components/page-header/page-header'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout wrapperClass={'page-404'}>
    <SEO title="404: Not found" />
    <PageHeader title={'404 Page Not Found'} compressed={true} />
    <div className="container-content container">
      <p>You just hit a route that doesn&#39;t exist... the sadness. Please check your URL address or visit my <Link to={"/"}>homepage</Link> or try my <Link to={"/posts"}>posts</Link>.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
