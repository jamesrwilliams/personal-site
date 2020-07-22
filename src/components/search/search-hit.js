import React from 'react'
import PostInline from '../post-inline/post-inline'

const SearchHit = ({ hit }) => {

  const post = hit.frontmatter;
    post.excerpt = hit.excerpt;

  return (
    <div className="search-hit">
      <PostInline post={post}/>
    </div>
  )
}

export default SearchHit
