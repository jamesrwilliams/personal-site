import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const PostLinkContainer = styled.div`
    margin-bottom: 2rem;
    position: relative;

    a {
          margin-top: .4rem;
          text-decoration: none;
          color: #000;
    }
`;

const PostLink = ({ post, slug }: { post: any, slug: string }) => (
  <PostLinkContainer>
    <time style={{ color: '#333'}} dateTime={post.date}>{ post.date_readable }</time>
    <span> - </span>
    <Link to={slug}>{post.title}</Link>
  </PostLinkContainer>
);

export default PostLink;
