import styled from 'styled-components';
import { animationTiming, mediaQuery} from '../../theme/variables';

const PostContent = styled.div`
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

    color: ${(props) => props.theme.headingColor};
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
      transition: all .3 ${animationTiming};
      fill: ${(props) => props.theme.headingColor};
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
    font-style: italic;e
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
