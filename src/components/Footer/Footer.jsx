import React from 'react'
import SocialIcons from '../social'

const Footer = ({ buildID, buildTime }) => {

  return (
    <footer className={'bg-blue text-white'} data-build-id={buildID} data-build-date={buildTime}>
      <div>
        <p>© {new Date().getFullYear()} James R. Williams</p>
        <code className={'text-opacity-20'} title={'Hip Hip Array '}>['hip','hip']</code>
      </div>
      <SocialIcons />
    </footer>
  )
}

export default Footer;

