import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';
import Layout from './Layout/Layout';
import PageHeader from './PageHeader/PageHeader';
import SEO from './utilities/seo';
import Container from './Container';
import Pagination from './Pagination';
import LinkedData from './social/LinkedData';
import PostContent from './utilities/PostContent';

export default function Template({ pageContext }: any) {
  const {
    body,
    slug,
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
      <LinkedData title={title} date={frontmatter.date} excerpt={excerpt} slug={slug} />
      <main>
        <article>
          <PageHeader title={title} post={frontmatter} timeToRead={timeToRead} />
          <Container>
            <PostContent>
              <MDXRenderer>{ body }</MDXRenderer>
            </PostContent>
          </Container>
          <Pagination next={next} previous={previous} />
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
      slug
    }
  }
`;
