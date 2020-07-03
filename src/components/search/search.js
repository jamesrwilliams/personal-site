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
  <>
  <main>
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <div style={{ backgroundColor: '#e9ecef', padding: '2rem', marginBottom: '2rem' }}>
        <div className="container">
         <SearchBox />
        </div>
      </div>
      <div className={"container"}>
        <Hits hitComponent={SearchHit} />
      </div>
    </InstantSearch>
  </main>
  </>
);

export default Search;
