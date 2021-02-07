import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import GatsbyImage from 'gatsby-image'

const Header = () => {

  const { profile } = useStaticQuery(graphql`
    query {
      profile: file(base: {eq: "profile.jpg"}) {
          childImageSharp {
              fluid(maxWidth: 50) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
    }
  `);

  return (
      <>
    <header className={'bg-blue text-white'}>
      <div className={'container flex content-evenly justify-between justify-items-end'}>
        <Link to="/" className={'inline-block'}>
          <GatsbyImage className={'rounded-full inline-block'} style={{ width: '30px' }} fluid={profile.childImageSharp.fluid} />
          <span>James R. Williams</span>
        </Link>
        <nav className={'flex'}>
          <Link className={'mr-2'} activeClassName={'active'} to={"/about/"}>About</Link>
          <Link className={'mr-2'} activeClassName={'active'} to={"/posts/"}>Posts</Link>
          <Link className={'mr-2'} activeClassName={'active'} to={"/resources/"}>Resources</Link>
          <Link className={'mr-2'} activeClassName={'active'} to={"/search/"}>Search</Link>
        </nav>
      </div>
    </header>
      </>
  );

}

export default Header;
