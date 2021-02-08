import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/utilities/seo'
import PageHeader from '../components/PageHeader/PageHeader'
import { PostLink } from '../components'
import { graphql, useStaticQuery } from 'gatsby'

const PostsPage = () => {

  const { posts } = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date },
        filter: {frontmatter: {draft: {ne: true}}}
      ) {
        nodes {
          excerpt(pruneLength: 250, format: PLAIN)
          frontmatter {
            date
            draft
            title
            slug
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
        <PageHeader title={"Posts"} />
        <div className="container pt-4">
          <h2 className="font-bold text-xl mb-6">All posts</h2>
          <ul className={'list-none m-0'}>
            {posts.nodes.map((_post, index) => {
              let post = _post.frontmatter;
              return (
                <PostLink key={index} post={post} />
              );
            })}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default PostsPage;
