import React from 'react';
import PostLink from '../PostLink/PostLink';
import PostInterface from '../../models/Post.interface';

const SearchHit = ({ hit }: any) => {
  const PostObject: PostInterface = {
    slug: hit.slug,
    excerpt: hit.excerpt,
    fileAbsolutePath: '',
    timeToRead: '0',
    frontmatter: {
      title: hit.title,
      date: new Date((hit.post_date_timestamp * 1000)).toISOString(),
      dateReadable: '',
    },
  };

  return (
    <PostLink timeToRead={false} post={PostObject} />
  );
};

export default SearchHit;
