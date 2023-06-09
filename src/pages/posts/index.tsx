import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../../components/layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Container from '../../components/Container';
import { PostList } from "../../components/PostPreview";
import {getTagLink} from "../../components/utilities";
import { default as InternalLink } from '../../components/Link/Link';
import {Meta} from "../../components/utilities/Meta";
import {BlogFields} from "../../templates/BlogPostTemplate";

const description = `My sporadic thoughts on web development and fun things I find on the internet.`;

const PostsPage = ({ data }: PageQuery) => {

  const { posts } = data;

  return (
    <Layout>
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

export const Head = () => <Meta title={'Posts'} description={description} />;

interface PageQuery {
  data: {
    posts: {
      totalCount: number;
      nodes: BlogFields[];
    }
  }
}


export const pageQuery = graphql`
  query {
      posts: allMdx(limit: 500, sort: {frontmatter: {date: DESC}}) {
          totalCount
          nodes {
              ...blogFields
          }
      }
  }
`;
