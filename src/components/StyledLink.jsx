import {Link} from 'gatsby';
import styled from 'styled-components';
import {accentPrimary} from '../theme/variables';

const StyledLinkElement = styled(Link)`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid #d9d9d9;
  box-shadow: 0 2px #00000004;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: inherit;
  background: #fff;
  text-decoration: none;

  &:hover {
    border-color: ${accentPrimary};
    color: ${accentPrimary};
  }
`;

export default StyledLinkElement;
