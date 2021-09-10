/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { InternalLinkButton, ExternalLinkButton } from './_buttons';
import { accentPrimary } from '../../theme/variables';

interface LinkProps {
  type?: 'button' | 'link';
  children: React.ReactNode;
  to: string;
}

const ExternalLink = styled(OutboundLink)`
  color: ${accentPrimary};
  text-decoration: none;
`;

const Link = ({
  type, to, children, ...props
}: LinkProps) => {
  const external = (to.indexOf('http://') === 0 || to.indexOf('https://') === 0);

  if (external) {
    if (type === 'button') {
      return <ExternalLinkButton href={to} {...props}>{ children }</ExternalLinkButton>;
    }
    return <ExternalLink target="_blank" rel="noopener nofollow" href={to} {...props}>{ children }</ExternalLink>;
  }
  if (type === 'button') {
    return <InternalLinkButton to={to} {...props}>{ children }</InternalLinkButton>;
  }
  return <GatsbyLink to={to} {...props}>{ children }</GatsbyLink>;
};

Link.defaultProps = {
  type: 'link',
};

export default Link;
