import { createGlobalStyle } from 'styled-components';
import syntaxHighlighting from './syntax-highlighting';
import footnoteStyles from './partials/footnotes';

const GlobalStyles = createGlobalStyle`

  :root {
    --animation-timing: cubic-bezier(.645,.045,.355,1);
    --brand-accentLinkColor: #016eaa;
    --brand-accentPrimary: #0ba7fd;
    --brand-accentSecondary: #01d8d1;
    --brand-darker: #031C33;
    --brand-primary: #031C33;
    --brand-primaryBlue: #021526;
    --brand-secondaryBlue: #021220;
    --divider-color: #0005;
    --text-color: #171717;
    --text-gradient: linear-gradient(-45deg, #0ba7fd, #01d8d1);
    --typography-blockquote-background: #0002;
    --typography-code-background: #263238;
    --typography-code-color: #eee;
    --typography-link-color: #fff;
    --typography-primary: #edf2f7;
    --typography-secondary: #A0AEC0;
    --typography-visited-link-color: #fff5;
  }

  * {
    text-rendering: optimizeLegibility;
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
    background: var(--brand-darker);
    color: var(--typography-secondary);
    font-size: 16px;
  }

  main {
    border-top: 4rem solid var(--brand-primary);
    margin-bottom: 2rem;
    min-height: calc(100vh - 145px);
  }

  a,
  a:link {
    color: var(--typography-link-color);
    text-decoration: none;
    word-break: break-all;
  }

  a:visited {
    color: var(--typography-visited-link-color);
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

    p,ul:not(> ul), ol:not(>ol) {
      margin-bottom: 1.3333333em;
    }

    p,
    ul,
    ol {
      max-width: 65ch;
    }
  }

  ol,ul {
    box-sizing: border-box;
  }

  thead {
    color: var(--typography-primary);
    font-weight: 600;
    border-bottom-width: 1px;
    border-bottom-color: var(--divider-color);
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
    border-bottom-color: var(--divider-color);
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
    border: 0 solid var(--divider-color);
    border-top-width: 1px;
    height: 0;
  }

  blockquote {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    margin: 0;
    line-height: 1.5;
    color: var(--typography-primary);
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
      background: var(--text-gradient);
    }

    > *:first-child { margin-top: 0; }
    > *:last-child { margin-bottom: 0; }
  }

  details {}

  details[open] summary {}

  details summary {
    cursor: pointer;
    color: var(--typography-primary);
  }

  figure > .mermaid {
    //padding: 1rem;
  }

  figure > .mermaid + figcaption {
    margin-top: 1rem;
  }

`;

export default GlobalStyles;
