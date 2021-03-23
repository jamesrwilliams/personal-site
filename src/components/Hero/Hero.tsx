import React from 'react'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

const Hero = () => {
  return (
    <div className={'bg-blue md:pt-20'}>
      <div className={'container h-3/6 py-8 md:py-10'}>
          <h1 className={'antialiased text-xl md:text-4xl leading-relaxed max-w-4xl text-white md:leading-relaxed md:font-light'}>
          <span className={'opacity-50 font-light'}>Hello there!</span> I'm James, a development engineer based in Canada, working with the team at <OutboundLink
          className={'underline'}
          rel="noopener noreferrer" target={'_blank'}
         href="https://points.com" style={{ marginBottom: 0 }}>Points.com</OutboundLink>. Building things with TypeScript, React, and Node.</h1>
      </div>
    </div>
  )
}

export default Hero;
