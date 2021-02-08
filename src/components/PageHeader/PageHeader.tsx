import React from 'react';

const PageHeader: React.FC<{ title: string, post?: PostInterface | undefined }> = ({ title, post, children }) => {
  return (
      <div className={"bg-blue text-white pt-5 md:pt-20"}>
        <div className="container pb-10 md:py-10 relative">
          <h1 className={'antialiased text-4xl max-w-4xl text-white leading-relaxed'} style={{ textRendering: 'optimizeLegibility' }}>{title}</h1>
          { post ? (
            <div className={'mt-4'}>
                <span className={'text-opacity-50'}>{ post.draft ? <mark>Draft dated</mark> : 'Published' } </span>
                <time dateTime={ new Date(post.date).toISOString() }>{post.date}.</time>
            </div>
          ) : '' }
          { children }
        </div>
      </div>
  );
};

export default PageHeader;
