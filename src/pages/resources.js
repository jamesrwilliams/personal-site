import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeader from '../components/page-header/page-header'

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <PageHeader title={"Resources"} />
    <article className={'container'}>
      <p>Here you can find a collection of cool and useful tools and resources I've found over the years. Previously written posts about these put thought I would combine them now:</p>
      <ul className={'full icon-links'}>
        <li className={'divider'}>Example Divider</li>
        <li><a href="https://github.com/simple-icons/simple-icons">simple-icons - SVG Brand Icons</a></li>
        <li><a href="https://carbon.now.sh/">Beautiful code screenshots with Carbon.</a></li>
        <li><a href="https://explainshell.com/">Interactive Shell Command explained</a></li>
        <li><a href="https://github.com/dropbox/zxcvbn/">dropbox/zxcvbn - Low-Budget Password Strength Estimation</a></li>
        <li className={'divider'}>Posts/Articles</li>
        <li><a href="https://blog.trello.com/maker-vs-manager-productivity">Maker vs. Manager: How To Schedule For Your Productivity Style</a></li>
      </ul>
    </article>
  </Layout>
);

export default ResourcesPage;
