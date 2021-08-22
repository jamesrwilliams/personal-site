import React from 'react';
import {GitHub, HackerRank, Instagram, LinkedIn, Pluralsight, StackOverflow, Twitter,} from '../social/Social';
import Container from '../Container';
import {primaryBlue} from '../../variables';

const socialLinks = [
  <GitHub />,
  <LinkedIn />,
  <Twitter />,
  <Instagram />,
  <Pluralsight />,
  <HackerRank />,
  <StackOverflow />,
];

const Footer: React.FC<{ buildID: string, buildTime: string }> = ({ buildID, buildTime }) => (
  <footer
    style={{ background: primaryBlue, color: '#fff' }}
    data-build-id={buildID}
    data-build-date={buildTime}
  >
    <Container>
      <div style={{ paddingTop: '2rem', paddingBottom: '2rem', display: 'flex' }}>
        <span style={{ alignSelf: 'center', paddingRight: '1rem' }}>
          ©
          {new Date().getFullYear()}
          {' '}
          James R. Williams
        </span>
        <code style={{ alignSelf: 'center', opacity: '.5' }} className="opacity-50 self-center" role="img" aria-label="Hip Hip Array " title="Hip Hip Array ">['hip','hip']</code>
        <span style={{ flexGrow: 1 }} />
        <nav style={{ display: 'flex' }} className="mt-6 justify-center md:mt-0 flex">
          { socialLinks.map((SocialLink, index) => (
            <div key={index} style={{ marginLeft: '1.25rem' }}>
              { SocialLink }
            </div>
          ))}
        </nav>
      </div>
    </Container>
  </footer>
);

export default Footer;
