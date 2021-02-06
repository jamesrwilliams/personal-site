import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Hero = () => {
  return (
    <div className={'bg-blue'}>
      <div className={'container text-white'}>
        <h1 className={'text-9xl font-black'}>Hey, I'm James</h1>
        <p className={'text-2xl'}>I'm a full-stack web developer based in Toronto, currently working with the wonderful team at <OutboundLink
          rel="noopener noreferrer" target={'_blank'}
         href="https://points.com" style={{ marginBottom: 0 }}>Points</OutboundLink>, who enjoys building delightfully fast, easy to use, and engaging digital projects.</p>
      </div>
    </div>
  )
}

export default Hero;
