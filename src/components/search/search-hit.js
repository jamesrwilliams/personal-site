import React from 'react'
import { Link } from 'gatsby'

const SearchHit = ({ hit }) => (
  <div className="search-hit">

    <Link to={'/posts/' + hit.frontmatter.slug}>
      <div className="title">{hit.frontmatter.title}</div></Link>
      <p>{hit.excerpt}</p>

  </div>
)

export default SearchHit
