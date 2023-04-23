import React, { FC, PropsWithChildren } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';

const StyledOutboundLink = styled(OutboundLink)`
  color: var(--brand-accentPrimary);
  text-decoration: none;
`;

const ExternalLink: FC<PropsWithChildren<{ href: string }>> = ({ href, children, ...props }) => (
  <StyledOutboundLink href={href} target="_blank" rel="noopener nofollow" {...props}>
    { children }
  </StyledOutboundLink>
);

export default ExternalLink;
