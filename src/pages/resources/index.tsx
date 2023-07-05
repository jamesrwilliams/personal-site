import React from 'react';

import { Container, Layout, PageHeader, Link, ResourcesSection } from '../../components';

import {
  blogs, githubProjects, sites, random,
} from '../../data/resources';
import {Meta} from "../../components/utilities/Meta";

const sections = [
  {
    title: 'Sites / Products / Services',
    items: sites,
    linkText: ''
  },
  {
    title: 'GitHub Projects',
    items: githubProjects,
    linkText: ''
  },
  {
    title: 'Blogs',
    items: blogs,
    linkText: ''
  },
  {
    title: 'Random',
    items: random,
    linkText: ''
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
