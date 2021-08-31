import React from 'react';
import PostLink from '../PostLink/PostLink';
import PostInterface from '../../models/Post.interface';

const SearchHit = ({ hit }: any) => {
  const PostObject: PostInterface = {
    date_readable: '',
    date: new Date((hit.post_date_timestamp * 1000)).toISOString(),
    title: hit.title,
    slug: hit.slug,
  };

  return (
    <ul className="search-hit">
      <PostLink slug={PostObject.slug} post={PostObject} />
    </ul>
  );
};

export default SearchHit;
