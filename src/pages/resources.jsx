import React from 'react';

import Layout from '../components/Layout/Layout.tsx';
import SEO from '../components/utilities/seo.tsx';
import PageHeader from '../components/PageHeader/PageHeader.tsx';
import Container from '../components/Container.tsx';
import ResourcesSection from '../components/Resources/ResourcesSection';

const resources = [
  {
    title: 'Sites / Products / Services',
    items: [
      {
        link: 'https://explainshell.com/',
        description: 'Interactive Shell Command explained',
      },
      {
        link: 'https://carbon.now.sh/',
        description: 'Beautiful code screenshots with Carbon.',
      },
      {
        link: 'https://www.openpeeps.com/',
        description: 'A hand-drawn illustration library.',
      },
      {
        link: 'http://endless.horse/',
        description: 'Well, it is an endless horse?',
      },
      {
        link: 'https://whocanuse.com/',
        description: 'Is a tool that brings attention and understanding to how color contrast can affect different people with visual impairments.',
      },
      {
        link: 'https://undraw.co',
        description: 'A collection of open-source illustrations for any idea you can imagine and create.',
      },
      {
        link: 'https://getwaves.io/',
        description: 'A free SVG wave generator to make unique SVG waves. Choose a curve, adjust complexity, and even randomize.',
      },
      {
        link: 'https://free-for.dev',
        description: 'A list of software (SaaS, PaaS, IaaS, etc.) and other offerings that have free tiers for developers.',
      },
      {
        link: 'https://mailchimp.com/did-you-mean/',
        description: 'A interesting solution to incorrectly typed product names',
      },
    ],
  },
  {
    title: 'GitHub Projects',
    items: [
      {
        link: 'https://github.com/zxcvbn-ts/zxcvbn',
        linkText: 'zxcvbn-ts/zxcvbn',
        description: 'Low-Budget Password Strength Estimation',
      },
      {
        link: 'https://github.com/simple-icons/simple-icons',
        linkText: 'simple-icons/simple-icons',
        description: 'SVG Brand Icons',
      },
      {
        link: 'https://github.com/priyankavergadia/google-cloud-4-words',
        linkText: 'priyankavergadia/google-cloud-4-words',
        description: 'Google Cloud Developer\'s Cheat Sheet',
      },
    ],
  },
  {
    title: 'Posts & Articles',
    items: [
      {
        link: 'https://bigmedium.com/ideas/only-one-deliverable-matters.html',
        linkText: 'Only One Deliverable Matters',
        description: 'Josh Clark - Oct 16, 2018',
      },
    ],
  },
  {
    title: 'Blogs',
    items: [
      {
        link: 'https://slack.engineering/',
        description: 'The blog from the Slack.app engineering team',
      },
      {
        link: 'https://dropbox.tech/',
        description: 'Dropbox\'s engineering blog',
      },
      {
        link: 'https://neverworkintheory.org/',
        description: 'Short summaries of recent results in empirical software engineering research',
      },
    ],
  },
];

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <PageHeader title="Resources" />
    <Container>
      <p>Here you can find a collection of cool and useful tools and resources I have found:</p>
      <h2>Sections</h2>
      <ul>{ resources.map((resource) => (<li><a href={`#${resource.title}`}>{ resource.title }</a></li>)) }</ul>
      { resources.map(({ title, items }) => <ResourcesSection title={title} items={items} />)}
    </Container>
  </Layout>
);

export default ResourcesPage;
