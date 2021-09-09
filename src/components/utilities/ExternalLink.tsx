import React from 'react';
import {OutboundLink} from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/jsx-props-no-spreading
export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, ...props }) => <OutboundLink href={href} target="_blank" rel="noopener nofollow" {...props}>{ children }</OutboundLink>;

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element,
};

ExternalLink.defaultProps = {
  children: [],
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const StyledExternalLink: React.FC<ExternalLinkProps> = ({ href, children, ...props }) => <ExternalLink href={href} {...props}>{ children }</ExternalLink>;

StyledExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element,
};

StyledExternalLink.defaultProps = {
  children: [],
};
