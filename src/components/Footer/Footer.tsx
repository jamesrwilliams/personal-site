import React from 'react'
import {GitHub, HackerRank, Instagram, LinkedIn, Pluralsight, StackOverflow, Twitter} from '../social/Social';

const Footer: React.FC<{ buildID: string, buildTime: string }> = ({ buildID, buildTime}) => (
    <footer className={'bg-blue text-white text-sm'} data-build-id={buildID} data-build-date={buildTime}>
      <div className={'container md:flex text-center justify-center md:justify-between py-8 content-center'}>
        <span className={'mr-4 self-center font-medium'}>© {new Date().getFullYear()} James R. Williams</span>
        <code className={'opacity-50 self-center'} role={'img'} aria-label={'Hip Hip Array '} title={'Hip Hip Array '}>['hip','hip']</code>
        <span className={'flex-grow'} />
        <nav className={'mt-6 justify-center md:mt-0 flex'}>
            <div className={'md:ml-5'}><GitHub /></div>
            <div className={'ml-5'}><LinkedIn /></div>
            <div className={'ml-5'}><Twitter /></div>
            <div className={'ml-5'}><Instagram /></div>
            <div className={'ml-5'}><Pluralsight /></div>
            <div className={'ml-5'}><HackerRank /></div>
            <div className={'ml-5'}><StackOverflow /></div>
        </nav>
      </div>
    </footer>
  );

export default Footer;

