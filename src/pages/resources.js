import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import PageHeader from '../components/page-header/page-header'

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <PageHeader title={"Resources"} compressed />
    <article className={'container container-content pt-4'}>
      <p className={'pb-0 mb-0'}>Here you can find a collection of cool and useful tools and resources I've found over the years. Previously written posts about these put thought I would combine them now:</p>
      <h2 className={'mb-0'}>Sites / Products / Services</h2>
      <ul className={'full icon-links'}>
        <li><a href="https://explainshell.com/">explainshell.com</a> - Interactive Shell Command explained</li>
        <li><a href="https://carbon.now.sh/">carbon.now.sh</a> - Beautiful code screenshots with Carbon.</li>
        <li><a href="https://www.openpeeps.com/">openpeeps.com</a> - A hand-drawn illustration library.</li>
        <li><a href="http://endless.horse/">endless.horse</a> - Well, an endless horse?</li>
        <li><a href="https://whocanuse.com/">whocanuse.com</a> - It's a tool that brings attention and understanding to how color contrast can affect different people with visual impairments.</li>
        <li><a href="https://www.notion.vip/icons/">notion.vip/icons/</a> - The free icon set from the people behind Notion.app</li>
        <li><a href="https://undraw.co">undraw.co</a> - A collection of open-source illustrations for any idea you can imagine and create.</li>
      </ul>
      <h2 className={'mb-0'}>GitHub projects</h2>
      <ul className={'full icon-links'}>
        <li><a href="https://github.com/simple-icons/simple-icons">simple-icons/simple-icons</a> - SVG Brand Icons</li>
        <li><a href="https://github.com/gregsramblings/google-cloud-4-words">gregsramblings/google-cloud-4-words</a> - Google Cloud Developer's Cheat Sheet</li>
        <li><a href="https://github.com/dropbox/zxcvbn/">dropbox/zxcvbn</a> - Low-Budget Password Strength Estimation</li>
      </ul>
      <h2 className={'mb-0'}>Posts &amp; Articles</h2>
      <ul className="full icon-links">
        <li><a href="https://blog.trello.com/maker-vs-manager-productivity">Maker vs. Manager: How To Schedule For Your Productivity Style</a></li>
        <li><a href="https://bigmedium.com/ideas/only-one-deliverable-matters.html">Only One Deliverable Matters</a></li>
      </ul>
      <h2 className={'mb-0'}>Blogs I follow</h2>
      <ul className={'full'}>
        <li><a href="https://slack.engineering/">https://slack.engineering/</a> - The blog from the Slack.app engineering team</li>
      </ul>
    </article>
  </Layout>
);

export default ResourcesPage;
