import React from 'react'
import PropTypes from 'prop-types'

const PageHeader = ({ title, post, children }: { title: string, post: PostInterface, children: React.ReactNode }) => {
  return (
      <div className={"bg-blue text-white"}>
        <div className="container py-10 relative">
          <h1 className={'antialiased text-4xl max-w-4xl text-white leading-relaxed'} style={{ textRendering: 'optimizeLegibility' }}>{title}</h1>
          { post ? (
            <div className="published">
              <span className={'mr-4 text-opacity-50'}>Published</span>
              <time dateTime={ new Date(post.date).toISOString() }>{post.date}</time>
            </div>
          ) : '' }
          <div>{ children }</div>
        </div>
      </div>
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
