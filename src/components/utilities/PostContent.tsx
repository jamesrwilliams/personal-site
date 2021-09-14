import styled from 'styled-components';
import {
  accentPrimary, animationTiming, mediaQuery,
} from '../../theme/variables';

const PostContent = styled.div`
  font-size: 1rem;
  line-height: 1.7777778;
  max-width: 65ch;
  color: #171717;
  margin: 0 auto 2rem;

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

  a {
    color: ${accentPrimary};
  }

  hr {
    margin-top: 3.1111111em;
    margin-bottom: 3.1111111em;
    border: 0 solid #e5e5e5;
    border-top-width: 1px;
    height: 0;
  }

  a:link {
    color: ${accentPrimary};
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
    box-sizing: border-box;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    padding: 12px;
  }

  figcaption {
    padding-top: 8px;
    border-top: 1px solid #f0f0f0;
    font-style: italic;
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
    border-left: 2px solid ${accentPrimary};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #eee8;
    margin: 0;
    font-style: italic;
    padding: 1rem;

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
    padding-left: 0.5rem;
    list-style-position: inside;

    li {
      margin-bottom: 1rem;
    }
  }

`;

export default PostContent;