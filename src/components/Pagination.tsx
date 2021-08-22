import React from 'react';
import {Link} from 'gatsby';

interface PaginationData {
    previous: PaginationLink;
    next: PaginationLink;
}

interface PaginationLink {
    slug: string;
    title: string;
    post_date: string;
    post_date_timestamp: string;
}

const Pagination = ({ data } : { data: PaginationData }) => {
  const { previous, next } = data;

  return (
    <ul className="md:flex text-center md:text-auto justify-between" style={{ borderTop: '1px solid #eee' }}>
      {next ? <PaginationLink prefix={<>&#8592;</>} post={next} /> : <span /> }
      {previous ? <PaginationLink suffix={<>&#8594;</>} post={previous} /> : ''}
    </ul>
  );
};

const PaginationLink = ({ post, prefix, suffix }: { prefix?: any, suffix?: any, post: PaginationLink }) => (
  <li>
    <Link to={`/posts/${post.slug}`} className="text-center py-6 flex justify-between">
      { prefix ? <span className="mr-2">{ prefix }</span> : '' }
      <span>{ post.title }</span>
      { suffix ? <span className="ml-2">{ suffix }</span> : '' }
    </Link>
  </li>
);

export default Pagination;
