import React from 'react';
import experienceTimeline, {ExperienceItem} from '../data/professional-experience';

export const ProfessionalExperience = () => (
  <ul>
    { experienceTimeline.map((position, index) => (
      <PositionEntry
        index={index}
        position={position}
      />
    ))}
  </ul>
);

export const PositionEntry = ({ position, index }: { position: ExperienceItem, index: number }) => (
  <li key={index}>
    <h4 style={{ marginBottom: 0 }}>{position.role} @ { position.company }</h4>
    <span style={{ marginTop: 0 }}>{ position.startDate } - { position.endDate }</span>
  </li>
);

export default ProfessionalExperience;
