import styled from 'styled-components';
import {mediaQuery} from '../../theme/variables';

const PostContent = styled.div`
  margin-bottom: 2rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* Change the fill of an active # link */
    &[id]:target .anchor svg {
      fill: #01d8d1;
    }

    color: var(--typography-primary);
  }

  h2 {
    font-size: 1.6666667em;
    margin-bottom: 1.0666667em;
    line-height: 1.3333333;
    margin-top: 1.6666667em;
  }

  h3 {
    font-size: 1.3333333em;
    margin-top: 1.6666667em;
    margin-bottom: .6666667em;
    line-height: 1.5;
  }

  .anchor.after {
    opacity: 1;
    transition: all 0.3s ease;
    transform: skew(-15deg, 0);

    svg {
      transition: all .3 var(--animation-timing);
      fill: var(--typography-primary);
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
    font-size: 90%;
    font-style: italic;
    border-bottom-right-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;

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

`;

export default PostContent;
