/* eslint-disable react/jsx-props-no-spreading */
import React, {FC, PropsWithChildren} from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { InternalLinkButton, ExternalLinkButton } from './_buttons';

interface LinkProps extends PropsWithChildren {
  to: string;
  type?: 'button' | 'link';
}

const ExternalLink = styled(OutboundLink)`
  color: var(--brand-accentLinkColor);
  text-decoration: none;
`;

const StyledInternalLink = styled(GatsbyLink)`
  color: var(--brand-accentLinkColor);
  text-decoration: none;
`;

const Link: FC<LinkProps> = ({type, to, children, ...props}: LinkProps) => {
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
  return <StyledInternalLink to={to} {...props}>{ children }</StyledInternalLink>;
};

Link.defaultProps = {
  type: 'link',
};

export default Link;
