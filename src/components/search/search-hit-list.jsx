import React from 'react';
import styled from 'styled-components';
import SearchHit from './search-hit';

const SearchHitListElement = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// eslint-disable-next-line react/prop-types
const SearchHitList = ({ hits }) => (
  <SearchHitListElement>
    { Array.isArray(hits) && hits.length === 0 ? (
      <p>No results found...</p>
    ) : hits.map((hit) => (
      <li key={hit.objectID}>
        <SearchHit hit={hit} />
      </li>
    ))}
  </SearchHitListElement>
);

SearchHitList.defaultProps = {
  hits: [],
};

export default SearchHitList;
