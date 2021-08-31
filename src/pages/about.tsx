import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/utilities/seo'
import PageHeader from '../components/PageHeader/PageHeader'
import {OutboundLink} from 'gatsby-plugin-google-analytics'
import {Reading} from '../components'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Container from "../components/Container";

const AboutPage = () => {

  const { book } = useStaticQuery(graphql`
      query {
          book: booksBeingRead {
              link
              title
              year
              author {
                  link
                  name
              }
          }
      }
  `);

  const professionalExperience = [
    {
      company: 'Development Engineer @ Points.com, Toronto, CA',
      start_date: '2021 March',
      end_date: 'Current'
    },
    {
      company: 'Web Developer @ Points.com, Toronto, CA',
      start_date: '2019 March',
      end_date: '2021 March'
    },
    {
      company: 'Web Developer @ Silver Agency, Cheltenham, UK',
      start_date: '2016 October',
      end_date: '2018 November'
    },
    {
      company: 'Web Developer @ Fusion Design & Print, Cheltenham, UK',
      start_date: '2016 March',
      end_date: '2016 October'
    }
  ];

  const PositionEntry = ({ data: {company, start_date, end_date}, index}: {
    data: {
      company: string,
      start_date: string,
      end_date: string,
    },
    index: number,
  }) => {
    return (
        <li className={'mb-3'} key={index}>
          <h4 style={{ marginBottom: 0 }}>{ company }</h4>
          <span className={'opacity-70 mt-0'} style={{ marginTop: 0 }}>{ start_date } - { end_date }</span>
        </li>
    )
  }

  return (
    <Layout>
      <SEO title="About me" />
      <PageHeader title={"A little about me"} />
      <Container>
        <article className={'prose prose-lg mb-10 pt-10'}>
          <p>Hello! I'm James W. a development engineer, originally from the UK <span role={'img'} aria-label={'Flag of the United Kingdom'}>🇬🇧</span> but moved to Canada <span role={'img'} aria-label={'Flag of Canada'}>🇨🇦</span> in 2018. The tools of my trade are the usual suspects (HTML, CSS and JavaScript) in varying forms. I'm currently working in TypeScript, React.js, Node, Gatsby, and Ionic.</p>
          <p>I first started with web development in 2011 as part of a college project and never dropped it. I then changed my plans for my undergraduate degree from marketing to "Multimedia Web Design" at the University of Gloucestershire.</p>
          <p>My professional start was in a few agencies developing bespoke WordPress themes amongst other things like AI powered Chat Bots, and interactive direct-marketing campaigns. Now I'm building the future of loyalty at <OutboundLink href={'https://www.points.com'}>Points.com</OutboundLink>.</p>
        </article>
        <br />
        <article className={'prose prose-lg mb-10'}>
          <h2>Professional Experience</h2>
          <ul>
            { professionalExperience.map((entry, index) => <PositionEntry index={index} data={entry} /> ) }
          </ul>
          <OutboundLink
              target={'_blank'}
              rel={'noreferrer noopener'}
              href={'https://docs.google.com/document/d/1T1Ohlnh0rdVUGVhlCK3H4n6h2Nr_MxqMuLz92wJI4bg'}>View resume</OutboundLink>
        </article>
        <article className={'prose prose-lg mb-10'}>
          <h2>Currently Reading</h2>
          <Reading book={book} />
        </article>
        <article className={'prose prose-lg mb-10'}>
          <h2>Things I use</h2>

          <p>I use <OutboundLink className={'underline'} href="https://www.jetbrains.com/idea/" target={'_blank'} rel={'noopener nofollow'}>IntelliJ IDEA Ultimate</OutboundLink> for major projects and a little bit of <OutboundLink href={'https://www.sublimetext.com/'} rel={'noopener nofollow'} target={'_blank'}>Sublime Text</OutboundLink> for other random, non-project files. In both I use <OutboundLink className={'underline'} href="https://github.com/tonsky/FiraCode" target={'_blank'} rel={'noopener nofollow'}>Firacode</OutboundLink> (with ligatures) as my code typeface of choice, and on the command line I use <OutboundLink className={'underline'} href="https://iterm2.com" target={'_blank'} rel={'noopener nofollow'}>iTerm2</OutboundLink> running with <OutboundLink className={'underline'} href={'https://ohmyz.sh/'}>ohmyz</OutboundLink>.</p>
          <p>Building things and surfing in general with the help of <OutboundLink className={'underline'} href="https://www.mozilla.org/en-US/firefox/developer/" target={'_blank'} rel={'noopener nofollow'}>Firefox Developer Edition</OutboundLink></p>

          <h3>Gear</h3>
          <ul>
            <li>Laptop: MacBook Pro (13-inch, 2018)</li>
            <li>Monitor: LG 34" UltraWide Monitor (34UM69G-B)</li>
            <li>Mouse / Keyboard: Apple Wireless</li>
            <li>Self-built gaming PC: <Link className={'underline'} to={'/posts/pc-building-part-1'}>Specs</Link></li>
          </ul>
          <h3>About this site</h3>
          <p>The source code for my personal portfolio site and blog. It is built with GatsbyJS using MDX for posts and styled-components to handle the design. All deployed via [Netlify]() from it's home on <OutboundLink href={'https://github.com/jamesrwilliams/personal-site'}>jamesrwilliams/personal-site</OutboundLink>, and is a full progressive web app!</p>
        </article>
      </Container>
    </Layout>
  );
};

export default AboutPage;
