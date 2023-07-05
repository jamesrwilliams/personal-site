import React from 'react';
import { Container } from '../../components';
import { HeroWrapper } from "./Hero.styled";
import { yearsOfExperience, currentPosition } from '../../data/experience';
import { CurrentPositionNode } from "../ProfessionalExperience";

export const Hero = () => (
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
