import React from 'react';
import PropTypes from 'prop-types';
import ResourceItem from './ResourcesItem';

const ResourcesSection = ({ title, items }) => (
  <>
    <h3 id={title}>{ title }</h3>
    <ul>
      { items.map(({ link, description, linkText }) => (
        <ResourceItem link={link} description={description} linkText={linkText} />
      )) }
    </ul>
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
