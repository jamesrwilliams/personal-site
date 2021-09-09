import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import PropTypes from 'prop-types';

export interface ResourceItemProps {
  link: string;
  description: string;
  linkText: string;
}

const ResourceItem = ({ link, description, linkText }: ResourceItemProps) => (
  <li>
    <OutboundLink target="_blank" rel="noopener nofollow" href={link}>{ linkText || link }</OutboundLink>
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
