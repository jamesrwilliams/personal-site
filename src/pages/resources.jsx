import React from 'react';

import Layout from '../components/Layout/Layout.tsx';
import SEO from '../components/utilities/seo.tsx';
import PageHeader from '../components/PageHeader/PageHeader.tsx';
import Container from '../components/Container.tsx';
import ResourcesSection from '../components/Resources/ResourcesSection';

import {
  articlesAndPosts, blogs, githubProjects, sites, random,
} from '../data/resources';

const sections = [
  {
    title: 'Sites / Products / Services',
    items: sites,
  },
  {
    title: 'GitHub Projects',
    items: githubProjects,
  },
  {
    title: 'Posts & Articles',
    items: articlesAndPosts,
  },
  {
    title: 'Blogs',
    items: blogs,
  },
  {
    title: 'Random',
    items: random,
  },
];

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <PageHeader title="Resources" />
    <Container>
      <p>Here you can find a collection of cool and useful tools and resources I have found:</p>
      { sections.map(({ title, items }) => <ResourcesSection title={title} items={items} />)}
    </Container>
  </Layout>
);

export default ResourcesPage;
