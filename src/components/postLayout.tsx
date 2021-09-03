import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from './Layout/Layout';
import PageHeader from './PageHeader/PageHeader';
import SEO from './utilities/seo';
import Container from './Container';
import Pagination from './Pagination';

export default function Template({ pageContext }: any) {
  const {
    body,
    frontmatter,
    excerpt,
    timeToRead,
    pagination,
  } = pageContext;
  const { title } = frontmatter;

  const { next, previous } = pagination;

  return (
    <Layout>
      <SEO title={title} description={excerpt} publishedTime="" />
      <main>
        <article>
          <PageHeader title={title} post={frontmatter} timeToRead={timeToRead} />
          <Container style={{ paddingBottom: '2rem' }}>
            <MDXRenderer>{ body }</MDXRenderer>
          </Container>
          <Pagination next={next} previous={previous} />
        </article>
      </main>
    </Layout>
  );
}
