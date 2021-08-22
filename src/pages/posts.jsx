import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/utilities/seo'
import PageHeader from '../components/PageHeader/PageHeader'
import {PostLink} from '../components'
import {graphql, useStaticQuery} from 'gatsby'
import Container from "../components/Container";

const PostsPage = ({ context }) => {

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

  return (
    <Layout>
      <SEO
        title="Posts"
        description={"My sporadic thoughts on web development and fun things I find on the internet."} />
      <main>
        <PageHeader title={"All posts"} />
        <Container>
            <br />
          <ul style={{ margin: 0, padding: 0 }} className={'list-none m-0'}>
            {posts.nodes.map((_post, index) =>
              <PostLink key={index} post={_post.frontmatter} slug={_post.slug} />
            )}
          </ul>
        </Container>
      </main>
    </Layout>
  );
};

export default PostsPage;
