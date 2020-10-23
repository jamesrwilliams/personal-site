import React from "react";
import "./page-header.scss";
import PropTypes from 'prop-types'

const PageHeader = ({ title, compressed, post }) => {
  return (
    <>
      <div className={"page-header container " + (compressed === true ? ' compressed' : '' ) }>
          <h1>{title}</h1>
          { post !== false &&
            <div className={"post-meta" }>
                <div className="published">
                <span>Published</span>
                <time dateTime={ post.date }>{post.date}</time>
                </div>
                {post.updated !== null &&
                  <div className="updated">
                    <span>Updated</span>
                    <time dateTime={ post.updated }>{post.updated}</time>
                  </div>
                }
            </div>
          }
      </div>
    </>
  );
};

PageHeader.propTypes = {
  post: PropTypes.any,
  compressed: PropTypes.bool,
};

PageHeader.defaultProps = {
  compressed: false,
  post: false
};

export default PageHeader;
