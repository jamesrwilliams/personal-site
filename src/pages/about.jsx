import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/utilities/seo'
import PageHeader from '../components/PageHeader/PageHeader'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Reading } from '../components'
import { graphql, Link, useStaticQuery } from 'gatsby'

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

  return (
    <Layout>
      <SEO title="About me" />
      <PageHeader title={"About me"}>
        <OutboundLink
          target={'_blank'}
          rel={'noreferrer noopener'}
          href={'https://docs.google.com/document/d/1T1Ohlnh0rdVUGVhlCK3H4n6h2Nr_MxqMuLz92wJI4bg'}
          className={'border inline-block border-white px-3 py-2 md:py-3 text-white font-bold rounded-md absolute bottom-9 md:bottom-11 right-10 md:right-10 bg-transparent hover:bg-white hover:text-blue transition'}>View Resume</OutboundLink>
      </PageHeader>
      <main>
        <article className={'container my-8'}>
          <h2 className={'font-bold text-xl my-6'}>Bio</h2>
          <div className={'grid gap-8 grid-cols-1 md:grid-cols-3'}>
            <div className={'prose prose-xl col-span-2'}>
              <p className={'mb-4'}>Hello! I'm James W. a development engineer, originally from the UK <span role={'img'} aria-label={'Flag of the United Kingdom'}>🇬🇧</span> but moved to Canada <span role={'img'} aria-label={'Flag of Canada'}>🇨🇦</span> in 2018. The tools of my trade are the usual suspects (HTML, CSS and JavaScript) in varying forms. I'm currently working in TypeScript, React.js, Node, Gatsby, and Ionic.</p>
              <p>I first started with web development in 2011 as part of a college project and never dropped it. I then changed my plans for my undergraduate degree from marketing to "Multimedia Web Design" at the University of Gloucestershire.</p>
              <p>My professional start was in a few agencies developing bespoke WordPress themes amongst other things like AI powered Chat Bots, and interactive direct-marketing campaigns. Now I'm building the future of loyalty at <OutboundLink href={'https://www.points.com'}>Points.com</OutboundLink>.</p>
            </div>
            <aside>
              <h2 className={'font-bold text-xl mb-6'}>Professional Experience</h2>
              <ul>
                { professionalExperience.map(({company, start_date, end_date}, index) => (
                  <li className={'mb-3'} key={index}>
                    <h4 className={'font-medium'}>{ company }</h4>
                    <p className={'opacity-70'}>{ start_date } - { end_date }</p>
                  </li>
                )) }
              </ul>
              <hr className={'mt-5'} />
              <h2 className={'font-bold text-xl my-6'}>Currently Reading</h2>
              <Reading book={book} />
              <hr className={'mt-5'} />
              <h2 className={'font-bold text-xl my-6'}>Uses</h2>
              <h3 className={'font-bold'}>Development tools</h3>
              <ul className={'list-disc list-inside'}>
                <li>Editor: <OutboundLink className={'underline'} href="https://www.jetbrains.com/phpstorm/" target={'_blank'} rel={'noopener nofollow'}>PHPStorm</OutboundLink></li>
                <li>Terminal: <OutboundLink className={'underline'} href="https://iterm2.com" target={'_blank'} rel={'noopener nofollow'}>iTerm2</OutboundLink></li>
                <li>Browser: <OutboundLink className={'underline'} href="https://www.mozilla.org/en-US/firefox/developer/" target={'_blank'} rel={'noopener nofollow'}>Firefox Developer Edition</OutboundLink></li>
                <li>Code font: <OutboundLink className={'underline'} href="https://github.com/tonsky/FiraCode" target={'_blank'} rel={'noopener nofollow'}>Firacode</OutboundLink> (with ligatures)</li>
              </ul>
              <h3 className={'font-bold text-xl my-6'}>Gear</h3>
              <ul className={'list-disc list-inside'}>
                <li>Laptop: MacBook Pro (13-inch, 2018)</li>
                <li>Monitor: LG 34" UltraWide Monitor (34UM69G-B)</li>
                <li>Mouse / Keyboard: Apple Wireless</li>
                <li>Self-built gaming PC: <Link className={'underline'} to={'/posts/pc-building-part-1'}>Specs</Link></li>
              </ul>
            </aside>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default AboutPage;
