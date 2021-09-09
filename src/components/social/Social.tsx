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
} from '@icons-pack/react-simple-icons';

import { OutboundLink } from 'gatsby-plugin-google-analytics';
import {
  codePenUrl,
  gitHubUrl,
  hackerRankUrl,
  instagramUrl,
  linkedInUrl as linkedinUrl,
  pluralsightUrl,
  stackOverflowUrl as stackoverflowUrl,
  twitterUrl,
} from '../../data/urls';

const GitHub: React.FC = () => (
  <SocialIcon
    href={gitHubUrl}
    title="Follow me on GitHub github.com/jamesrwilliams"
  >
    <GitHubIcon />
  </SocialIcon>
);

const Twitter: React.FC = () => (
  <SocialIcon
    href={twitterUrl}
    title="Follow me on twitter @James_RWilliams"
  >
    <TwitterIcon />
  </SocialIcon>
);

const LinkedIn: React.FC = () => (
  <SocialIcon
    href={linkedinUrl}
    title="Find me on LinkedIn @thejamesrwilliams"
  >
    <LinkedinIcon />
  </SocialIcon>
);

const CodePen: React.FC = () => (
  <SocialIcon
    href={codePenUrl}
    title="Find me on Codepen @thejamesrwilliams"
  >
    <CodepenIcon />
  </SocialIcon>
);

const StackOverflow: React.FC = () => (
  <SocialIcon
    href={stackoverflowUrl}
    title="Find me on stackoverflow"
  >
    <StackoverflowIcon />
  </SocialIcon>
);

const HackerRank: React.FC = () => (
  <SocialIcon
    href={hackerRankUrl}
    title="Find me on HackerRank"
  >
    <HackerrankIcon />
  </SocialIcon>
);

const Instagram: React.FC = () => (
  <SocialIcon
    title="Find me on Instagram"
    href={instagramUrl}
  >
    <InstagramIcon />
  </SocialIcon>
);

const Pluralsight: React.FC = () => (
  <SocialIcon
    title="Find me on Pluralsight"
    href={pluralsightUrl}
  >
    <PluralsightIcon />
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
  Pluralsight,
};

interface socialIconInterface {
  target?: string;
  href: string;
  title: string;
  children: any;
}

const SocialIcon = ({
  target, href, title, children,
}: socialIconInterface) => (
  <OutboundLink
    target={target}
    title={title}
    rel="noopener noreferrer"
    href={href}
    style={{ color: '#fff', display: 'block' }}
  >
    { children }
  </OutboundLink>
);

SocialIcon.defaultProps = {
  target: '_blank',
};
