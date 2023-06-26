import React from 'react';
import {
  GitHub,
  HackerRank,
  Instagram,
  LinkedIn,
  Pluralsight,
  StackOverflow,
  TrailBlazer,
  CodePen,
  Mastodon, Keybase,
} from '../social/SocialIcons';

import {
  FooterElement,
  FooterMeta,
  FooterWrapper, HipHipArrayStyled,
  SocialFooterNav,
  SocialFooterNavIconWrapper
} from "./Footer.styled";

const HipHipArray: React.FC = () => (
  <HipHipArrayStyled role="img" aria-label="Hip Hip Array..." title="Hip Hip Array...">
    [&apos;hip&apos;,&apos;hip&apos;]
  </HipHipArrayStyled>
);

const socialLinks = [
  <GitHub />,
  <LinkedIn />,
  <Mastodon/>,
  <Instagram />,
  <CodePen />,
  <Pluralsight />,
  <HackerRank />,
  <StackOverflow />,
  <TrailBlazer />,
  <Keybase />
];

export const Footer: React.FC = () => (
  <FooterElement>
    <FooterWrapper>
      <FooterMeta>
        <span>
          ©
          {new Date().getFullYear()}
          {' '}
          James R. Williams
        </span>
        <HipHipArray />
      </FooterMeta>
      <span style={{ flexGrow: 1 }} />
      <SocialFooterNav>
        { socialLinks.map((SocialLink) => (
          <SocialFooterNavIconWrapper key={SocialLink.type}>
            { SocialLink }
          </SocialFooterNavIconWrapper>
        ))}
      </SocialFooterNav>
    </FooterWrapper>
  </FooterElement>
);
