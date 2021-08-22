import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from './Layout/Layout';
import PageHeader from './PageHeader/PageHeader';
import SEO from './utilities/seo';
import Container from './Container';

export default function Template({ children, pageContext, ...otherProps }: any) {
  const {
    body, tableOfContents, frontmatter, excerpt,
  } = pageContext;
  const { title } = frontmatter;

  return (
    <Layout>
      <SEO title={title} description={excerpt} publishedTime="" />
      <PageHeader title={title} post={frontmatter} />
      <main className="container">
        <Container>
          <article>
            <MDXRenderer>{ body }</MDXRenderer>
          </article>
        </Container>
      </main>
    </Layout>
  );
}
