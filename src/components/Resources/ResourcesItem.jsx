import {OutboundLink} from 'gatsby-plugin-google-analytics';
import React from 'react';
import PropTypes from 'prop-types';

const ResourceItem = ({ link, description, linkText }) => (
  <li>
    <OutboundLink href={link}>{ linkText || link }</OutboundLink>
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
