import React from 'react';
import Container from '../Container';

import {HeroWrapper, StyledEmployerLink} from "./Hero.styled";
import { yearsOfExperience, currentPosition, ExperienceItem } from '../../data/experience';

const Hero = () => (
  <HeroWrapper>
    <Container>
      <p className="lead">Hey, I&apos;m James!</p>
      <h1 className="gradient">A development engineer from Canada, building internet things with JavaScript.</h1>
      <div className="intro">
        <p>
          I have over { yearsOfExperience } years of experience building digital experiences and products, with
          a keen interest in developer experience, process automation and documentation.
        </p>
        <p><CurrentPositionNode position={currentPosition} /></p>
      </div>
    </Container>
  </HeroWrapper>
);

export default Hero;


const CurrentPositionNode = ({ position }: {position: ExperienceItem}) => {
  const { role, summary, company: { name, url } } = position;

  const companyLinkElm = <StyledEmployerLink href={url}>{name}</StyledEmployerLink>;

  const companyFragment = url ? companyLinkElm : position.company.name;

  return <>I am currently a {role}, working with the folks at {companyFragment}, {summary}.</>;
};
