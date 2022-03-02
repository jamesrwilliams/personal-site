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

const PostLink = ({ post, excerpt, timeToRead }: PostLinkInterface) => (
  <PostLinkContainer to={`/posts/${post.slug}`}>
    <PostPreviewTitle>
      <PostPreviewTitleLink>{post.frontmatter.title}</PostPreviewTitleLink>
    </PostPreviewTitle>
    <PostPreviewBody>
      { excerpt ? (
        <PostPreviewExcerpt>
          { post.excerpt }
        </PostPreviewExcerpt>
      ) : ''}
      <PostPreviewMetaContainer>
        <PostPreviewMetaItem>
          <svg role="img" aria-label="calendar icon" style={{ marginRight: '1rem' }} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" /><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
          </svg>
          <time style={{ color: '#333' }} dateTime={post.frontmatter.date}>
            { new Date(post.frontmatter.date).toLocaleDateString('en-CA', {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            }) }
          </time>
        </PostPreviewMetaItem>
        { timeToRead ? (
          <PostPreviewMetaItem>
            <svg role="img" aria-label="clock icon" style={{ marginRight: '1rem' }} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
              <path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            <time dateTime={`${post.timeToRead}m`}>~{post.timeToRead} min read</time>
          </PostPreviewMetaItem>
        ) : '' }
      </PostPreviewMetaContainer>
    </PostPreviewBody>
  </PostLinkContainer>
);

PostLink.defaultProps = {
  excerpt: true,
  timeToRead: true,
};

export default PostLink;
