import React from 'react';

import Link from '../../components/Link/Link';
import Layout from '../../components/layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Container from '../../components/Container';
import ResourcesSection from '../../components/Resources/ResourcesSection';

import {
  blogs, githubProjects, sites, random,
} from '../../data/resources';
import {Meta} from "../../components/utilities/Meta";

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
    <PageHeader title="Resources" />
    <Container>
      <p>
        Here you can find a collection of cool and useful tools and resources I have found.
        I also have a full list of articles/posts I've found interesting available on <Link to="./reading">my reading list</Link>.
      </p>
      { sections.map(({ title, items }) => <ResourcesSection title={title} items={items} />)}
      <br />
    </Container>
  </Layout>
);

export const Head = () => <Meta title={'Resources'} />

export default ResourcesPage;
