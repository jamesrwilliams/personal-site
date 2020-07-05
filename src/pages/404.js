import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import PageHeader from '../components/page-header/page-header'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageHeader title={"404 Page Not found"} />
    <main>
      <div className="container container-content">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>The page you are looking for does not exists. Please check your URL address or vist my homepage or try my blog.</p>
      </div>
    </main>
  </Layout>
);

export default NotFoundPage;
