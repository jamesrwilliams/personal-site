import React from 'react'

const SearchHit = ({ hit }) => {

  return (
    <div className="search-hit">
      <pre>{ JSON.stringify(hit, null, 4) }</pre>
    </div>
  )
}

export default SearchHit
