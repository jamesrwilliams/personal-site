import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';

export interface ResourceItemProps {
  link: string;
  description: string;
  linkText: string;
}

const ResourceItem = ({ link, description, linkText }: ResourceItemProps) => (
  <li key={link} style={{ marginBottom: '.5rem' }}>
    <Link to={link}>{ linkText || link }</Link>
    { description ? <><span> - </span>{ description }</> : ''}
  </li>
);

ResourceItem.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string,
  linkText: PropTypes.string,
};

ResourceItem.defaultProps = {
  description: '',
  linkText: '',
};

export default ResourceItem;
