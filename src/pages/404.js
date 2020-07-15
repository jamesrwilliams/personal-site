import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout wrapperClass={'page-404'}>
    <SEO title="404: Not found" />
    <div className="container container-content">
      <h1 className={'larger'}>404 Page Not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>The page you are looking for does not exists. Please check your URL address or vist my homepage or try my blog.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
