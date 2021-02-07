import React from 'react'
import SocialIcons from '../social/';

const Footer: React.FC<{ buildID: string, buildTime: string }> = ({ buildID, buildTime, book }) => (
    <footer className={'bg-blue text-white text-sm'} data-build-id={buildID} data-build-date={buildTime}>
      <div className={'container flex justify-between py-8 align-middle content-center'}>
        <span className={'mr-4 self-center font-thin'}>© {new Date().getFullYear()} James R. Williams</span>
        <code className={'opacity-20 self-center'} title={'Hip Hip Array '}>['hip','hip']</code>
        <span className={'flex-grow'} />
        <SocialIcons />
      </div>
    </footer>
  );

export default Footer;

