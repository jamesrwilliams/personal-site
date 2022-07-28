import React from "react";
import PostInterface from "../models/PostInterface";
import {Link} from "gatsby";
import styled from "styled-components";

type PostPreview = {
  post: PostInterface
}

const PostListOrderedList = styled.ol`
  padding: 0;
  margin: 0;
`;

type PostList = {
  posts: PostInterface[]
}

export const PostList: React.FC<PostList> = ({ posts }) => {
  return <PostListOrderedList>
    { posts.map((post) => (
      <PostPreview key={post.slug} post={post} />
    ))}
  </PostListOrderedList>
}

const PostListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;

  &:hover h3 {
    text-decoration: underline;
  }

  h3 {
    margin-bottom: 0;
  }
  span {

  }
`;

export const PostPreview: React.FC<PostPreview> = ({ post }) => {
  return <PostListItem>
    <Link to={'/posts/' + post.slug}>
      <h3 style={{ fontSize: '1.25rem' }}>{post.frontmatter.title}</h3>
      <span style={{ fontSize: '.875rem', color: '#475569', fontVariant: 'tabular-nums' }}>{ post.frontmatter.dateReadable }</span>
    </Link>
  </PostListItem>
}
