import React from 'react';
import ResourceItem, { ResourceItemProps } from './ResourcesItem';

interface ResourceSelectionProps {
  title: string;
  items: {
    link: string;
    description: string;
    linkText: string;
  }[]
}

const ResourcesSection = ({ title, items }: ResourceSelectionProps) => (
  <>
    <h2 id={title}>{ title }</h2>
    <ul>
      { items.map(({ link, description, linkText }: ResourceItemProps) => (
        <ResourceItem link={link} description={description} linkText={linkText} />
      )) }
    </ul>
  </>
);

export default ResourcesSection;
