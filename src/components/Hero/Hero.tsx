import React from 'react';
import {OutboundLink} from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import Container from '../Container';
import {primaryBlue, textGradient} from '../../variables';

const HeroWrapper = styled.div`
  background: ${primaryBlue};
  padding: 4rem 0;
  position: relative;
  font-weight: 200;
  color: #fff;
  margin-bottom: 150px;

    @media screen and (min-width: 700px) {
      padding: 8rem 2rem 0;
    }


    p.lead,
    p.gradient {
      font-size: 25px;
      font-weight: 400;

      @media screen and (min-width: 700px) {
        font-size: 45px;
      }

    }

    p.lead {
      margin-right: .7ch;
      font-weight: 200;
      transition: all 1s ease;

      @media screen and (min-width: 700px) {
        margin-bottom: 0;
      }
    }

    p.intro {
      margin-bottom: 0;
      margin-top: 0;
      font-size: 18px;
      margin-right: 4rem;
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
      <p className="lead">Hello, I&apos;m James!</p>
      <p className="gradient">A development engineer from Canada, Building things for the internet with JavaScript and Python.</p>
      <p className="intro">
        I have a keen interest in developer experience, tooling, and process automation. I am
        currently working with the team at <OutboundLink>Points.com</OutboundLink>.
      </p>
    </Container>
  </HeroWrapper>
);

export default Hero;
