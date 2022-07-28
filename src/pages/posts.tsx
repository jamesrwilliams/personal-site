import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layouts/Layout';
import SEO from '../components/utilities/seo';
import PageHeader from '../components/PageHeader/PageHeader';
import Container from '../components/Container';
import { PostList } from "../components/PostPreview";

const PostsPage = () => {
  const { posts } = useStaticQuery(graphql`
  {
    posts: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        ...blogFields
      }
    }
  }
 `);

  return (
    <Layout>
      <SEO
        title="Posts"
        description="My sporadic thoughts on web development and fun things I find on the internet."
      />
      <main>
        <PageHeader title="Posts" />
        <Container>
          <PostList posts={posts.nodes} />
        </Container>
      </main>
    </Layout>
  );
};

export default PostsPage;
