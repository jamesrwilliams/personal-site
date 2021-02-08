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
        <header className={'bg-blue text-white'}>
          <div className={'container py-8 align-middle content-center flex flex-col sm:flex-row content-evenly justify-between justify-items-end'}>
            <Link to="/" className={'flex md:justify-between content-center'}>
              <GatsbyImage className={'rounded-full self-center inline-block'} style={{ width: 30, height: 30 }} fluid={profile.childImageSharp.fluid} />
              <span className={'ml-4 self-center'}>James R. Williams</span>
            </Link>
            <nav className={'md:flex mt-8 md:mt-0 justify-between content-center'}>
              <NavLink label={'About'} url={'/about/'} />
              <NavLink label={'Posts'} url={'/posts/'} />
              <NavLink label={'Resources'} url={'/resources/'} />
              <NavLink label={'Search'} url={'/search/'} />
            </nav>
          </div>
        </header>
  );

}

export default Header;

const NavLink = ({ url, label }: { url: string, label: string } ) => {
    return <Link
        className={'transition inline-block font-medium mr-2 md:mr-4 self-center py-1 px-2 md:px-4 md:py-2 rounded-md hover:bg-white hover:bg-opacity-50 hover:text-blue'}
        activeClassName={'bg-white text-blue hover:bg-opacity-100'}
        to={url}>{ label }</Link>
}
