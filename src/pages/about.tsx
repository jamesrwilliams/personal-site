import React from 'react';
import { Layout, Container, PageHeader, Link, CarbonFootprint } from '../components';
import { ProfessionalExperienceTimeline } from '../components/ProfessionalExperience';
import { linkedInUrl, resumeUrl } from '../data/urls';
import PostContent from '../components/utilities/PostContent';
import {YearsActive} from "../components/utilities/YearsActive";
import {Meta} from "../components/utilities/Meta";

const AboutPage = () => {
  const siteRepoLink = 'https://github.com/jamesrwilliams/personal-site';

  return (
    <Layout>
      <main>
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
              direct-marketing campaigns.
            </p>

            <p>
              I&apos;ve been a professional developer for <YearsActive /> years, working in a
              variety of environments including non-profits, creative agencies, and enterprise level
              product development settings. Working on a diverse range of web based projects both
              for B2B and consumer facing audiences. My professional journey so far:
            </p>

            <p><ProfessionalExperienceTimeline /></p>

            <p>
              If you want to find out more about my experience or projects check out
              my <Link to="/posts/">posts</Link> where I try to cover all the interesting and
              challenging projects I&apos;ve worked on, or feel free to reach out
              on <Link to={linkedInUrl}>LinkedIn</Link>. For those more interested in something more
              formal that you can download, take a look at my <Link to={resumeUrl}>resume</Link>.
            </p>

            <h3 id={"gear"}>Things I use</h3>

            <p>
              For work I use a MacBook Pro (16-inch, 2019) plugged into a LG 34″ UltraWide Monitor
              (34UM69G-B) using a Dell 3000 USB-C dock, and a wireless Apple mouse and keyboard.
              When I need my headphones I&apos;ve got a set of Bose QC 35s. For fun I&apos;ve got a
              self-built gaming PC, specs for which are outlined in this
              post: <Link to="/posts/pc-building-part-1">Building my own PC</Link>.
            </p>

            <p>
              I use <Link to="https://www.jetbrains.com/idea/">IntelliJ IDEA Ultimate</Link> as my
              project IDE and a little bit
              of <Link to="https://www.sublimetext.com/">Sublime Text</Link> for other random files.
              In both I use <Link to="https://github.com/tonsky/FiraCode">FiraCode</Link> (with ligatures) as
              my code typeface of choice, and on the command line I use <Link to="https://iterm2.com">iTerm2</Link> running
              with <Link to="https://ohmyz.sh/">ohmyz</Link>. Building things and surfing in general with the
              help of <Link to="https://www.mozilla.org/en-US/firefox/developer/">Firefox Developer Edition</Link> as
              my daily browser. I use <Link to="https://obsidian.md/">Obsidian</Link> for my notes, which is hooked up to a GitHub repo.
            </p>

            <h2 id={"site"}>This site</h2>

            <p>
              This site is built with React using <Link to={'https://gatsbyjs.com/'}>Gatsby</Link>,
              to staticly render. I am using MDX for posts and styled-components to handle the
              design. All deployed via <Link to={"https://www.netlify.com/"}>Netlify</Link> from
              its home on <Link to={siteRepoLink}>GitHub</Link>.
            </p>

            <CarbonFootprint />

            <h2 id={"reading"}>Currently reading</h2>

            <p>
              To keep track of the books I am reading
              with <Link to="https://www.goodreads.com/review/list/108722272?shelf=read&sort=date_read">Goodreads</Link>
              .
            </p>
            <p>
              I also keep a list of all the blog posts I've found and have read which you can see on
              my <Link to={'/resources/reading'}>reading list</Link>.
            </p>

            <hr/>
            <blockquote>
              <em>
                Everybody has a testing environment. Some people are lucky enough enough to have a
                totally separate environment to run production in.
              </em>
              <br /> - @stahnma
            </blockquote>
          </article>
        </PostContent>
        </Container>
      </main>
    </Layout>
  );
};

export const Head = () => <Meta title={'About me'} />

export default AboutPage;
