import React from 'react';

import Link from '../../components/Link/Link';
import Layout from '../../components/layouts/Layout';
import SEO from '../../components/utilities/seo';
import PageHeader from '../../components/PageHeader/PageHeader';
import Container from '../../components/Container';
import ResourcesSection from '../../components/Resources/ResourcesSection';

import {
  blogs, githubProjects, sites, random,
} from '../../data/resources';

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
      <Link type="button" to="./reading">What I am reading</Link>
      <p>Here you can find a collection of cool and useful tools and resources I have found:</p>
      { sections.map(({ title, items }) => <ResourcesSection title={title} items={items} />)}
      <br />
    </Container>
  </Layout>
);

export default ResourcesPage;
