import {OutboundLink} from 'gatsby-plugin-google-analytics'
import React from 'react'

const SocialIcon: React.FC<{ target?: string, href: string, title?: string }> = ({ target = '_blank', href='', title = '',  children }) => {
  return (
    <OutboundLink
      target={target}
      rel={'noopener noreferrer'}
      href={href}>
      { children }
    </OutboundLink>
  )
}

export default SocialIcon;
