import React from 'react';
import styled from 'styled-components';
import {
  GitHub, HackerRank, Instagram, LinkedIn, Pluralsight, StackOverflow, TrailBlazer, Twitter, CodePen,
} from '../social/Social';
import { mediaQuery } from '../../theme/variables';
import {HipHipArray} from "../HipHipArray/HipHipArray";

const socialLinks = [
  <GitHub />,
  <LinkedIn />,
  <Twitter />,
  <Instagram />,
  <CodePen />,
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

export default Footer;
