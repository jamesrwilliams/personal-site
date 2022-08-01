import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import SEO from '../components/utilities/seo';
import Container from '../components/Container';
import LinkedData from '../components/social/LinkedData';
import PostContent from '../components/utilities/PostContent';
import {PostTags} from "../components/PostTags";

export default function Template({ data }: any) {
  const {
    slug,
    frontmatter,
    excerpt,
    timeToRead,
    body,
  } = data.mdx;
  const { title, tags } = frontmatter;

  console.log(data.mdx);

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        path={`posts/${slug}`}
        publishedTime={frontmatter.date}
      />
      <LinkedData title={title} date={frontmatter.date} excerpt={excerpt} slug={slug} />
      <main>
        <article>
          <PageHeader title={title} post={frontmatter} timeToRead={timeToRead} />
          <Container>
            <PostContent>
              <MDXRenderer>{ body }</MDXRenderer>
            </PostContent>
            <PostTags tags={tags} />
          </Container>
        </article>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query MdxBlogPost($slug: String!) {
    mdx(slug: {eq: $slug}) {
      body
      ...blogFields
    }
  }
  fragment blogFields on Mdx {
    excerpt(pruneLength: 250)
    slug
    timeToRead
    frontmatter {
      date
      tags
      postDate: date,
      dateReadable: date(formatString: "DD MMMM, YYYY")
      title
    }
  }
`;
