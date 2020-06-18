import React from "react";

const PostMeta = ({ meta }) => {
  return (
    <>
      <div className="meta">
        <div className="published">
          <span>Published</span>
          <time dateTime="{ post.date }">{meta.date}</time>
        </div>
        {meta.updated !== null &&
        <div className="updated">
          <span>Updated</span>
          <time dateTime={ meta.updated }>{meta.updated}</time>
        </div>
        }
      </div>
    </>
  );
};

export default PostMeta;
