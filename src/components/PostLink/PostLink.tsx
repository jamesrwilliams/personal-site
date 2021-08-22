import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const PostLinkContainer = styled.div`
    border: 1px solid #eee;
    background: #fff;
    padding: 1rem;
    min-height: 160px;
    margin-bottom: 2rem;
`;

const PostLink = ({ post, slug }: { post: PostInterface, slug: string }) => (
  <PostLinkContainer>
    <time dateTime={post.date}>{ post.date_readable }</time>
    <br />
    <Link to={slug}>{post.title}</Link>
  </PostLinkContainer>
);

export default PostLink;
