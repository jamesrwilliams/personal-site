import React from "react";
import "./post-meta.scss";

const PostMeta = ({ meta }) => {
  return (
    <>
      <div className={"post-meta" }>
        <div className="container">
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
      </div>
    </>
  );
};

export default PostMeta;
