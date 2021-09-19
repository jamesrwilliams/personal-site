import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PostInterface from '../models/PostInterface';
import { mediaQuery } from '../theme/variables';
import Container from './Container';

interface PaginationProps {
    previous: PostInterface;
    next: PostInterface;
}

interface PaginationLinkProps {
  post: PostInterface;
  prefix?: string | ReactElement;
  suffix?: string | ReactElement;
}

const PaginationLinkElm = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PaginationLink = ({ post, prefix, suffix }: PaginationLinkProps) => (
  <PaginationLinkElm to={`/posts/${post.slug}`}>
    { prefix ? <span className="link" style={{ marginRight: '1rem' }}>{ prefix }</span> : '' }
    <span className="title">{ post.frontmatter.title }</span>
    { suffix ? <span className="link" style={{ marginLeft: '1rem' }}>{ suffix }</span> : '' }
  </PaginationLinkElm>
);

PaginationLink.defaultProps = {
  prefix: '',
  suffix: '',
};

const PaginationElm = styled.nav`
  border-top: 1px solid #eee;
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  position: relative;
  justify-content: space-between;

  @media screen and ${mediaQuery.minMd} {
    flex-direction: row;
  }
`;

const Pagination = ({ previous, next } : PaginationProps) => (
  <Container>
    <PaginationElm>
      {next ? <PaginationLink prefix={<>&#8592;</>} post={next} /> : <span /> }
      {previous ? <PaginationLink suffix={<>&#8594;</>} post={previous} /> : ''}
    </PaginationElm>
  </Container>
);

export default Pagination;
