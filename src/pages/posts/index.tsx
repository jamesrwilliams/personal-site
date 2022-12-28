import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/utilities/seo';
import PageHeader from '../../components/PageHeader/PageHeader';
import Container from '../../components/Container';
import { PostList } from "../../components/PostPreview";
import {getTagLink} from "../../components/utilities";
import { default as InternalLink } from '../../components/Link/Link';

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

  const description = `My sporadic thoughts on web development and fun things I find on the internet.`;

  return (
    <Layout>
      <SEO
        title="Posts"
        path={'posts'}
        description={description}
      />
      <main>
        <PageHeader title="Posts">
          <article>
            <p>{ description } You can also sort or view all my posts with their <InternalLink to={getTagLink()}>tags</InternalLink>.</p>
          </article>
        </PageHeader>
        <Container>
          <PostList posts={posts.nodes} />
        </Container>
      </main>
    </Layout>
  );
};

export default PostsPage;
