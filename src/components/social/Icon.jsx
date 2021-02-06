import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from 'react'

const SocialIcon = ({ target = '_blank', href='', title = '',  children }) => {
  return (
    <OutboundLink
      target={target}
      rel={'noopener noreferrer'}
      href={href}
      title={title}>
      { children }
    </OutboundLink>
  )
}

export default SocialIcon;
