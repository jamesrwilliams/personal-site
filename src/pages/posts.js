import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostInline from "../components/post-inline";

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
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
      <SEO title="Posts" />
      <h1>Posts</h1>
      <ul>
        {posts.map((_post, index) => {
          let post = _post.frontmatter;
          return (
            <li key={index}>
              <PostInline key={_post.slug} post={post} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default PostsPage;
