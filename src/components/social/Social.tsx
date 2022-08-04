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
  Salesforce as SalesforceIcon,
} from '@icons-pack/react-simple-icons';

import { OutboundLink } from 'gatsby-plugin-google-analytics';
import {
  codePenUrl,
  gitHubUrl,
  hackerRankUrl,
  instagramUrl,
  linkedInUrl as linkedinUrl,
  pluralsightUrl, salesforceTrailBlazerUrl,
  stackOverflowUrl as stackoverflowUrl,
  twitterUrl,
} from '../../data/urls';

const GitHub: React.FC = () => (
  <SocialIcon
    href={gitHubUrl}
    title="Follow me on GitHub github.com/jamesrwilliams"
  >
    <GitHubIcon size={18} />
  </SocialIcon>
);

const Twitter: React.FC = () => (
  <SocialIcon
    href={twitterUrl}
    title="Follow me on twitter @James_RWilliams"
  >
    <TwitterIcon size={18} />
  </SocialIcon>
);

const LinkedIn: React.FC = () => (
  <SocialIcon
    href={linkedinUrl}
    title="Find me on LinkedIn @thejamesrwilliams"
  >
    <LinkedinIcon size={18} />
  </SocialIcon>
);

const CodePen: React.FC = () => (
  <SocialIcon
    href={codePenUrl}
    title="Find me on Codepen @thejamesrwilliams"
  >
    <CodepenIcon size={18}  />
  </SocialIcon>
);

const StackOverflow: React.FC = () => (
  <SocialIcon
    href={stackoverflowUrl}
    title="Find me on stackoverflow"
  >
    <StackoverflowIcon size={18}  />
  </SocialIcon>
);

const HackerRank: React.FC = () => (
  <SocialIcon
    href={hackerRankUrl}
    title="Find me on HackerRank"
  >
    <HackerrankIcon size={18}  />
  </SocialIcon>
);

const Instagram: React.FC = () => (
  <SocialIcon
    title="Find me on Instagram"
    href={instagramUrl}
  >
    <InstagramIcon size={18}  />
  </SocialIcon>
);

const Pluralsight: React.FC = () => (
  <SocialIcon
    title="Find me on Pluralsight"
    href={pluralsightUrl}
  >
    <PluralsightIcon size={18}  />
  </SocialIcon>
);

const TrailBlazer: React.FC = () => (
  <SocialIcon href={salesforceTrailBlazerUrl} title="Salesforce Trailblazer">
    <SalesforceIcon size={18}  />
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
  TrailBlazer,
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
    style={{ height: 18, width: 18 }}
  >
    { children }
  </OutboundLink>
);

SocialIcon.defaultProps = {
  target: '_blank',
};
