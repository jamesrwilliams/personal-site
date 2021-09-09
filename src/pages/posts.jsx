import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/utilities/seo';
import PageHeader from '../components/PageHeader/PageHeader';
import {PostLink} from '../components';
import Container from '../components/Container';

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
        <PageHeader title="All posts" />
        <Container>
          {posts.nodes.map((_post) => <PostLink key={`archive_${_post.slug}`} post={_post} />)}
        </Container>
      </main>
    </Layout>
  );
};

export default PostsPage;
