import { createGlobalStyle } from 'styled-components';
import syntaxHighlighting from './syntax-highlighting';
import footnoteStyles from './partials/footnotes';

const GlobalStyles = createGlobalStyle`

  * { text-rendering: optimizeLegibility; }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.5;
  }

  body {
    margin: 0;
    background: #f5f7f9;
    background: ${(props) => props.theme.pageBackground};
    color: #4a4d70;
    transition: background-color 1s ease;
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

  thead {
    color: #171717;
    font-weight: 600;
    border-bottom-width: 1px;
    border-bottom-color: #d4d4d4;
    border-bottom-style: solid;
  }

  thead th {
    padding-right: 0.75em;
    padding-bottom: 0.75em;
  }

  tbody tr {
    border-bottom-width: 1px;
    border-bottom-color: #e5e5e5;
    border-bottom-style: solid;
  }

  tbody td { padding: 0.75em; }
  tbody td:first-child { padding-left: 0; }

  ::selection {
    background: #ff05;
  }

  hr {
    border: 0;
    background: linear-gradient(to right, #0ba7fd, #01d8d1);
    background: #ccc;
    height: 1px;
  }

`;

export default GlobalStyles;
