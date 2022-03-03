import React from 'react';
import PropTypes from 'prop-types';
import ResourceItem, { ResourceItemProps } from './ResourcesItem';

const ResourcesSection = ({ title, items }: { title: string, items: any[] }) => (
  <>
    <details id={title}>
      <summary>{ title }</summary>
      <ul>
        { items.map(({ link, description, linkText }: ResourceItemProps) => (
          <ResourceItem link={link} description={description} linkText={linkText} />
        )) }
      </ul>
    </details>
  </>
);

ResourcesSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    description: PropTypes.string,
    linkText: PropTypes.string,
  })).isRequired,
};

export default ResourcesSection;
