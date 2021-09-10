import React from 'react';
import styled, { css } from 'styled-components';
import experienceTimeline, { ExperienceItem } from '../data/professional-experience';
import { accentPrimary } from '../theme/variables';

const ExperienceList = styled.ul`
  list-style: none;
  position: relative;
  padding: 0;
  margin-left: 5px;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -1px;
    width: 10px;
    left: -10px;
    height: 1px;
    background: #eee;
  }
`;

export const ProfessionalExperience = () => (
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
  margin-bottom: 1rem;
  padding-bottom: .5rem;
  padding-left: 1rem;

  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 9px;
    width: 9px;
    border-radius: 5px;
    background: #ccc;
    left: -5px;
  }

  ${(props) => props.pos === 0 && css`
    &:before {
      background: ${accentPrimary};
    }
  `}
`;

export const PositionEntry = ({ position, index }: { position: ExperienceItem, index: number }) => (
  <ExperienceListItem pos={index} key={index}>
    <div style={{ fontWeight: 'bold', lineHeight: 1 }}>{position.role} @ { position.company }</div>
    <div style={{ opacity: 0.7 }}>{ position.startDate } to { position.endDate }</div>
  </ExperienceListItem>
);

export default ProfessionalExperience;
