import React from 'react'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

const Hero = () => {
  return (
    <div className={'bg-blue pt-20'}>
      <div className={'container h-3/6 py-10'}>
          <h1 className={'antialiased text-4xl max-w-4xl text-white leading-relaxed'}>
          <span className={'opacity-50'}>Hello there!</span> I'm James, Toronto based frontend developer️ working with the team at <OutboundLink
          className={'underline'}
          rel="noopener noreferrer" target={'_blank'}
         href="https://points.com" style={{ marginBottom: 0 }}>Points.com</OutboundLink>, building things with Typescript, React and Node.</h1>
      </div>
    </div>
  )
}

export default Hero;
