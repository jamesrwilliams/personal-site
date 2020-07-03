import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <SEO/>
      <div style={{ height: 'calc(100vh - 135px)' }}>
        <div style={{ backgroundColor: '#e9ecef' }}>
          <div className={'container'} style={{ padding: '10vh 2rem' }}>
            <h1 style={{ fontSize: '70px' }}>
              Hey! I'm James <span role={'img'} aria-label={'Hand waving emoji'}>👋</span><br/>
            </h1>
            <h2 style={{ fontSize: '25px' }}>
              I am a full-stack web developer working in Toronto.
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
      </div>
    </Layout>
  )
}

export default IndexPage
