import React from 'react'
import { Link } from 'gatsby'

/**
 * A description
 */
const PostLink = ({ post }) => {

  const date = new Date(post.date);

  return (
    <div>
      <time dateTime={post.date}>{new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        day: "numeric",
        month: "numeric",
      }).format(date)}</time>
      <span> - </span>
      <Link className={'post-title'} to={"/posts/" + post.slug}>{post.title}</Link>
    </div>
  );
};

export default PostLink;
