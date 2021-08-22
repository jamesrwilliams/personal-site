import React from 'react';
import PostLink from '../PostLink/PostLink';

const SearchHit = ({ hit }: any) => {
  const PostObject: PostInterface = {
    date: new Date((hit.post_date_timestamp * 1000)).toISOString(),
    title: hit.title,
    slug: hit.slug,
  };

  return (
    <ul className="search-hit">
      <PostLink post={PostObject} />
    </ul>
  );
};

export default SearchHit;
