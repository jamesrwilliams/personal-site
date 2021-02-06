import React from 'react'
import PostLink from '../PostLink/PostLink'

const SearchHit = ({ hit }) => {

  const post = hit.frontmatter;
    post.excerpt = hit.excerpt;

  return (
    <div className="search-hit">
      <PostLink post={post}/>
    </div>
  )
}

export default SearchHit
