import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import Container from '../Container';
import {mediaQuery, textGradient} from '../../theme/variables';
import { yearsOfExperience, currentPosition, ExperienceItem } from '../../data/experience';

const HeroWrapper = styled.div`
  position: relative;
  font-weight: 200;
  height: calc(100vh - 55px);
  display: flex;
  color: ${({theme}) => theme.headingColor};
  align-items: center;
  max-height: 1100px;

    .lead,
    .gradient {
      font-size: 25px;
      font-weight: 400;

      @media screen and ${mediaQuery.minMd} {
        font-size: 45px;
      }
    }

    .lead {
      margin-right: .7ch;
      font-weight: 200;
      transition: all 1s ease;
      margin-bottom: 1rem;
    }

    .intro {
      font-size: 16px;

      @media screen and ${mediaQuery.minMd} {
        max-width: 650px;
        font-size: 18px;
        padding-bottom: 2rem;
      }
    }

    .gradient {
      display: block;
      margin-top: 0;
      text-decoration: none;
      margin-bottom: 2rem;
      ${textGradient}
    }
`;

const Hero = () => (
  <HeroWrapper>
    <Container>
      <p className="lead">Hey, I&apos;m James!</p>
      <h1 className="gradient">A development engineer from Canada, building internet things with JavaScript.</h1>
      <div className="intro">
        <p>
          I have over { yearsOfExperience } years of experience building digital experiences and products, with
          a keen interest in developer experience, process automation and documentation. <CurrentPositionNode position={currentPosition} />
        </p>
      </div>
    </Container>
  </HeroWrapper>
);

export default Hero;

const StyledEmployerLink = styled(OutboundLink)`
  color: inherit;
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
`

const CurrentPositionNode = ({ position }: {position: ExperienceItem}) => {
  const { role, summary, company: { name, url } } = position;

  const companyLinkElm = <StyledEmployerLink href={url}>{name}</StyledEmployerLink>;

  const companyFragment = url ? companyLinkElm : position.company.name;

  return <>I am currently a {role}, working with the folks at {companyFragment}, {summary}.</>;
};
