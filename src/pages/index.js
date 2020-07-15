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
}
  `)

  const posts = data.allMarkdownRemark.nodes;
  const projects = data.github.user.pinnedItems.nodes;
  const book = data.allBooksBeingRead.nodes[0];

  return (
    <Layout wrapperClass={'home container'}>
      <SEO/>
      <section className={'hero'}>
        <h1 style={{ color: '#fff' }}>Hey, I'm James</h1>
        <p className={'larger'}>I'm a full-stack web developer based in Toronto, currently working with the wonderful team at <OutboundLink
          rel="noopener noreferrer" style={{ color: '#027BB6' }} target={'_blank'}
          href="https://points.com">Points</OutboundLink>. I enjoy building delightfully fast, and engaging digital
          projects.</p>
        <p>I'm currently reading: "<a href={book.link}>{book.title}</a>" { book.year ? '(' + book.year + ')' : '' } by <a
          href={book.author.link}>{book.author.name}</a>.</p>
      </section>
      <section className="recent-posts">
        <h2>Recent posts</h2>
        <ul style={{ margin: 0, listStyle: 'none' }}>
          {posts.map((_post, index) => {
            let post = _post.frontmatter
            post.excerpt = _post.excerpt
            let date = new Date(post.date)

            return (
              <li key={index} className={'mb-4'}>
                <time dateTime={post.date}>{new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'long',
                }).format(date)}</time> <Link to={'/posts/' + post.slug}>{ post.title }</Link>
                <p>{ post.excerpt }</p>
                <Link to={'/posts/' + post.slug}>Read more...</Link>
              </li>
            )
          })}
        </ul>
      </section>
      <section className="current-projects">
        <h2>Current Projects</h2>
        <ul style={{ margin: 0, listStyle: 'none' }}>
          {projects.map((project, index) => {
            return (
              <li key={index} className={'mb-4'}>
                <a target={'_blank'} href={project.url} rel={'noopener'}>{project.name}</a>
                <p>{ project.description }</p>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage
