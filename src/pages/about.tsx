import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/utilities/seo';
import PageHeader from '../components/PageHeader/PageHeader';
import { Reading } from '../components';
import Container from '../components/Container';
import ProfessionalExperience from '../components/ProfessionalExperience';
import { ExternalLink, StyledExternalLink } from '../components/utilities/ExternalLink';
import { resumeUrl } from '../data/urls';
import PostContent from '../components/utilities/PostContent';

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

  const siteRepoLink = 'https://github.com/jamesrwilliams/personal-site';

  const El = ExternalLink;

  return (
    <Layout>
      <SEO title="About me" />
      <PageHeader title="A little about me" />
      <Container>
        <PostContent>
          <article>
            <p>
              Hello! I&apos;m James W. a development engineer, originally from the UK but moved to
              Canada in 2018. I am currently working with both JavaScript (TypeScript, React.js,
              Node, Gatsby, and Ionic) and Python (Flask, Django etc).
            </p>
            <p>
              I first started with web development in 2011 as part of a college project and never
              dropped it. I then changed my plans for my undergraduate degree from marketing to
              &quot;Multimedia Web Design&quot; at the University of Gloucestershire. My
              professional start was in a few agencies developing bespoke WordPress themes amongst
              other things like AI powered Chat Bots, and interactive direct-marketing campaigns.
              Now I&apos;m building the future of loyalty at <El href="https://www.points.com">Points.com</El>.
            </p>
            <blockquote>
              <Reading book={book} />
            </blockquote>

            <h2>Professional Experience</h2>
            <ProfessionalExperience />
            <StyledExternalLink href={resumeUrl}>View resume</StyledExternalLink>

            <h2>Things I use</h2>

            <p>
              I use <El href="https://www.jetbrains.com/idea/">IntelliJ IDEA Ultimate</El> for major
              projects and a little bit of <El href="https://www.sublimetext.com/">Sublime Text</El>
              for other random, non-project files. In both I use
              <El href="https://github.com/tonsky/FiraCode">FiraCode</El> (with ligatures) as my code
              typeface of choice, and on the command line I use
              <El href="https://iterm2.com">iTerm2</El> running with
              <El href="https://ohmyz.sh/">ohmyz</El>.
            </p>
            <p>
              Building things and surfing in general with the help of
              <El href="https://www.mozilla.org/en-US/firefox/developer/">Firefox Developer Edition</El>
            </p>

            <h3>Gear</h3>

            <p>
              For work I use a Macbook Pro (13-inch 2018) plugged into a LG 34″ UltraWide Monitor
              (34UM69G-B) using a Dell 3000 USB-C dock. A wireless Apple mouse and keyboard. When I
              need my headphones I&apos;ve got a set of Bose QC 35s. For fun I&apos;ve got a
              self-built gaming PC, specs for which are outlined in this post here
              &quot;<Link to="/posts/my-first-pc-build">Building my own PC</Link>&quot;.
            </p>

            <h2>This site</h2>

            <p>
              This site is built with GatsbyJS using MDX for posts and styled-components to handle
              the design. All deployed via Netlify from its home
              on <El href={siteRepoLink}>jamesrwilliams/personal-site</El>, and is a full
              progressive web app! Using Algolia for my search service. This is the natural
              replacement for my jamesrwilliams.co.uk domain now I am based in Canada!
            </p>

          </article>
        </PostContent>
      </Container>
      <section style={{ background: '#eee', padding: '2rem 0' }}>
        <Container>
          <blockquote style={{
            margin: '0 auto', maxWidth: 570, padding: 0, border: 0,
          }}
          >
            <em>
              Everybody has a testing environment. Some people are lucky enough enough to have a
              totally separate environment to run production in.
            </em>
            <br /> - @stahnma
          </blockquote>
        </Container>
      </section>
    </Layout>
  );
};

export default AboutPage;
