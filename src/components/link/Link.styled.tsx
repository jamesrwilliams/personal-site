import styled, {css} from "styled-components";
import {Link} from "gatsby";
import {OutboundLink} from "gatsby-plugin-google-analytics";
import {Link as GatsbyLink} from "gatsby-link";

const buttonStyles = css`
  background: var(--brand-primaryBlue);
  color: #fff;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 5px;
  touch-action: manipulation;
  user-select: none;
  text-decoration: none;

  &:hover {
    border-color: var(--brand-accentPrimary);
    color: var(--brand-accentPrimary);
  }
`;

export const ExternalLink = styled(OutboundLink)`
  color: var(--brand-accentLinkColor);
  text-decoration: none;
`;

export const StyledInternalLink = styled(GatsbyLink)`
  color: var(--brand-accentLinkColor);
  text-decoration: none;
`;

export const InternalLinkButton = styled(Link)` ${buttonStyles} `;
export const ExternalLinkButton = styled(OutboundLink)` ${buttonStyles} `;

export const StyledOutboundLink = styled(OutboundLink)`
  color: var(--brand-accentPrimary);
  text-decoration: none;
`;
