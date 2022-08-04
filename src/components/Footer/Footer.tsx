import React from 'react';
import styled from 'styled-components';
import {
  GitHub, HackerRank, Instagram, LinkedIn, Pluralsight, StackOverflow, TrailBlazer, Twitter,
} from '../social/Social';
import { mediaQuery } from '../../theme/variables';

const socialLinks = [
  <GitHub />,
  <LinkedIn />,
  <Twitter />,
  <Instagram />,
  <Pluralsight />,
  <HackerRank />,
  <StackOverflow />,
  <TrailBlazer />,
];

const FooterElement = styled.footer`
  background: ${({theme}) => theme.footer.background};
  color: ${({theme}) => theme.footer.color};
  position: relative;

  &:after {
    content: '';
    z-index: -5;
    position: absolute;
    left: 0;
    right: 0;
    display: block;
    background: ${({theme}) => theme.textGradient};
    height: 4px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 2rem;

  @media screen and ${mediaQuery.minMd} {
    flex-direction: row;
  }
`;

const SocialFooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 1rem;

  @media screen and ${mediaQuery.minMd} {
    justify-content: center;
    margin-top: 0;
    padding: 0 0 0 1rem;
  }
`;

const SocialFooterNavIconWrapper = styled.div`
  margin-left: 0;

  @media screen and ${mediaQuery.minMd} {
    margin-left: 1.25rem;
  }
`;

const FooterMeta = styled.span`
  align-self: center;
  padding-right: 1rem;
  font-size: 12px;
`;

const Footer: React.FC = () => (
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
      <Spacer />
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

export default Footer;

const HipHipArray: React.FC = () => (
  <code style={{ alignSelf: 'center', opacity: '.5', marginLeft: '1rem' }} role="img" aria-label="Hip Hip Array..." title="Hip Hip Array...">
    [&apos;hip&apos;,&apos;hip&apos;]
  </code>
);

export const Spacer = () => <span style={{ flexGrow: 1 }} />;
