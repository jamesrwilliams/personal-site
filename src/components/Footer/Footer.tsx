import React from 'react'
import {GitHub, HackerRank, Instagram, LinkedIn, Pluralsight, StackOverflow, Twitter} from '../social/social';

const Footer: React.FC<{ buildID: string, buildTime: string }> = ({ buildID, buildTime}) => (
    <footer className={'bg-blue text-white text-sm'} data-build-id={buildID} data-build-date={buildTime}>
      <div className={'container md:flex justify-between py-8 align-middle content-center'}>
        <span className={'mr-4 self-center font-thin'}>© {new Date().getFullYear()} James R. Williams</span>
        <code className={'opacity-20 self-center'} title={'Hip Hip Array '}>['hip','hip']</code>
        <span className={'flex-grow'} />
        <nav className={'mt-5 md:mt-0 flex'}>
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

