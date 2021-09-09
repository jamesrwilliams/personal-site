import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { mediaQuery, primaryBlue } from '../../theme/variables';
import Container from '../Container';

const HeaderContainer = styled.header`
  background: ${primaryBlue};
  position: relative;
  color: #fff;
  padding: 1rem 0;
  z-index: 500;

  button {
    display: inline-block;
    background: none;
    border: 0;
    margin-right: 0;
    padding-right: 0;

    svg {
      fill: #fff;
      transition: all .3s ease;
    }

    @media screen and ${mediaQuery.minMd} {
      display: none;
    }

    &.open {
      svg { transform: rotate(90deg); }
    }
  }

`;

const HeaderWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .profile {
    border-radius: 100%;
    height: 30px;
    width: 30px;
    margin-right: 1rem;
  }
`;

const PrimaryNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  div {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  span {
    align-self: center;
  }
`;

const PrimaryNav = styled.nav<{ open: boolean }>`
  margin: 1rem 2rem;
  opacity: ${(props) => (props.open ? '0' : '1')};
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};
  flex-grow: 1;
  left: 0;
  right: 0;
  position: absolute;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  bottom: 0;
  transform: translateY(50px);
  z-index: 500;
  display: flex;

  @media screen and ${mediaQuery.minMd} {
    display: block;
    margin: 0;
    position: relative;
    flex-grow: unset;
    transform: none;
    align-self: center;
  }

  a {
    vertical-align: middle;
  }

`;

const Header = () => {
  const [menuClosed, setMenuState] = useState(true);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <PrimaryNavLink to="/">
          <div>
            <StaticImage
              src="../../images/profile.jpg"
              alt="James R. Williams"
              placeholder="blurred"
              className="profile"
              width={50}
              height={50}
            />
            <span>James R. Williams</span>
          </div>
        </PrimaryNavLink>
        <button className={`${menuClosed ? 'closed' : 'open'}`} type="button" onClick={() => setMenuState(!menuClosed)}>
          <svg
            aria-label="menu-toggle-icon"
            className="fill-current transition-all transform rotate-0"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <PrimaryNav open={menuClosed}>
          <NavLink label="About" url="/about/" />
          <NavLink label="Posts" url="/posts/" />
          <NavLink label="Resources" url="/resources/" />
          <NavLink label="Search" url="/search/" />
        </PrimaryNav>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

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
