import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import {
  accentPrimary, animationTiming, mediaQuery, primaryBlue,
} from '../../theme/variables';
import Container from '../Container';

const HeaderContainer = styled.header<{ open: boolean }>`
  background: ${primaryBlue};
  position: relative;
  color: #fff;
  font-size: 14px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 500;
  transition: all .3s ${animationTiming};
  border-bottom-style: solid;
  border-bottom-color: ${accentPrimary};
  border-bottom-width: ${(props) => (props.open ? '48px' : '0')};

  @media screen and ${mediaQuery.minMd} {
    border-bottom-width: 0;
  }
`;

const HeaderToggleButton = styled.button<{ open: boolean }>`
  display: inline-block;
  background: none;
  border: 0;
  margin-right: 0;
  padding-right: 0;

  svg {
    fill: #fff;
    transition: all 0.3s ease;
    transform: ${(props) => (props.open ? 'rotate(90deg)' : '')};
  }

  @media screen and ${mediaQuery.minMd} {
    display: none;
  }
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .profile {
    border-radius: 9999px;
    height: 30px;
    width: 30px;
    margin-right: 1rem;
    overflow: hidden;
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
  opacity: 0;
  box-sizing: border-box;
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};
  flex-grow: 1;
  position: absolute;
  transition: all 0.3s ${animationTiming};
  z-index: 500;
  width: 100%;
  margin: 0;
  display: flex;
  padding: .8rem 1rem 1rem;
  max-width: 100%;
  bottom: 0;
  left: 0;

  ${(props) => props.open && css`
    transform: translateY(100%);
    opacity: 1;
  `}

  @media screen and ${mediaQuery.minMd} {
    display: block;
    margin: 0;
    pointer-events: all;
    position: relative;
    flex-grow: unset;
    transform: none;
    align-self: center;
    padding: 0;
    width: auto;
    opacity: 1;
    background: transparent;
  }

  a {
    vertical-align: middle;
  }

`;

const Header = () => {
  const [menuOpen, setMenuState] = useState(false);

  return (
    <HeaderContainer open={menuOpen}>
      <HeaderWrapper>
        <PrimaryNavLink to="/">
          <div>
            <div style={{ borderRadius: '100%' }}>
              <StaticImage
                src="../../images/profile.png"
                alt="James R. Williams"
                placeholder="blurred"
                className="profile"
                width={30}
                quality={100}
                height={30}
              />
            </div>
            <span>James R. Williams</span>
          </div>
        </PrimaryNavLink>
        <HeaderToggleButton open={menuOpen} onClick={() => setMenuState(!menuOpen)}>
          <svg
            aria-label="menu-toggle-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </HeaderToggleButton>
        <PrimaryNav open={menuOpen}>
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

  @media screen and ${mediaQuery.minMd} {
    margin-left: 3rem;
    margin-right: 0;
  }
`;

const NavLink = ({ url, label }: { url: string, label: string }) => (
  <NavLinkElement activeClassName="active" to={url}>{ label }</NavLinkElement>
);
