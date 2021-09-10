import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentPrimary } from '../../theme/variables';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledOutboundLink = styled(OutboundLink)`
  color: ${accentPrimary};
  text-decoration: none;
`;

// eslint-disable-next-line react/jsx-props-no-spreading
export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, ...props }) => <StyledOutboundLink href={href} target="_blank" rel="noopener nofollow" {...props}>{ children }</StyledOutboundLink>;

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element,
};

ExternalLink.defaultProps = {
  children: [],
};

export const StyledExternalLink: React.FC<ExternalLinkProps> = (
  { href, children, ...props },
  // eslint-disable-next-line react/jsx-props-no-spreading
) => <ExternalLink href={href} {...props}>{ children }</ExternalLink>;

StyledExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element,
};

StyledExternalLink.defaultProps = {
  children: [],
};
