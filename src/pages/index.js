import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Hero, Layout, PostLink } from '../components'

import SEO from '../components/utilities/seo'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 5) {
        nodes {
          excerpt(pruneLength: 150, format: PLAIN)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            slug
          }
        }
      }
      github {
        user(login: "jamesrwilliams") {
          pinnedItems(first: 3) {
            nodes {
              ... on GitHub_Repository {
                name: nameWithOwner
                url
                description
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes;
  const projects = data.github.user.pinnedItems.nodes;

  return (
    <Layout>
      <SEO description={"I'm James, a full-stack web developer working in Toronto. I enjoy building delightfully fast, and engaging digital projects."}/>
      <Hero />
      <div className="grid container">
        <section className="recent-posts">
          <h2>Recent posts</h2>
          <ul>
            { posts.map(_post => <PostLink post={_post.frontmatter} /> )}
          </ul>
        </section>
        <section className="current-projects">
          <h2 className={'text-bold'}>Projects</h2>
          <ul>
            {projects.map((project, index) => {
              return (
                <li key={index} className={'mb-4'}>
                  <a target={'_blank'} href={project.url} rel={'noopener noreferrer'}>{project.name}</a>
                  <p>{ project.description }</p>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage;
