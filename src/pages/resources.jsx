import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/utilities/seo'
import PageHeader from '../components/PageHeader/PageHeader'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <PageHeader title={"Resources"} compressed />
    <section className={'container'}>
      <article className={'prose prose-lg pt-4'}>
        <p className={'pb-0 mb-0'}>Here you can find a collection of cool and useful tools and resources I've found:</p>
        <h2 className={'mb-0'}>Sites / Products / Services</h2>
        <ul className={'full icon-links'}>
          <li><OutboundLink href="https://explainshell.com/">explainshell.com</OutboundLink> - Interactive Shell Command explained</li>
          <li><OutboundLink href="https://carbon.now.sh/">carbon.now.sh</OutboundLink> - Beautiful code screenshots with Carbon.</li>
          <li><OutboundLink href="https://www.openpeeps.com/">openpeeps.com</OutboundLink> - A hand-drawn illustration library.</li>
          <li><OutboundLink href="http://endless.horse/">endless.horse</OutboundLink> - Well, an endless horse?</li>
          <li><OutboundLink href="https://whocanuse.com/">whocanuse.com</OutboundLink> - It's a tool that brings attention and understanding to how color contrast can affect different people with visual impairments.</li>
          <li><OutboundLink href="https://www.notion.vip/icons/">notion.vip/icons/</OutboundLink> - The free icon set from the people behind Notion.app</li>
          <li><OutboundLink href="https://undraw.co">undraw.co</OutboundLink> - A collection of open-source illustrations for any idea you can imagine and create.</li>
          <li><OutboundLink href="https://getwaves.io/">getwaves.io</OutboundLink> - A free SVG wave generator to make unique SVG waves. Choose a curve, adjust complexity, and even randomize.</li>
        </ul>
        <h2 className={'mb-0'}>GitHub projects</h2>
        <ul className={'full icon-links'}>
          <li><OutboundLink href="https://github.com/simple-icons/simple-icons">simple-icons/simple-icons</OutboundLink> - SVG Brand Icons</li>
          <li><OutboundLink href="https://github.com/gregsramblings/google-cloud-4-words">gregsramblings/google-cloud-4-words</OutboundLink> - Google Cloud Developer's Cheat Sheet</li>
          <li><OutboundLink href="https://github.com/dropbox/zxcvbn/">dropbox/zxcvbn</OutboundLink> - Low-Budget Password Strength Estimation</li>
        </ul>
        <h2 className={'mb-0'}>Posts &amp; Articles</h2>
        <ul className="full icon-links">
          <li><OutboundLink href="https://blog.trello.com/maker-vs-manager-productivity">Maker vs. Manager: How To Schedule For Your Productivity Style</OutboundLink></li>
          <li><OutboundLink href="https://bigmedium.com/ideas/only-one-deliverable-matters.html">Only One Deliverable Matters</OutboundLink></li>
          <li><OutboundLink href="https://mailchimp.com/did-you-mean/">Mailchimp.com/did-you-mean/</OutboundLink> - A cool solution to incorrectly typed product names</li>
        </ul>
        <h2 className={'mb-0'}>Blogs I follow</h2>
        <ul className={'full'}>
          <li><OutboundLink href="https://slack.engineering/">https://slack.engineering/</OutboundLink> - The blog from the Slack.app engineering team</li>
        </ul>
      </article>
    </section>
  </Layout>
);

export default ResourcesPage;
