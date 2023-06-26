import styled from "styled-components";
import {mediaQuery} from "../../theme/variables";

export const FooterElement = styled.footer`
  background: var(--brand-darker);
  color: var(--typography-link-color);
  position: relative;

  &:after {
    content: '';
    z-index: -5;
    position: absolute;
    left: 0;
    right: 0;
    display: block;
    background: var(--text-gradient);
    height: 4px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 2rem;

  @media screen and ${mediaQuery.minMd} {
    flex-direction: row;
  }
`;

export const SocialFooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 1rem;

  @media screen and ${mediaQuery.minMd} {
    justify-content: center;
    margin-top: 0;
    padding: 0 0 0 1rem;
  }
`;

export const HipHipArrayStyled = styled.code`
  align-self: center;
  opacity: .5;
  margin-left: 1rem;
`;


export const SocialFooterNavIconWrapper = styled.div`
  margin-left: 0;

  @media screen and ${mediaQuery.minMd} {
    margin-left: 1.25rem;
  }
`;

export const FooterMeta = styled.span`
  align-self: center;
  padding-right: 1rem;
  font-size: 12px;
`;
