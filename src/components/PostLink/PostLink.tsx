import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PostInterface from '../../models/PostInterface';
import { mediaQuery } from '../../theme/variables';

const PostLinkContainer = styled(Link)`
  margin-bottom: 2rem;
  display: block;
  position: relative;
  border: 1px solid #ccc5;
  color: #000000d9;
  background: #fff;
  font-size: 14px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 1s ease;

  &:hover {
    background: #fff;
  }
`;

interface PostLinkInterface {
  post: PostInterface,
  excerpt?: boolean;
  timeToRead?: boolean;
}

const PostPreviewTitle = styled.div`
  padding: 0 12px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
  font-size: 14px;
`;

const PostPreviewTitleLink = styled.span`
  font-weight: 500;
  color: #000000d9;
  font-size: 16px;
  padding: 8px 0;
  display: block;
  text-decoration: none;
`;

const PostPreviewBody = styled.div`
  padding: 12px;
  font-weight: 400;
  opacity: .7;
`;

const PostPreviewExcerpt = styled.div`
  margin-bottom: 1rem;
`;

const PostPreviewMetaItem = styled.div`
  display: flex;
  margin-right: 2rem;
`;

const PostPreviewMetaContainer = styled.div`
  @media screen and ${mediaQuery.maxMd} {
    > div:first-child {
      margin-bottom: .5rem;
    }
  }

  @media ${mediaQuery.minMd} {
    display: flex;
  }
`;

const PostLink = ({ post }: PostLinkInterface) => (
  <PostLinkContainer to={`/posts/${post.slug}`}>
    <PostPreviewTitle>
      <time style={{ color: '#333', fontVariantNumeric: 'tabular-nums' }} dateTime={post.frontmatter.date}>
        { new Date(post.frontmatter.date).toLocaleDateString('en-CA', {
          year: 'numeric', month: 'numeric', day: 'numeric',
        }) }
      </time>
      <span> - </span>
      <strong>{post.frontmatter.title}</strong>
    </PostPreviewTitle>
  </PostLinkContainer>
);

PostLink.defaultProps = {
  excerpt: true,
  timeToRead: true,
};

export default PostLink;
