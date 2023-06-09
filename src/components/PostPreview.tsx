import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import {BlogFields} from "../templates/BlogPostTemplate";

type PostPreview = {
  post: BlogFields;
}

const PostListOrderedList = styled.ol`
  padding: 0;
  margin: 0;
`;

type PostList = {
  posts: BlogFields[]
}

export const PostList: React.FC<PostList> = ({ posts }) => {
  return <PostListOrderedList>
    { posts.map((post) => (
      <PostPreview key={post.fields.slug} post={post} />
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
    font-size: 1.25rem;
  }

  span {
    font-size: .875rem;
    color: #475569;
    font-variant: tabular-nums;
  }
`;

export const PostPreview: React.FC<PostPreview> = ({ post }) => {
  return <PostListItem>
    <Link to={'/posts/' + post.fields.slug}>
      <h3>{post.frontmatter.title}</h3>
      <span>{ post.frontmatter.dateReadable }</span>
    </Link>
  </PostListItem>
}
