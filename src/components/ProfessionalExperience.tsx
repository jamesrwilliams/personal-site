import React from 'react';
import styled, { css } from 'styled-components';
import { ExperienceItem, experienceTimeline } from '../data/experience';
import {StyledEmployerLink} from "./hero/Hero.styled";

const ExperienceList = styled.ul`
  list-style: none;
  position: relative;
  padding: 0;
  margin-top: 4rem;
  margin-left: 5px;
  border-left: 1px solid #fff1;

  &:after,
  &:before {
    content: '';
    bottom: -1px;
    position: absolute;
    background: #fff1;
    width: 10px;
    height: 1px;
  }

  &:after {
    left: 0;
  }

  &:before {
    left: -10px;
  }
`;

export const ProfessionalExperienceTimeline = () => (
  <ExperienceList>
    { experienceTimeline.map((position, index) => (
      <PositionEntry
        key={position.endDate}
        index={index}
        position={position}
      />
    ))}
  </ExperienceList>
);

const ExperienceListItem = styled.li<{ pos: number }>`
  list-style: none;
  margin-bottom: 1rem !important;
  padding-bottom: .5rem;
  padding-left: 1rem;

  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 9px;
    width: 9px;
    border-radius: 5px;
    background: #fff1;
    left: -5px;
  }

  .title {
    line-height: 1;

    &.current {
      font-weight: 600;
      color: var(--typography-primary);
    }
  }

  ${(props) => props.pos === 0 && css`
    &:before {
      border-color: transparent !important;
      background: var(--brand-accentPrimary);
      background: linear-gradient(to top right, var(--brand-accentPrimary), #01d8d1);
    }
  `}
`;

export const PositionEntry = ({ position, index }: { position: ExperienceItem, index: number }) => (
  <ExperienceListItem pos={index} key={`pos-${index}`}>
    <div className={`title ${index === 0 ? 'current' : ''}`}>{position.role} @ { position.company.name }</div>
    <div style={{ opacity: 0.7, fontSize: '90%' }}>{ position.company.location } &bull; { position.startDate } to { position.endDate }</div>
  </ExperienceListItem>
);

export default ProfessionalExperienceTimeline;

export const CurrentPositionNode = ({ position }: {position: ExperienceItem}) => {
  const { role, summary, company: { name, url } } = position;

  const companyLinkElm = <StyledEmployerLink href={url}>{name}</StyledEmployerLink>;

  const companyFragment = url ? companyLinkElm : position.company.name;

  return <>I am currently a {role}, working with the folks at {companyFragment}, {summary}.</>;
};
