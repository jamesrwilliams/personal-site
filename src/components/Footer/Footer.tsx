import React from 'react';
import styled from 'styled-components';
import {
  GitHub,
  HackerRank,
  Instagram,
  LinkedIn,
  Pluralsight,
  StackOverflow,
  Twitter,
} from '../social/Social';
import Container from '../Container';
import HipHipArray from '../HipHipArray';
import {mediaQuery, primaryBlue} from '../../theme/variables';
import Spacer from '../utilities/general';

const socialLinks = [
  <GitHub />,
  <LinkedIn />,
  <Twitter />,
  <Instagram />,
  <Pluralsight />,
  <HackerRank />,
  <StackOverflow />,
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

  @media screen and ${mediaQuery.minMd} {
    justify-content: center;
    padding: 0 1rem;
  }
`;

const SocialFooterNavIconWrapper = styled.div`
  margin-left: 0;

  @media screen and ${mediaQuery.minMd} {
    margin-left: 1.25rem;
  }
`;

const Footer: React.FC = () => (
  <FooterElement>
    <FooterWrapper>
      <span style={{ alignSelf: 'center', paddingRight: '1rem' }}>
        ©
        {new Date().getFullYear()}
        {' '}
        James R. Williams
      </span>
      <HipHipArray />
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
