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
      <div className="container content-container">
        <ul className={'link-icons'}>
          <li>
            <a target={'_blank'} rel={'noopener'} href="https://docs.google.com/document/d/1T1Ohlnh0rdVUGVhlCK3H4n6h2Nr_MxqMuLz92wJI4bg/edit">View Resume</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default ResumePage;
