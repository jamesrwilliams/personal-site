import React from 'react'
import SocialIcon from './Icon'
import styled from 'styled-components'

import {
  Codepen as CodepenIcon,
  Github as GitHubIcon,
  Hackerrank as HackerrankIcon,
  Instagram as InstagramIcon,
  Linkedin as LinkedinIcon,
  Pluralsight as PluralsightIcon,
  Stackoverflow as StackoverflowIcon,
  Twitter as TwitterIcon,
} from '@icons-pack/react-simple-icons'

const GitHub = () => (
  <SocialIcon href={'https://github.com/jamesrwilliams/'}>
    <GitHubIcon title="Follow me on GitHub github.com/jamesrwilliams" />
  </SocialIcon>
);

const Twitter = () => (
  <SocialIcon href={'https://www.twitter.com/James_RWilliams'}>
    <TwitterIcon title={'Follow me on twitter @James_RWilliams'} />
  </SocialIcon>
);

const LinkedIn = () => (
  <SocialIcon href={'https://www.linkedin.com/in/thejamesrwilliams/'}>
    <LinkedinIcon title={'Find me on LinkedIn @thejamesrwilliams'} />
  </SocialIcon>
);

const CodePen = () => (
  <SocialIcon href={'https://codepen.io/jamesrwilliams/'}>
    <CodepenIcon title={'Find me on Codepen @thejamesrwilliams'} />
  </SocialIcon>
);

const StackOverflow = () => (
  <SocialIcon href={'https://stackoverflow.com/users/1958764/james-w?tab=profile'}>
    <StackoverflowIcon title={'Find me on stackoverflow'} />
  </SocialIcon>
);

const HackerRank = () => (
  <SocialIcon href={'https://www.hackerrank.com/jamesrwilliams'}>
    <HackerrankIcon title={'Find me on stackoverflow'} />
  </SocialIcon>
);

const Instagram = () => (
  <SocialIcon href={'https://instagram.com/thejamesrwilliams'}>
    <InstagramIcon title={'Find me on stackoverflow'} />
  </SocialIcon>
);

const Pluralsight = () => (
  <SocialIcon href={'https://app.pluralsight.com/profile/jamesrwilliams'}>
    <PluralsightIcon title={'Find me on Pluralsight'} />
  </SocialIcon>
);

const SocialNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  li {
    display: inline-block;
    margin: 0 .5rem;
    
    @media screen and (min-width: 960px) {
      margin-left: 1rem;
      margin-right: 0;
    } 
  }
  
  li a { display: block }
  
  li a svg {
    fill: #fff5;
    
    &:hover {
      fill: #fff;
    }
  }
`;

const SocialIcons = () => {
  return (
    <nav>
      <ul>
        <li><GitHub /></li>
        <li><Twitter /></li>
        <li><LinkedIn /></li>
        <li><Instagram /></li>
        <li><HackerRank /></li>
        <li><Pluralsight /></li>
        <li><StackOverflow /></li>
      </ul>
    </nav>
  )
}

export {
  GitHub,
  Twitter,
  LinkedIn,
  CodePen,
  StackOverflow,
  HackerRank,
  Instagram,
  Pluralsight
}

export default SocialIcons;


