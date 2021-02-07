import React from 'react'
import {Link} from 'gatsby'

/**
 * A description
 */
const PostLink = ({ post }: { post: PostInterface }) => {

  const date = new Date(post.date);

  const dateOptions = {
    year: "numeric",
    day: "numeric",
    month: "numeric",
  }

  const readableDate = new Intl.DateTimeFormat("en-GB", dateOptions).format(date);

  return (
    <li className={'flex mb-4'}>
      <time dateTime={post.date} className={'tabular-nums'}>{ readableDate }</time>
      <span className={'mx-4'}> - </span>
      <Link className={'post-title'} to={"/posts/" + post.slug}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
