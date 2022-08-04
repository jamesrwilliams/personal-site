import React from 'react';
import styled, { css } from 'styled-components';
import { ExperienceItem, experienceTimeline } from '../data/experience';
import { accentPrimary } from '../theme/variables';

const ExperienceList = styled.ul`
  list-style: none;
  position: relative;
  padding: 0;
  margin-top: 4rem;
  margin-left: 5px;
  border-left: 1px solid ${({theme}) => theme.textColor}20;

  &:after,
  &:before {
    content: '';
    bottom: -1px;
    position: absolute;
    background: ${({theme}) => theme.textColor}20;
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
    background: ${({theme}) => theme.textColor}50;
    left: -5px;
  }

  .title {
    line-height: 1;

    &.current {
      font-weight: 600;
      color: ${({theme}) => theme.headingColor};
    }
  }

  ${(props) => props.pos === 0 && css`
    &:before {
      border-color: transparent !important;
      background: ${accentPrimary};
      background: linear-gradient(to top right, ${accentPrimary}, #01d8d1);
    }
  `}
`;

const PositionEntryLine = () => {
  return
}

export const PositionEntry = ({ position, index }: { position: ExperienceItem, index: number }) => (
  <ExperienceListItem pos={index} key={`pos-${index}`}>
    <div className={`title ${index === 0 ? 'current' : ''}`}>{position.role} @ { position.company.name }</div>
    <div style={{ opacity: 0.7, fontSize: '90%' }}>{ position.company.location } &bull; { position.startDate } to { position.endDate }</div>
  </ExperienceListItem>
);

export default ProfessionalExperienceTimeline;
