import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { connectHits, connectSearchBox, InstantSearch } from 'react-instantsearch-dom';
import SearchHitList from './search-hit-list';
import SearchBox from './search-box';
import Container from '../Container';
import PageHeader from '../PageHeader/PageHeader';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const DebouncedSearchBox = connectSearchBox(SearchBox);

const Search = () => {
  const CustomHits = connectHits(SearchHitList);

  return (
    <main>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
        createURL={(searchState) => `?q=${searchState.query}`}
        onSearchStateChange={(searchState) => {
          if (window.ga) {
            const page = `?query=${searchState.query}`;
            window.ga('send', 'pageView', page);
          }
        }}
      >
        <PageHeader title="Search">
          <DebouncedSearchBox delay={500} />
        </PageHeader>
        <Container>
          <CustomHits />
        </Container>
      </InstantSearch>
    </main>
  );
};

export default Search;
