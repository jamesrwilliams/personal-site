import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allBooksBeingRead(limit: 1) {
        nodes {
          id
          link
          title
          description
          year
          author {
            link
            name
          }
        }
      }
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
        nodes {
          excerpt(pruneLength: 150, format: PLAIN)
          frontmatter {
            date
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
      allBooksBeingRead(limit: 1) {
        nodes {
          id
          link
          title
          description
          year
          author {
            link
            name
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes;
  const projects = data.github.user.pinnedItems.nodes;
  const book = data.allBooksBeingRead.nodes[0];

  return (
    <Layout wrapperClass={'home'}>
      <SEO description={"I'm James, a full-stack web developer working in Toronto. I enjoy building delightfully fast, and engaging digital projects."}/>
      <section className={'hero container'}>
        <h1 style={{ color: '#fff' }}>Hey, I'm James</h1>
        <p className={'larger'}>I'm a full-stack web developer based in Toronto, currently working with the wonderful team at <OutboundLink
          rel="noopener noreferrer" style={{ color: '#027BB6' }} target={'_blank'}
          href="https://points.com">Points</OutboundLink>, who enjoys building delightfully fast, easy to use, and engaging digital projects.</p>
        <p className={'larger'}>I'm currently reading <a title={book.title + " by " + book.author.name + " on GoodReads.com"} href={book.link}>{book.title}</a> by <a
          href={book.author.link}>{book.author.name}</a>.</p>
      </section>
      <div className="grid container">
        <section className="recent-posts">
          <h2><span role={'img'} aria-label={"pencil icon"}>✏️</span> Recent posts</h2>
          <ul style={{ margin: 0, listStyle: 'none' }}>
            {posts.map((_post, index) => {
              let post = _post.frontmatter;
              post.excerpt = _post.excerpt;

              return (
                <li key={index} className={'mb-4'}>
                  <Link to={'/posts/' + post.slug}>{ post.title }</Link>
                  <p>{ post.excerpt }</p>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="current-projects">
          <h2><span role={'img'} aria-label={"hammer and wrench icon"}>🛠</span>️ Active projects</h2>
          <ul style={{ margin: 0, listStyle: 'none' }}>
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

export default IndexPage
