import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layouts/Layout';
import SEO from '../components/utilities/seo';
import PageHeader from '../components/PageHeader/PageHeader';
import { Reading } from '../components';
import Link from '../components/Link/Link';
import Container from '../components/Container';
import ProfessionalExperience from '../components/ProfessionalExperience';
import { linkedInUrl, resumeUrl } from '../data/urls';
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

  const activeYears = (new Date().getFullYear() - 2016);

  return (
    <Layout>
      <SEO title="About me" />
      <PageHeader title="A little about me" />
      <Container>
        <PostContent>
          <article>
            <p>
              Hello! I&apos;m James W. A development engineer, originally from the UK but who moved
              to Canada in 2018. I am currently working with both JavaScript (TypeScript, React.js,
              Node, Gatsby, and Ionic) and Python (Flask, Django etc).
            </p>
            <p>
              I first started with web development in 2011 as part of a college project and never
              dropped it. I then changed my plans for my undergraduate degree from marketing to
              &quot;Multimedia Web Design&quot; at the University of Gloucestershire. My
              professional start was in a few agencies developing bespoke WordPress themes amongst
              other things like natural language processing powered chat bots, and interactive
              direct-marketing campaigns. Now I&apos;m building the future of loyalty
              at <Link to="https://www.points.com">Points.com</Link>.
            </p>

            <Reading book={book} />

            <hr />

            <h2>Professional Experience</h2>

            <p>
              I&apos;ve been a professional developer for { activeYears } years, working in a
              variety of environments including non-profits, creative agencies, and product
              development settings. Working on a diverse range of web based projects both for B2B
              and consumer facing audiences. My professional journey so far:
            </p>

            <ProfessionalExperience />

            <p>
              If you want to find out more about my experience or projects check out
              my <Link to="/posts/">posts</Link> where I try to cover all the interesting and
              challenging projects I&apos;ve worked on, or feel free to reach out
              on <Link to={linkedInUrl}>LinkedIn</Link>. For those more interested in something more
              formal that you can download, take a look at my <Link to={resumeUrl}>resume</Link>.
            </p>

            <h2>Things I use</h2>

            <p>
              I use <Link to="https://www.jetbrains.com/idea/">IntelliJ IDEA Ultimate</Link> as my
              project <abbr title="Integrated development environment">IDE</abbr> and a little bit
              of <Link to="https://www.sublimetext.com/">Sublime Text</Link> for other random files.
              In both I use <Link to="https://github.com/tonsky/FiraCode">FiraCode</Link> (with ligatures) as
              my code typeface of choice, and on the command line I use <Link to="https://iterm2.com">iTerm2</Link> running
              with <Link to="https://ohmyz.sh/">ohmyz</Link>. Building things and surfing in general with the
              help of <Link to="https://www.mozilla.org/en-US/firefox/developer/">Firefox Developer Edition</Link> as
              my daily browser.
            </p>

            <h3>Gear</h3>

            <p>
              For work I use a Macbook Pro (13-inch 2018) plugged into a LG 34″ UltraWide Monitor
              (34UM69G-B) using a Dell 3000 USB-C dock, and a wireless Apple mouse and keyboard.
              When I need my headphones I&apos;ve got a set of Bose QC 35s. For fun I&apos;ve got a
              self-built gaming PC, specs for which are outlined in this
              post: <Link to="/posts/pc-building-part-1">Building my own PC</Link>.
            </p>

            <h2>This site</h2>

            <p>
              This site statically rendered with GatsbyJS, using MDX for posts and styled-components
              to handle the design. All deployed via Netlify from its home
              on <Link to={siteRepoLink}>GitHub</Link>. It is a full progressive web app that uses
              Algolia for my search service. This is the successor for my old .co.uk domain
              now I am based in Canada!
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
