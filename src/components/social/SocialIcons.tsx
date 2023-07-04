import React from 'react';

import {
  SiCodepen as CodepenIcon,
  SiGithub as GitHubIcon,
  SiHackerrank as HackerrankIcon,
  SiInstagram as InstagramIcon,
  SiLinkedin as LinkedinIcon,
  SiPluralsight as PluralsightIcon,
  SiStackoverflow as StackoverflowIcon,
  SiSalesforce as SalesforceIcon, SiMastodon,
} from '@icons-pack/react-simple-icons';

import {
  codePenUrl,
  gitHubUrl,
  hackerRankUrl,
  instagramUrl,
  linkedInUrl as linkedinUrl,
  pluralsightUrl, salesforceTrailBlazerUrl,
  stackOverflowUrl as stackoverflowUrl,
  mastodonUrl,
} from '../../data/urls';
import {FaKeybase} from "react-icons/fa";

export const Mastodon: React.FC = () => (
  <SocialIcon href={mastodonUrl} title={'Chat with me on Mastodon'}>
    <SiMastodon size={18} />
  </SocialIcon>
)

export const GitHub: React.FC = () => (
  <SocialIcon
    href={gitHubUrl}
    title="Follow me on GitHub github.com/jamesrwilliams"
  >
    <GitHubIcon size={18} />
  </SocialIcon>
);

export const LinkedIn: React.FC = () => (
  <SocialIcon
    href={linkedinUrl}
    title="Find me on LinkedIn @thejamesrwilliams"
  >
    <LinkedinIcon size={18} />
  </SocialIcon>
);

export const CodePen: React.FC = () => (
  <SocialIcon
    href={codePenUrl}
    title="Find me on Codepen @thejamesrwilliams"
  >
    <CodepenIcon size={18}  />
  </SocialIcon>
);

export const StackOverflow: React.FC = () => (
  <SocialIcon
    href={stackoverflowUrl}
    title="Find me on stackoverflow"
  >
    <StackoverflowIcon size={18}  />
  </SocialIcon>
);

export const HackerRank: React.FC = () => (
  <SocialIcon
    href={hackerRankUrl}
    title="Find me on HackerRank"
  >
    <HackerrankIcon size={18}  />
  </SocialIcon>
);

export const Instagram: React.FC = () => (
  <SocialIcon
    title="Find me on Instagram"
    href={instagramUrl}
  >
    <InstagramIcon size={18} />
  </SocialIcon>
);

export const Pluralsight: React.FC = () => (
  <SocialIcon
    title="Find me on Pluralsight"
    href={pluralsightUrl}
  >
    <PluralsightIcon size={18} />
  </SocialIcon>
);

export const TrailBlazer: React.FC = () => (
  <SocialIcon href={salesforceTrailBlazerUrl} title="Salesforce Trailblazer">
    <SalesforceIcon size={18}  />
  </SocialIcon>
);

export const Keybase: React.FC = () => (
  <SocialIcon href={""} title={"James on keybase.io"}>
    <FaKeybase size={18} />
  </SocialIcon>
)

interface socialIconInterface {
  target?: string;
  href: string;
  title: string;
  children: React.ReactNode;
}

const SocialIcon = ({
  target, href, title, children,
}: socialIconInterface) => (
  <a
    target={target}
    title={title}
    rel="noopener noreferrer me"
    href={href}
    style={{ height: 18, width: 18 }}
  >
    { children }
  </a>
);

SocialIcon.defaultProps = {
  target: '_blank',
};
