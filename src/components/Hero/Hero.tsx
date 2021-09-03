import React from 'react';
import {OutboundLink} from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import Container from '../Container';
import {primaryBlue, textGradient} from '../../variables';

const HeroWrapper = styled.div`
    background: ${primaryBlue};
    padding: 4rem 0 2rem;
    position: relative;
    font-weight: 200;
  color: #fff;
  margin-bottom: 150px;

    @media screen and (min-width: 700px) {
      padding: 8rem 2rem 2rem;
    }

    p.intro,
    p.gradient {
      font-size: 25px;
      font-weight: 400;

      @media screen and (min-width: 700px) {
        font-size: 45px;
      }

    }

    p.intro {
      margin-right: .7ch;
      margin-bottom: 0;
    }

    p.intro {
      font-weight: 200;
    }

    p.gradient {
      display: block;
      margin-top: 0;
      text-decoration: none;
      margin-bottom: 3rem;
      ${textGradient}
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
        //background: linear-gradient(to right, #fff0, #fff0, #fff, #fff);
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
      background: ${primaryBlue};
      //clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
      clip-path: polygon(0 0, 100% 0, 0 100%);
      height: 20px;

       @media screen and (min-width: 700px) {
        height: 150px;
       }

    }
`;

const Hero = () => (
  <HeroWrapper>
    <Container>
      <p className="intro">Hello, I'm James!</p>
      <p className="gradient">A development engineer from Canada, Building things for the internet with JavaScript and Python.</p>
      <p className="intro" style={{ fontSize: '24px', marginTop: 0 }}>I'm currently working with the team at <OutboundLink>Points.com</OutboundLink>. Focusing on developer experience,
        tooling, and workflow automation.
      </p>
    </Container>
  </HeroWrapper>
);

export default Hero;
