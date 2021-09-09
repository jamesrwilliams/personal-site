import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: .2em;
    color: #24292e;
    font-weight: 400;
    font-size: 85%;
    padding: .2em .4em !important;
    background: #f3f3f3;
  }

  :not(pre) > code[class*="language-"]::selection {
    background: #ff0;
  }
`;

export default GlobalStyles;
