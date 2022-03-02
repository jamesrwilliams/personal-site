import styled from 'styled-components';
import {
  accentLinkColor,
  accentPrimary, animationTiming, mediaQuery,
} from '../../theme/variables';

const PostContent = styled.div`
  font-size: 16px;
  line-height: 1.7777778;
  max-width: 65ch;
  color: #171717;
  margin: 0 0 2rem;

  p {
    margin-bottom: 1.3333333em;
  }

  h1,h2 { color: #171717; }

  h2 {
    font-size: 1.6666667em;
    margin-top: 1.8666667em;
    margin-bottom: 1.0666667em;
    line-height: 1.3333333;
  }

  hr {
    margin-top: 3.1111111em;
    margin-bottom: 3.1111111em;
    border: 0 solid #e5e5e5;
    border-top-width: 1px;
    height: 0;
  }

  a,
  a:link{
    color: ${accentLinkColor};
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* Change the fill of an active # link */
    &[id]:target .anchor svg { fill: ${accentPrimary}; }
  }

  h3,
  h4,
  h5,
  h6 {
    .anchor { display: none; }
  }

  .anchor.before {
    opacity: 1;
    transition: all 0.3s ease;
    position: absolute;
    left: -2rem;
    transform: skew(-15deg, 0);

    @media screen and ${mediaQuery.maxMd} {
      display: none;
    }

    svg {
      transition: all .3 ${animationTiming};
      fill: #ccc;
    }
  }

  figure {
    margin: 0;

    > p {
      margin-bottom: 0;
    }

    > *:first-child { margin-top: 0; }
    > *:last-child { margin-bottom: 0 !important; }
  }

  figcaption {
    padding: calc(1rem + 15px) 1rem 1rem;
    background: #eee8;
    border: 1px solid #eee;
    font-size: 90%;
    margin-top: -15px;
    border-bottom-right-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;

    > *:first-child { margin-top: 0; }
    > *:last-child { margin-bottom: 0; }
  }

  h2 {
    font-size: 1.6666667em;
    margin-top: calc(5*1rem);
    margin-bottom: 1.0666667em;
    line-height: 1.3333333;
  }

  h3 {
    font-size: 1.3333333em;
    margin-top: 1.6666667em;
    margin-bottom: .6666667em;
    line-height: 1.5;
  }

  blockquote {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #eee8;
    margin: 0;
    font-style: italic;
    position: relative;
    padding: 1rem;

    &:before {
      position: absolute;
      content: '';
      z-index: 200;
      left: 0;
      top: 0;
      width: 3px;
      bottom: 0;
      background: linear-gradient(to bottom, #0ba7fd, #01d8d1);
    }

    > *:first-child { margin-top: 0; }
    > *:last-child { margin-bottom: 0; }
  }

  pre {
    border-radius: .375rem;
    font-size: .777779em;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 1em 1.5em;

    @media screen and ${mediaQuery.minMd} {
      font-size: .8888889em;
    }
  }

  ul {
    padding-left: 1rem;

    li {
      margin-bottom: .3rem;
    }
  }

  figure > .mermaid {
    background: #fff;
    border: 1px solid #eee5;
    padding: 1rem;
  }

  figure > .mermaid + figcaption {
    margin-top: 0!important;
    padding: 1rem;
  }

  details {
    background: #fff;
    border: 1px solid #eee;
    margin: 1rem 0;
  }

  details[open] summary {
    border-bottom: 1px solid #eee;
  }

  details summary {
    cursor: pointer;
    background: #fff;
    padding: .5rem;
  }

`;

export default PostContent;
