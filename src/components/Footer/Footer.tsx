import React from 'react';
import styled from 'styled-components';
import {
  GitHub, HackerRank, Instagram, LinkedIn, Pluralsight, StackOverflow, TrailBlazer, Twitter,
} from '../social/Social';
import Container from '../Container';
import HipHipArray from '../HipHipArray';
import { mediaQuery, primaryBlue } from '../../theme/variables';
import Spacer from '../Spacer';

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
  background: ${primaryBlue};
  color: #fff;
`;

const FooterWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 0;

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
    padding: 0 1rem;
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

  @media screen and ${mediaQuery.minMd} {
    margin-left: 1.25rem;
  }
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
