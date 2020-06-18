import React from "react";
import "./post-meta.scss";
import PropTypes from 'prop-types'
import PageHeader from '../page-header/page-header'

const PostMeta = ({ meta, keyline }) => {
  return (
    <>
      <div className={"post-meta fill-color " + (keyline ? 'accent-line' : '') }>
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

PostMeta.propTypes = {
  keyline: PropTypes.bool,
};

PostMeta.defaultProps = {
  keyline: true,
};

export default PostMeta;
