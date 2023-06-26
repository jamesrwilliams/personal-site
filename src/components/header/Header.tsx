import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { GitHub, LinkedIn } from "../social/SocialIcons";
import {
  CollapsableNavigation,
  HeaderContainer, HeaderToggleButton,
  HeaderWrapper, PrimaryNav,
  PrimaryNavLink
} from "./Header.styled";

const NavLink = ({ url, label }: { url: string, label: string|JSX.Element }) => (
  <Link activeClassName="active" to={url}>{ label }</Link>
);

export const Header = () => {
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
            Menu
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
