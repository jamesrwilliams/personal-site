import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/utilities/seo'
import PageHeader from '../components/page-header/page-header'
import PostLink from '../components/PostLink/PostLink'

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          excerpt(pruneLength: 250, format: PLAIN)
          frontmatter {
            date
            title
            slug
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO
        title="Posts"
        description={"My sporadic thoughts on web development and fun things I find on the internet."} />
      <main>
        <PageHeader title={"Posts"} />
        <div className="container pt-4">
          <ul className={'list-none m-0'}>
            {posts.map((_post, index) => {
              let post = _post.frontmatter;
              return (
                <PostLink post={post} />
              );
            })}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default PostsPage;
