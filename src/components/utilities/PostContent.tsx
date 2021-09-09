import styled from 'styled-components';

const PostContent = styled.div`
  //max-width: 860px;
  font-size: 1.125rem;
  //color: #404040;
  line-height: 1.7777778;
  max-width: 65ch;
  color: #171717;

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

  h2:before {
    content: '';
    margin-bottom: 1rem;
    width: 64px;
    height: 1px;
    display: block;
    background: #ccc;
    border-bottom: 1px solid #fff;
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
    border-left: 5px solid #eee;
    margin-left: 0;
    padding-left: 1rem;
  }

  pre {
    border-radius: .375rem;
    font-size: .8888889em;
    line-height: 1.75;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 1em 1.5em;
  }

  table {
    width: 100%;
    table-layout: auto;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: .8888889em;
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
    padding-right: .75em;
    padding-bottom: .75em;
  }

  tbody tr {
    border-bottom-width: 1px;
    border-bottom-color: #e5e5e5;
    border-bottom-style: solid;
  }

  tbody td {
    padding: .75em;

    &:first-child { padding-left: 0; }
  }

`;

export default PostContent;
