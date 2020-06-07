import React from "react";
import { Link } from "gatsby";

const PostInline = ({ post }) => {

  return (
    <>
      <Link to={"/posts/" + post.slug}>{post.title}</Link>
    </>
  );
};

export default PostInline;
