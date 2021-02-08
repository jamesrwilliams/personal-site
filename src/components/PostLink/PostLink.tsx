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
    <li className={'flex flex-col md:flex-row mb-4'}>
      <time dateTime={post.date} className={'tabular-nums block md:inline-block font-bold md:font-normal'}>{ readableDate }</time>
      <span className={'hidden md:inline-block mx-4 '}> - </span>
      { post.draft ? <mark className={'mr-2'}>DRAFT</mark> : '' }
      <Link className={'mb-2'} to={"/posts/" + post.slug}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
