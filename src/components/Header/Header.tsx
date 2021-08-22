import React, {useState} from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import {GatsbyImage} from 'gatsby-plugin-image';
import {primaryBlue} from '../../variables';
import Container from '../Container';

const Header = () => {
  const [menuOpen, toggleMenu] = useState(false);

  const { profile } = useStaticQuery(graphql`
    query {
      profile: file(base: {eq: "profile.jpg"}) {
          childImageSharp {
              gatsbyImageData(layout: FIXED)
              fluid(maxWidth: 50) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
    }
  `);

  const HeaderContainer = styled.header`
    background: ${primaryBlue};
    color: #fff;
  `;

  const HeaderWrapper = styled(Container)`
        display: flex;
        
    `;

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/" className="flex md:justify-between content-center">
          <div style={{ borderRadius: '100%', display: 'inline-block' }}>
            <GatsbyImage
              style={{ width: 30, height: 30 }}
              image={profile.childImageSharp.gatsbyImageData}
              alt="James R. Williams"
            />
          </div>
          <span style={{ }} className="ml-4 self-center">James R. Williams</span>
        </Link>
        <button type="button" aria-label="Toggle Menu" className="inline-block md:hidden" onClick={() => toggleMenu(!menuOpen)}>
          <span className="text-white ">
            <svg aria-label="menu-toggle-icon" className={`fill-current transition-all transform ${menuOpen ? 'rotate-90' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </span>
        </button>
        <nav className={` ${menuOpen ? 'block' : 'hidden'}`}>
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
  <Link
    className="transition inline-block font-medium mr-2 md:mr-4 self-center py-1 px-2 md:px-4 md:py-2 rounded-md hover:bg-white hover:bg-opacity-50 hover:text-blue"
    activeClassName="bg-white text-blue hover:bg-opacity-100"
    to={url}
  >
    { label }
  </Link>
);
