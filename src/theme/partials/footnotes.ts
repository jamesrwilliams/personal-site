import { css } from 'styled-components';

const footnoteStyles = css`
  .footnote-backref {
    font-family: initial;
    text-decoration: none;
    display: inline-block;
    line-height: 1;
    margin-left: 0.5rem;
  }
  .footnote-ref {
    text-decoration: none;
    display: inline-block;
    margin-left: 0.2rem;
    &::before { content: '['; }
    &::after { content: ']'; }
  }
  .footnotes ol { padding-left: 1.5rem; }
  .footnotes ol li:target { background: #ff03; }
`;

export default footnoteStyles;
