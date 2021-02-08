import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Hero, Layout, PostLink } from '../components'

import SEO from '../components/utilities/seo'

const IndexPage = () => {

  const { posts } = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}, limit: 10, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          excerpt(pruneLength: 150, format: PLAIN)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={'Recent posts'}
        description={"I'm James, a full-stack web developer working in Toronto. I enjoy building delightfully fast, and engaging digital projects."}
      />
      <Hero />
      <div className="grid container py-8">
        <section className="recent-posts">
          <h2 className={'font-bold text-xl mb-6'}>Recent posts</h2>
          <ul>
            { posts.nodes.map((_post, index) => <PostLink key={index} post={_post.frontmatter} /> )}
          </ul>
          <p><Link to={'/posts/'}>View all</Link></p>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage;
