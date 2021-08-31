import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from './Layout/Layout';
import PageHeader from './PageHeader/PageHeader';
import SEO from './utilities/seo';
import Container from './Container';

export default function Template({ pageContext }: any) {
  const {
    body,
    frontmatter,
    excerpt,
    timeToRead,
  } = pageContext;
  const { title } = frontmatter;

  return (
    <Layout>
      <SEO title={title} description={excerpt} publishedTime="" />
      <main>
        <article>
          <PageHeader title={title} post={frontmatter} timeToRead={timeToRead} />
          <Container>
            <MDXRenderer>{ body }</MDXRenderer>
          </Container>
        </article>
      </main>
    </Layout>
  );
}
