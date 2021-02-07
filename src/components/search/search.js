import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { connectSearchBox, Hits, InstantSearch } from 'react-instantsearch-dom'
import SearchHit from './search-hit'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

class SearchBox extends React.Component {
  timerId = null;

  state = {
    value: this.props.currentRefinement
  };

  onChangeDebounced = event => {
    const { refine, delay } = this.props;
    const value = event.currentTarget.value;

    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => refine(value), delay);

    this.setState(() => ({
      value
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <input
        value={value}
        className={'block w-full p-4'}
        onChange={this.onChangeDebounced}
        placeholder="Search posts..."
      />
    );
  }
}

const DebouncedSearchBox = connectSearchBox(SearchBox);

const Search = () => (
  <main>
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
      onSearchStateChange={searchState => {
        if(window.ga) {
          const page = `?query=${searchState.query}`;
          window.ga('send', 'pageView', page);
        }
      }}
    >
      <div className={'search-parent p-8'} style={{ backgroundColor: '#e9ecef', marginBottom: '2rem' }}>
        <div className="container">
          <DebouncedSearchBox delay={500} />
        </div>
      </div>
      <div className={"container"}>
        <Hits hitComponent={SearchHit} />
      </div>
    </InstantSearch>
  </main>
);

export default Search;
