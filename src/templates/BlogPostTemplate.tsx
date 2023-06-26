import React from 'react';
import { graphql } from 'gatsby';
import { Layout, PageHeader, Container, PostTags } from '../components';
import PostContent from '../components/utilities/PostContent';
import { Meta } from '../components/utilities/Meta';

interface PageQuery {
  data: {
    mdx: BlogFields
  }
  children: React.ReactNode,
}

export default function Template({ data: { mdx }, children }: PageQuery) {

  const {
    frontmatter,
    fields: { timeToRead },
  } = mdx;

  const { title, tags, date } = frontmatter;

  return (
    <Layout>
      <main>
        <article>
          <PageHeader title={title} date={date} timeToRead={timeToRead.text} />
          <Container>
            <PostContent>
              { children }
            </PostContent>
            <PostTags tags={tags} />
          </Container>
        </article>
      </main>
    </Layout>
  );
}

export const Head = ({ data }: PageQuery) => (
  <Meta
    title={data.mdx.frontmatter.title}
    description={data.mdx.excerpt}
    date={data.mdx.frontmatter.date}
    post={data.mdx}
  />
)

export interface BlogFields {
  excerpt: string;
  fields: {
    slug: string;
    timeToRead: {
      text: string;
      words: string;
    }
  }
  frontmatter: {
    date: string;
    tags: string[];
    postDate: string;
    dateReadable: string;
    title: string;
  }
}

export const query = graphql`
  query MdxBlogPost($id: String!) {
    mdx(id: {eq: $id}) {
      ...blogFields
    }
  }
  fragment blogFields on Mdx {
    excerpt(pruneLength: 250)
    fields {
      slug
      timeToRead {
        text
        words
      }
    }
    frontmatter {
      date
      tags
      postDate: date,
      dateReadable: date(formatString: "DD MMMM, YYYY")
      title
    }
  }
`;
