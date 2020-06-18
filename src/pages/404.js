import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeader from '../components/page-header/page-header'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageHeader title={"404: Not found"} />
    <main>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
);

export default NotFoundPage;
