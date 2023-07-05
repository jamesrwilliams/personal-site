import { css } from 'styled-components';
import prismTheme from './prismTheme';

const syntaxHighlighting = css`

  // Allow overrides of base prism theme by having this first.
  ${prismTheme}

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

  .gatsby-highlight {
    font-size: 14px;
    margin-top: 0;
  }

  .gatsby-highlight-code-line {
    background-color: #fff3;
  }

  .gatsby-code-title {
    padding: 0.5em 1em;
    font-size: 80%;
    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;
    background-color: #1a2327;
    border-bottom: 1px solid #0002;
    color: white;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
    margin-bottom: -15px;
    position: relative;
    z-index: 500;
    word-break: break-word;
  }

  // Inline code references
  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: .2em;
    color: var(--typography-code-color);
    font-weight: 400;
    font-size: 85%;
    overflow-wrap: break-word;
    padding: .125rem .25rem !important;
    background: var(--typography-code-background);
  }

  :not(pre) > code[class*="language-"]::selection {
    background: #ff0;
  }

`;

export default syntaxHighlighting;
