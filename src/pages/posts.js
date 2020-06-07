import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostInline from "../components/post-inline";

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { draft: { ne: true } } }
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
        {posts.map((_post) => {
          let post = _post.frontmatter;
          return (
            <li>
              <PostInline post={post} />{" "}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default PostsPage;
