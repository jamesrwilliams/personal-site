import React from "react";
import { Link } from "gatsby";
import './post-inline.scss';

const PostInline = ({ post }) => {

  let date = new Date(post.date);

  return (
    <>
      <div className="post-inline">
        <time dateTime={post.date}>{new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
        }).format(date)}</time>
        <Link className={'post-title'} to={"/posts/" + post.slug}>{post.title}</Link>
        <p>{post.excerpt}</p>
        <Link to={"/posts/" + post.slug}>Read</Link>
      </div>
    </>
  );
};

export default PostInline;
