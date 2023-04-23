import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import {mediaQuery} from '../../theme/variables';
import Container from '../Container';
import { GitHub, LinkedIn } from "../social/Social";
import {BiMenu} from "react-icons/all";

const HeaderContainer = styled.header<{ open: boolean }>`
  background: var(--brand-primaryBlue);
  position: fixed;
  color: #fff;
  z-index: 600;
  width: 100%;
  font-size: 14px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: all .3s var(--animation-timing);
  max-height: 58px;

  a:link,
  a:visited {
    color: #fff;
  }

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
  color: inherit;
  transform: translateY(2px);

  svg {
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
  max-width: unset;

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
  transition: all 0.3s var(--animation-timing);
  z-index: 500;
  width: 100%;
  margin: 0;
  display: flex;
  padding: .8rem 2rem 1rem;
  max-width: 100%;
  bottom: 0;
  left: 0;
  background: var(--brand-accentPrimary);

  ${(props) => props.open && css`
    transform: translateY(100%);
    opacity: 1;
  `}

  a {
    text-decoration: none;
    margin-right: 1rem;
    transform: translateY(2px);

    @media screen and ${mediaQuery.minMd} {
      margin-left: 3rem;
      margin-right: 0;
    }
  }

  @media screen and ${mediaQuery.minMd} {
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

const CollapsableNavigation = styled.div`
  display: flex;
  flex-direction: initial;

  @media screen and ${mediaQuery.minMd} {
    flex-direction: row-reverse;
  }
`;

const NavLink = ({ url, label }: { url: string, label: string|JSX.Element }) => (
  <Link activeClassName="active" to={url}>{ label }</Link>
);

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
                width={60}
                quality={100}
                height={60}
              />
            </div>
            <span>James R. Williams</span>
          </div>
        </PrimaryNavLink>
        <CollapsableNavigation>
          <HeaderToggleButton aria-label={"Toggle theme"} open={menuOpen} onClick={() => setMenuState(!menuOpen)}>
            <BiMenu size={'2rem'} />
          </HeaderToggleButton>
          <PrimaryNav open={menuOpen}>
            <NavLink label="About" url="/about/" />
            <NavLink label="Posts" url="/posts/" />
            <NavLink label={"CV"} url={'/cv'} />
            <GitHub />
            <LinkedIn />
          </PrimaryNav>
        </CollapsableNavigation>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;


