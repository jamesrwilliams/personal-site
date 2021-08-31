import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import SEO from '../components/utilities/seo';
import PageHeader from '../components/PageHeader/PageHeader';
import {PostLink} from '../components';
import Container from '../components/Container';

const PostGrid = styled.div`
    z-index: 300;
    position: relative;
`;

const PostsPage = () => {
  const { posts } = useStaticQuery(graphql`
{
  posts: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      excerpt(pruneLength: 250)
      slug
      frontmatter {
        date
        date_timestamp: date
        date_readable: date(formatString: "DD/MM/YYYY")
        title
      }
    }
  }
}
 `);

  console.log(posts);

  return (
    <Layout>
      <SEO
        title="Posts"
        description="My sporadic thoughts on web development and fun things I find on the internet."
      />
      <main>
        <PageHeader title="All posts" />
        <Container>
          <br />
          <PostGrid>
            {posts.nodes.map((_post) => <PostLink key={_post.slug} post={_post.frontmatter} slug={_post.slug} />)}
          </PostGrid>
        </Container>
      </main>
    </Layout>
  );
};

export default PostsPage;
