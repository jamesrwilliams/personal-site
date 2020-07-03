import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <SEO/>
      <div style={{ backgroundColor: '#e9ecef' }}>
        <div className={'container'} style={{ padding: '2rem' }}>
          <h1 style={{ marginTop: '10vh', fontSize: '70px' }}>
            Hey! I'm James <span role={'img'} aria-label={'Hand waving emoji'}>👋</span><br/>
          </h1>
          <h2 style={{ fontSize: '40px' }}>
            I am software engineer working in Toronto, specialising in front end.
          </h2>
        </div>
      </div>
      <div className={'container container-content'} style={{ padding: '2rem' }}>
        <p>I enjoy building delightfully fast, and engaging digital projects. I'm currently exploring ways to integrate
          static site generators (like Hugo and Gatsby) into more projects with the wonderful team at <a
            rel="noopener noreferrer" href="https://points.com">Points</a>. In my spare time I'm building native apps
          with things l
          ike Ionic Framework and Angular.</p>
        <p>On this site you can find some <Link to="/posts/">posts</Link> about various things I've been working on. You
          can find more examples of my work on my <a rel="noopener noreferrer"
                                                     href="https://github.com/jamesrwilliams">GitHub</a> profile. If you
          have an interesting project you'd like to work together on, let's <Link to="/hire/">work together</Link>.</p>
      </div>
    </Layout>
  )
}

export default IndexPage
