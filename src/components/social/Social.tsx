import React from 'react';

import {
    Codepen as CodepenIcon,
    Github as GitHubIcon,
    Hackerrank as HackerrankIcon,
    Instagram as InstagramIcon,
    Linkedin as LinkedinIcon,
    Pluralsight as PluralsightIcon,
    Stackoverflow as StackoverflowIcon,
    Twitter as TwitterIcon,
} from '@icons-pack/react-simple-icons'

import {OutboundLink} from 'gatsby-plugin-google-analytics'

const GitHub: React.FC = () => (
  <SocialIcon
      href={'https://github.com/jamesrwilliams/'}
      title="Follow me on GitHub github.com/jamesrwilliams">
    <GitHubIcon />
  </SocialIcon>
);

const Twitter: React.FC = () => (
  <SocialIcon
      href={'https://www.twitter.com/James_RWilliams'}
      title={'Follow me on twitter @James_RWilliams'}>
    <TwitterIcon />
  </SocialIcon>
);

const LinkedIn: React.FC = () => (
  <SocialIcon
      href={'https://www.linkedin.com/in/thejamesrwilliams/'}
      title={'Find me on LinkedIn @thejamesrwilliams'}>
    <LinkedinIcon />
  </SocialIcon>
);

const CodePen: React.FC = () => (
  <SocialIcon
      href={'https://codepen.io/jamesrwilliams/'}
      title={'Find me on Codepen @thejamesrwilliams'}>
    <CodepenIcon />
  </SocialIcon>
);

const StackOverflow: React.FC = () => (
  <SocialIcon
      href={'https://stackoverflow.com/users/1958764/james-w?tab=profile'}
      title={'Find me on stackoverflow'}>
    <StackoverflowIcon />
  </SocialIcon>
);

const HackerRank: React.FC = () => (
  <SocialIcon
      title={'Find me on HackerRank'}
      href={'https://www.hackerrank.com/jamesrwilliams'}>
    <HackerrankIcon />
  </SocialIcon>
);

const Instagram: React.FC = () => (
  <SocialIcon
      title={'Find me on Instagram'}
      href={'https://instagram.com/thejamesrwilliams'}>
    <InstagramIcon  />
  </SocialIcon>
);

const Pluralsight: React.FC = () => (
  <SocialIcon
      title={'Find me on Pluralsight'}
      href={'https://app.pluralsight.com/profile/jamesrwilliams'}>
    <PluralsightIcon  />
  </SocialIcon>
);

export {
  GitHub,
  Twitter,
  LinkedIn,
  CodePen,
  StackOverflow,
  HackerRank,
  Instagram,
  Pluralsight
}

const SocialIcon: React.FC<{ target?: string, href: string, title?: string }> = ({ target = '_blank', href='', title = '',  children }) => {
  return (
    <OutboundLink
      target={target}
      rel={'noopener noreferrer'}
      href={href}>
      { children }
    </OutboundLink>
  )
}
