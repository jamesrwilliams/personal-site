import React from 'react';
import { Link } from "gatsby";

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO/>
      <div>
        <div className={'hero'} style={{ backgroundColor: '#021526' }}>
          <article>
            <h1 style={{ color: '#fff' }}>Hey, I'm James!</h1>
            <p className={ 'larger' }>I'm a full-stack web developer based in Toronto, currently working with the wonderful team at <a rel="noopener noreferrer" style={{ color: '#027BB6' }} target={'_blank'} href="https://points.com">Points</a>.</p>
            <p style={{ color: '#fff' }}>building all sorts of web things. I enjoy building delightfully fast, and engaging digital projects. Here you can find some <Link to={'/posts/'}>posts</Link> about various things I've been working on. You can find more examples of my work on my <a href={'https://github.com/jamesrwilliams'}>GitHub</a> profile.</p>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
