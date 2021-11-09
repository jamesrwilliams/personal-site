import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ToCWrapper = styled.div`
  background: #fff;
  display: block;
  top: 0;
  position: sticky;
`;

const TableOfContents = ({ data }: any) => {
  const { items } = data;

  return (
    <ToCWrapper>
      <details>
        <summary>Contents</summary>
        <ContentsList items={items} />
      </details>
    </ToCWrapper>
  );
};

const ContentsList = ({ items }: any) => (
  <ul>
    {items.map((item: any) => <ContentsItem key={`${item.url}-item`} item={item} />)}
  </ul>
);

const ContentsItem = ({ item }: any) => (
  <li>
    <Link to={item.url}>{item.title}</Link>
    {/**
     * conditionally render another `ContentsList` within this `<li>`
     * if there is a `items` array within this `item`
     */}
    {item.items && item.items.length && (
      <ContentsList key={`${item.url}-list`} items={item.items} />
    )}
  </li>
);

export default TableOfContents;
