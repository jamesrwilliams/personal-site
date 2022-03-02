import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { accentPrimary, primaryBlue } from '../../theme/variables';

const buttonStyles = css`
  background: ${primaryBlue};
  color: #fff;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 5px;
  touch-action: manipulation;
  user-select: none;
  text-decoration: none;

  &:hover {
    border-color: ${accentPrimary};
    color: ${accentPrimary};
  }
`;

export const InternalLinkButton = styled(Link)` ${buttonStyles} `;
export const ExternalLinkButton = styled(OutboundLink)` ${buttonStyles} `;
