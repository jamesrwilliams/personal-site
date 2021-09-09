import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { mediaQuery, primaryBlue } from '../../theme/variables';
import Container from '../Container';
import Spacer from '../utilities/general';

const HeaderContainer = styled.header`
  background: ${primaryBlue};
  color: #fff;
  padding: 1rem 0;
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  flex-direction: column;

  @media screen and ${mediaQuery.minMd} {
    flex-direction: row;
  }

  a {
    text-decoration: none;
  }
`;

const PrimaryNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 24px;
  margin-bottom: .5rem;

  @media screen and ${mediaQuery.minMd} {
    margin-bottom: 0;
    font-size: 100%;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderWrapper>
      <PrimaryNavLink to="/">James R. Williams</PrimaryNavLink>
      <Spacer />
      <nav>
        <NavLink label="About" url="/about/" />
        <NavLink label="Posts" url="/posts/" />
        <NavLink label="Resources" url="/resources/" />
        <NavLink label="Search" url="/search/" />
      </nav>
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;

const NavLinkElement = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;
  margin-top: 1rem;

  @media screen and ${mediaQuery.minMd} {
    margin-left: 3rem;
    margin-right: 0;
    margin-top: 0;
  }
`;

const NavLink = ({ url, label }: { url: string, label: string }) => (
  <NavLinkElement activeClassName="active" to={url}>{ label }</NavLinkElement>
);
