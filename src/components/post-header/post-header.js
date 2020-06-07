import React from "react";
import "./post-header.scss";

const PostHeader = ({ meta }) => {
  return (
    <>
      <div className={"post-header"}>
        <div className="container">
          <h1>{meta.title}</h1>
          <div className="meta">
            <div className="published">
              <span>Published</span>
              <time dateTime="{ post.date }">{meta.date}</time>
            </div>
            <div className="updated">
              <span>Updated</span>
              Updated on 4 December, 2019
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
