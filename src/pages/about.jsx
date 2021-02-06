import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/utilities/seo'
import PageHeader from '../components/page-header/page-header'
import { GitHub, HackerRank, Instagram, LinkedIn, Pluralsight, StackOverflow, Twitter } from '../components/social'

const AboutPage = () => {

  return (
    <Layout footerHidden={true}>
      <SEO title="About me" />
      <PageHeader title={"About me"} />
      <main>

        <article style={{ maxWidth: '50%' }}>
          <h5>BIO</h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae commodi consequuntur culpa deleniti hic id inventore itaque nemo neque, officiis omnis, perferendis placeat praesentium, provident repellat repudiandae unde vel.
        </article>

        <section>
          <h4>Skills</h4>
          <p>Front End Technologies</p>
          <p>Backend</p>
          <p>Services</p>
          <p>Products</p>
          <ul>
            <li>Adobe Creative Suite (Photoshop, Illustrator, XD, InDesign, Premier Pro)</li>
          </ul>
        </section>

        <section>
          <a href={'/cv/'}>View Resume</a>
        </section>

        <section>
          <h4>Experience</h4>
          <ul>
            <li>
              <h3>Web Developer @ Points.com</h3>
              <p>Toronto | 2019 Mar - Current</p>
            </li>
            <li>
              <h3>Web Developer @ Silver Agency, Cheltenham</h3>
              <p>2016 Oct - 2018 Nov</p>
            </li>
            <li>
              <h3>Web Developer @ Fusion Design & Print LTD, Cheltenham</h3>
              <p>2016 Mar - 2016 Oct</p>
            </li>
          </ul>
        </section>

        <section style={{ background: '#eee', textAlign: 'center', padding: '2rem' }}>
          <div className="container">
            <h2>Around the web</h2>
            <ul>
              <li><GitHub /></li>
              <li><Twitter /></li>
              <li><LinkedIn /></li>
              <li><HackerRank /></li>
              <li><StackOverflow /></li>
              <li><Instagram /></li>
              <li><Pluralsight /></li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
