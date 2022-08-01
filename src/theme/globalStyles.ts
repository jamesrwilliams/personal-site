import { createGlobalStyle } from 'styled-components';
import syntaxHighlighting from './syntax-highlighting';
import footnoteStyles from './partials/footnotes';

const GlobalStyles = createGlobalStyle`

  * {
    text-rendering: optimizeLegibility;
    transition: all .7s ease;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  :target:before {
    content: "";
    display: block;
    height: 80px;
    margin: -80px 0 0;
  }

  body {
    margin: 0;
    background: ${({theme}) => theme.pageBackground};
    color: ${({theme}) => theme.textColor};
    transition: background-color 1s ease;
    font-size: 16px;
  }

  main {
    border-top: 4rem solid ${({theme}) => theme.navigation.overscroll};
    margin-bottom: 2rem;
    min-height: calc(100vh - 145px);
  }

  a,
  a:link {
    color: ${({theme}) => theme.link.regular};
    text-decoration: none;
  }

  a:visited {
    color: ${({theme}) => theme.link.visited}
  }

  // Partials
  ${footnoteStyles}
  ${syntaxHighlighting}

    // Legacy
  .mermaid div {
    line-height: 1!important;
    vertical-align: super;
  }

  .gatsby-resp-image-wrapper {
    border-radius: 0.375rem;
    overflow: hidden;
  }

  table {
    width: 100%;
    table-layout: auto;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 0.8888889em;
    line-height: 1.5;
    border-collapse: collapse;
    text-indent: 0;
    border-color: inherit;
  }

  article {
    line-height: 1.7777778;

    p {
      margin-bottom: 1.3333333em;
      max-width: 65ch;
    }
  }

  thead {
    color: ${({theme}) => theme.headingColor};
    font-weight: 600;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.dividerColor};
    border-bottom-style: solid;
  }

  thead th {
    padding-right: 0.75em;
    padding-bottom: 0.75em;
    padding-left: 0.75em;
  }

  thead th:first-child,
  tbody th:first-child { padding-left: 0; }

  tbody tr {
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.dividerColor};
    border-bottom-style: solid;
  }

  tbody td { padding: 0.75em; }
  tbody td:first-child { padding-left: 0; }

  ::selection {
    background: #ff05;
  }

  hr {
    margin-top: 3.1111111em;
    margin-bottom: 3.1111111em;
    border: 0 solid ${({theme}) => theme.dividerColor};
    border-top-width: 1px;
    height: 0;
  }

  blockquote {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    margin: 0;
    line-height: 1.5;
    color: ${({theme}) => theme.headingColor};
    font-size: 110%;
    position: relative;
    padding: 0 1rem;

    &:before {
      position: absolute;
      content: '';
      z-index: 200;
      left: 0;
      top: 0;
      width: 2px;
      bottom: 0;
      background: ${({theme}) => theme.textGradient};
    }

    > *:first-child { margin-top: 0; }
    > *:last-child { margin-bottom: 0; }
  }

  details {}

  details[open] summary {}

  details summary {
    cursor: pointer;
    color: ${({theme}) => theme.headingColor};
  }

  figure > .mermaid {
    //padding: 1rem;
  }

  figure > .mermaid + figcaption {
    margin-top: 1rem;
  }

  svg[id^=mermaid] {
    background: ${({theme}) => theme.blockquoteBackground};

    &:not(> figure) {
      padding: 1rem 0;
      border-radius: 5px;
    }

    rect.actor {
      fill: ${({theme}) => theme.pageBackground} !important;
    }

    text.actor tspan {
      font-family: sans-serif;
      fill: ${({theme}) => theme.textColor} !important;
    }

    text.messageText {
      fill: ${({theme}) => theme.textColor} !important;
      stroke: none !important;
    }
  }

`;

export default GlobalStyles;
