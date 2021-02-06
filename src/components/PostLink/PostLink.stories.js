import React from 'react'
import PostLink from './PostLink'

export default {
  title: 'Components/Post Link',
  component: PostLink,
};

const testPost = {
  slug: 'foo-bar',
  title: 'foo-bar',
  date: new Date().toISOString(),
}

export const postLink = () => <PostLink post={testPost} />;
