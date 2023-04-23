import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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

export const InternalLinkButton = styled(Link)` ${buttonStyles} `;
export const ExternalLinkButton = styled(OutboundLink)` ${buttonStyles} `;
