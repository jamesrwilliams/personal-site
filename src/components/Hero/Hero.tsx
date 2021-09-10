import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import Container from '../Container';
import {
  mediaQuery, primaryBlue, secondaryBlue, textGradient,
} from '../../theme/variables';

const heroFill = secondaryBlue;

const HeroWrapper = styled.div`
  background: linear-gradient(to top, ${heroFill}, ${primaryBlue});
  padding: 4rem 0 2rem;
  position: relative;
  font-weight: 200;
  color: #fff;
  z-index: 200;
  margin-bottom: 75px;

  @media screen and ${mediaQuery.minMd} {
      padding: 8rem 0 0;
      margin-bottom: 150px;
    }

    p.lead,
    p.gradient {
      font-size: 25px;
      font-weight: 400;

      @media screen and ${mediaQuery.minMd} {
        font-size: 45px;
      }
    }

    p.lead {
      margin-right: .7ch;
      font-weight: 200;
      transition: all 1s ease;
      margin-bottom: 1rem;
    }

    p.intro {
      margin-bottom: 0;
      margin-top: 0;
      font-size: 16px;

      @media screen and ${mediaQuery.minMd} {
        margin-right: 4rem;
        font-size: 18px;
      }
    }

    p.gradient {
      display: block;
      margin-top: 0;
      text-decoration: none;
      margin-bottom: 1rem;
      ${textGradient}

      @media screen and ${mediaQuery.minMd} {
        margin-bottom: 3rem;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      position: relative;
      overflow: hidden;

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: .1ch;
        right: .1ch;
        bottom: 0;
        height: 2px;
        background: linear-gradient(to right, #fff0, #fff0, #0ba7fd, #01d8d1);
        background-size: 300% 200%;
        transition: all 1s ease;
      }

      &:hover:after {
        background-position: 100% 0;
      }
    }

    &:after {
      content: '';
      z-index: -5;
      position: absolute;
      transform: translateY(calc(100% - 1px));
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      background: linear-gradient(to top, #021526, ${heroFill});
      //clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
      clip-path: polygon(0 0, 100% 0, 0 100%);
      height: 50px;

      @media screen and ${mediaQuery.minMd} {
        height: 15vw;
        max-height: 150px;
       }
    }
`;

const Hero = () => (
  <HeroWrapper>
    <Container>
      <p className="lead">Hello, I&apos;m James!</p>
      <p className="gradient">A development engineer from Canada, building internet things with JavaScript and Python.</p>
      <p className="intro">
        I have a keen interest in developer experience, tooling, and process automation, with a
        healthy obsession with documentation. I am currently working with the team
        at <OutboundLink href="https://www.points.com">Points.com.</OutboundLink>
      </p>
    </Container>
  </HeroWrapper>
);

export default Hero;
