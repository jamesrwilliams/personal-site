import React from 'react';
import {OutboundLink} from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import Container from '../Container';
import {primaryBlue} from '../../variables';

const HeroWrapper = styled.div`
    background: ${primaryBlue};
    padding: 2rem 2rem 10rem 2rem;
`;

const Hero = () => (
  <HeroWrapper>
    <Container>
      <h1 style={{ color: '#fff' }}>
        <span className="opacity-50 font-light">Hello there!</span>
        {' '}
        I'm James, a development engineer based in Canada, working with the team at
        <OutboundLink
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://points.com"
          style={{ marginBottom: 0 }}
        >
          Points.com
        </OutboundLink>
        . Building things for the internet with JavaScript and Python.
      </h1>
    </Container>
  </HeroWrapper>
);

export default Hero;
