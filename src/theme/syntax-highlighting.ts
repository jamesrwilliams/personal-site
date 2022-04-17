import { css } from 'styled-components';
import prismTheme from './partials/prismTheme';

const syntaxHighlighting = css`

  .command-line-prompt > span:before {
    color: #999;
    content: " ";
    display: block;
    padding-right: 0.8em;
  }

  /* Prompt for all users */
  .command-line-prompt > span[data-user]:before {
    content: "[" attr(data-user) "@" attr(data-host) "] $";
  }

  /* Prompt for root */
  .command-line-prompt > span[data-user="root"]:before {
    content: "[" attr(data-user) "@" attr(data-host) "] #";
  }

  .command-line-prompt > span[data-prompt]:before {
    content: attr(data-prompt);
  }

  pre[class*="language-"].line-numbers .line-numbers-rows {
    font-family: Roboto Mono, monospace;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1em;
    letter-spacing: 0;
    line-height: 1.5em;
    margin-left: 0.75rem;
    border-right-color: #ccc1;
  }

  .gatsby-code-title + .gatsby-highlight pre {
    margin-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  .gatsby-highlight-code-line {
    background-color: #fff3;
  }

  .gatsby-code-title {
    padding: 0.5em 1em;
    font-size: 90%;
    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;
    background-color: #263238;
    border-bottom: 1px solid #ccc1;
    color: white;
    z-index: 0;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
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

  ${prismTheme}

`;

export default syntaxHighlighting;
