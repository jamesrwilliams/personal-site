import React, {ReactElement} from 'react';
import {Link} from 'gatsby';
// eslint-disable-next-line import/extensions
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import PostInterface from '../models/Post.interface';
import {mobileBreakpoint} from '../variables';
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

const PaginationBackground = styled.div`
  background: linear-gradient(to top, #0ba7fd55, #fff0);
`;

const PaginationElm = styled.nav`
  border-top: 1px solid #eee;
  display: flex;
  padding: 3rem 0;
  flex-direction: column;
  justify-content: space-between;


  @media screen and (min-width: ${mobileBreakpoint}) {
    flex-direction: row;
  }
`;

const Pagination = ({ previous, next } : PaginationProps) => (
  <PaginationBackground>
    <Container>
      <PaginationElm>
        {next ? <PaginationLink prefix={<>&#8592;</>} post={next} /> : <span /> }
        {previous ? <PaginationLink suffix={<>&#8594;</>} post={previous} /> : ''}
      </PaginationElm>
    </Container>
  </PaginationBackground>
);

export default Pagination;
