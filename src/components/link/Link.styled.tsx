import styled, {css} from "styled-components";
import {Link} from "gatsby";
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

export const ExternalLink = styled.a`
  color: var(--brand-accentLinkColor);
  text-decoration: none;
`;

export const StyledInternalLink = styled(GatsbyLink)`
  color: var(--brand-accentLinkColor);
  text-decoration: none;
`;

export const InternalLinkButton = styled(Link)` ${buttonStyles} `;
export const ExternalLinkButton = styled.a` ${buttonStyles} `;

export const StyledOutboundLink = styled.a`
  color: var(--brand-accentPrimary);
  text-decoration: none;
`;
