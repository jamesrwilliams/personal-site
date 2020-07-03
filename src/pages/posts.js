import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostInline from "../components/post-inline/post-inline";
import PageHeader from '../components/page-header/page-header'

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
          <ul style={{ margin: 0, listStyle: 'none' }}>
            {posts.map((_post, index) => {
              let post = _post.frontmatter;
                  post.excerpt = _post.excerpt;

              return (
                <li key={index} className={'mb-4'}>
                  <PostInline key={_post.slug} post={post} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default PostsPage;
