import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Hero, Layout, PostLink } from '../components'

import SEO from '../components/utilities/seo'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 6) {
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
                name
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
      <SEO
        description={"I'm James, a full-stack web developer working in Toronto. I enjoy building delightfully fast, and engaging digital projects."}
      />
      <Hero />
      <div className="grid container py-8">
        <section className="recent-posts">
          <h2 className={'font-bold text-xl mb-6'}>Recent posts</h2>
          <ul>
            { posts.map((_post, index) => <PostLink key={index} post={_post.frontmatter} /> )}
          </ul>
        </section>
        <section className="current-projects">
          <h2 className={'font-bold text-xl my-6'}>Projects</h2>
          <div className={'grid grid-cols-3 gap-4'}>
            { projects.map((project, index) => (
                <ProjectTile key={index} project={project} className={'mb-4'} />
            )) }
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage;

const ProjectTile = ({ project }) => (
  <div>
    <h3><a target={'_blank'} href={project.url} rel={'noopener noreferrer'}>{project.name}</a></h3>
    <p>{ project.description }</p>
  </div>
)

