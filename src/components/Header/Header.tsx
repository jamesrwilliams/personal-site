import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {primaryBlue} from '../../variables';
import Container from '../Container';

const HeaderContainer = styled.header`
    background: ${primaryBlue};
    color: #fff;
    padding: 1.5rem .5rem;
  `;

const HeaderWrapper = styled(Container)`
     display: flex;

  a {
    text-decoration: none;
  }
  `;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <span style={{ color: '#fff', textDecoration: 'none' }}>James R. Williams</span>
        </Link>
        <span style={{ flexGrow: 1 }} />
        <nav>
          <NavLink label="About" url="/about/" />
          <NavLink label="Posts" url="/posts/" />
          <NavLink label="Resources" url="/resources/" />
          <NavLink label="Search" url="/search/" />
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const NavLink = ({ url, label }: { url: string, label: string }) => (
  <Link activeClassName="active" to={url} style={{ color: '#fff', textDecoration: 'none', marginLeft: '3rem' }}>
    { label }
  </Link>
);
