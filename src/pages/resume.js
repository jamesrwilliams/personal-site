import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeader from '../components/page-header/page-header'

const ResumePage = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <PageHeader title={"Resume"} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default ResumePage;
