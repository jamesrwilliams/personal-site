import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import './search.scss';
import SearchHit from './search-hit';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const Search = () => (
  <InstantSearch
    indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    searchClient={searchClient}
  >
    <SearchBox />
    <Hits hitComponent={SearchHit} />
  </InstantSearch>
);

export default Search;
