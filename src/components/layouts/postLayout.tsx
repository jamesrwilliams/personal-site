import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Layout from './Layout';
import PageHeader from '../PageHeader/PageHeader';
import SEO from '../utilities/seo';
import Container from '../Container';
import LinkedData from '../social/LinkedData';
import PostContent from '../utilities/PostContent';

export default function Template({ pageContext }: any) {
  const {
    body,
    slug,
    frontmatter,
    excerpt,
    timeToRead,
  } = pageContext;
  const { title } = frontmatter;

  return (
    <Layout>
      <SEO title={title} description={excerpt} path={`posts/${slug}`} publishedTime={frontmatter.date} />
      <LinkedData title={title} date={frontmatter.date} excerpt={excerpt} slug={slug} />
      <main>
        <article>
          <PageHeader title={title} post={frontmatter} timeToRead={timeToRead} />
          <Container>
            <PostContent>
              <MDXRenderer>{ body }</MDXRenderer>
            </PostContent>
          </Container>
        </article>
      </main>
    </Layout>
  );
}

export const query = graphql`
  fragment blogFields on Mdx {
    excerpt(pruneLength: 250)
    slug
    timeToRead
    frontmatter {
      date
      dateReadable: date(formatString: "YYYY-MM-DD")
      title
    }
  }
`;
