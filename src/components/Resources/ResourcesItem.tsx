import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from '../utilities/ExternalLink';

export interface ResourceItemProps {
  link: string;
  description: string;
  linkText: string;
}

const ResourceItem = ({ link, description, linkText }: ResourceItemProps) => (
  <li style={{ marginBottom: '.5rem' }}>
    <ExternalLink href={link}>{ linkText || link }</ExternalLink>
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
