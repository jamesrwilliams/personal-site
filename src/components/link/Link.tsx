import React, {FC, PropsWithChildren} from 'react';
import {
  ExternalLinkButton,
  InternalLinkButton,
  StyledInternalLink,
  StyledOutboundLink
} from "./Link.styled";

interface LinkProps extends PropsWithChildren {
  to: string;
  type?: 'button' | 'link';
}

const ExternalLink: FC<PropsWithChildren<{ href: string }>> = ({ href, children, ...props }) => (
  <StyledOutboundLink href={href} target="_blank" rel="noopener nofollow" {...props}>
    { children }
  </StyledOutboundLink>
);

export const Link: FC<LinkProps> = ({type, to, children, ...props}: LinkProps) => {
  const external = (to.indexOf('http://') === 0 || to.indexOf('https://') === 0);

  if (external) {
    if (type === 'button') {
      return <ExternalLinkButton href={to} {...props}>{ children }</ExternalLinkButton>;
    }
    return <ExternalLink href={to} {...props}>{ children }</ExternalLink>;
  }
  if (type === 'button') {
    return <InternalLinkButton to={to} {...props}>{ children }</InternalLinkButton>;
  }
  return <StyledInternalLink to={to} {...props}>{ children }</StyledInternalLink>;
};
