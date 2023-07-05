import React from 'react';
import {graphql} from 'gatsby';
import { Layout, PageHeader, Container, PostList } from '../../components';
import { Link } from '../../components/';
import {Meta} from "../../components/utilities/Meta";
import {BlogFields} from "../../templates/BlogPostTemplate";
import {getTagLink} from "../../lib/getTagLink";

const description = `My sporadic thoughts on web development and fun things I find on the internet.`;

const PostsPage = ({ data }: PageQuery) => {

  const { posts } = data;

  return (
    <Layout>
      <main>
        <PageHeader title="Posts">
          <article>
            <p>{ description } You can also sort or view all my posts with their <Link type={'link'} to={getTagLink()}>tags</Link>.</p>
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
